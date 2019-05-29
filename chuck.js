class ChuckFacts {

    displayFact(data)
    {
        if (data.length > 0) {

            var json = JSON.parse(data);

            var msg = document.getElementById('fact');

            msg.innerHTML = json.value;
        }
    }

    getFact()
    {
        fetch('https://api.chucknorris.io/jokes/random?category=dev', {mode: 'cors'})
            .then(
                response => response.text()
            ).then(
                json => new ChuckFacts().displayFact(json)
            )
            .catch(
                error => console.log('Request failed', error)
            );
    }
}

window.addEventListener('load', function load(event){
    var createButton = document.getElementById('button');
    createButton.addEventListener('click', function() { new ChuckFacts().getFact(); });
});
