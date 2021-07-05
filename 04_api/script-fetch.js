const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'https://taniarascia.github.io/sandbox/ghibli/logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

const h1 = document.createElement('h1');
h1.setAttribute('class', 'h1');
h1.innerText = 'List of films'

app.appendChild(logo);
app.appendChild(h1);
app.appendChild(container);


fetch('https://ghibliapi.herokuapp.com/films')
.then((resp) => resp.json())
    .then((data) => {
        data.forEach((movie) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h2 = document.createElement('h2')
            h2.textContent = movie.title

            const p = document.createElement('p');
            movie.description = movie.description.substring(0,300);
            p.textContent = `${movie.description}...`;

            container.appendChild(card);
            card.appendChild(h2);
            card.appendChild(p);
        })
    })
    .catch((err) => {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = err
        app.appendChild(errorMessage);
    })

