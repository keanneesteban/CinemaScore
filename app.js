const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ab3fe432ed88d359f98d6c722f6cf831&page1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=ab3fe432ed88d359f98d6c722f6cf831&query=";

const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');

function returnMovies(url) {
    fetch(url).then(res => res.json())
        .then(function (data) {
            console.log(data.results);
            data.results.forEach(element => {

                const div_card = document.createElement('div');
                div_card.classList.add('card')

                const div_row = document.createElement('div');
                div_row.classList.add('row');

                const div_column = document.createElement('div')
                div_column.classList.add('column');

                const image = document.createElement('img');
                image.src = IMG_PATH + element.poster_path;

                const title = document.createElement('h3');
                title.innerHTML = `${element.title}`;

                main.appendChild(div_row);
                div_row.appendChild(div_column);
                div_column.appendChild(div_card);
                div_card.appendChild(image);
                div_card.appendChild(title);

            });
        });
} 

returnMovies(APILINK);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value.trim();

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = " ";
    }
});