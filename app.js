document.querySelector('form').addEventListener('submit', getJoke);

function getJoke(e){

    const xhr = new XMLHttpRequest();

    const input = document.getElementById('number').value;

    xhr.open("GET", `https://api.icndb.com/jokes/random/${input}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const jokes = JSON.parse(this.responseText);

            let output = '';

            if(jokes.type === 'success'){

                jokes.value.forEach(function(joke){
                    output += `
                    <li class="card py-3 my-2 d-inline-flex align-items-center flex-row"><h3 class="ml-4">${joke.id}</h3><p class="m-auto">${joke.joke}</p></li>
                    `;
                });
    
                document.querySelector('.display-jokes').innerHTML = output;

            } else {
                document.querySelector()
            }


        }
    }

    xhr.send();

    e.preventDefault();
}