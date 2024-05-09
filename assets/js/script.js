'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


const searchInput = document.getElementById('searchInput');
const movieGrid = document.getElementById('movieGrid');

// Function to fetch default movies
async function fetchDefaultMovies() {
  try {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=love'); // Example default query
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to render movies
function renderMovies(movies) {
  movieGrid.innerHTML = '';
  movies.forEach(movie => {
    const { show } = movie;
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    const imageElement = document.createElement('img');
    imageElement.src = show.image ? show.image.medium : 'placeholder-image.jpg';
    const cancelIcon = document.createElement('span');
    cancelIcon.innerHTML = '&#10006;'; 
    cancelIcon.classList.add('cancel-icon');
    cancelIcon.addEventListener('click', () => {
      movieElement.remove(); 
    });
    imageContainer.appendChild(imageElement);
    imageContainer.appendChild(cancelIcon);
    const titleElement = document.createElement('h3');
    titleElement.textContent = show.name;
    const captionElement = document.createElement('p');
    captionElement.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…";
    movieElement.appendChild(imageContainer);
    movieElement.appendChild(titleElement);
    movieElement.appendChild(captionElement);
    movieGrid.appendChild(movieElement);
  });
}


window.addEventListener('load', async () => {
  const defaultMovies = await fetchDefaultMovies();
  renderMovies(defaultMovies.slice(0, 8));
});


searchInput.addEventListener('input', async (event) => {
  const query = event.target.value;
  if (query.length > 2) {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();
    renderMovies(data.slice(0, 8)); 
  } else {
    const defaultMovies = await fetchDefaultMovies();
    renderMovies(defaultMovies.slice(0, 8));
  }
});
