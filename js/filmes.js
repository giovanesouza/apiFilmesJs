// SELECIONA A DIV COM CLASS .MOVIES
const moviesContainer = document.querySelector('.movies')

// OBJETOS COM FILMES CRIADOS DE FORMA DINâMICA
const movies = [
  {
    image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
    title: 'Batman',
    rating: 9.2,
    year: 2022,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorited: false
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
    title: 'Avengers',
    rating: 9.2,
    year: 2019,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorited: false
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
    title: 'Doctor Strange',
    rating: 9.2,
    year: 2022,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorited: false
  },
]

// PERCORRE A LISTA (MOVIES) E RENDERIZA OS FILMES
window.onload = function() {
  movies.forEach(movie => renderMovie(movie))
}

// FUNÇÃO PARA RENDERIZAR
function renderMovie(movie) {

  const { title, image, rating, year, description, isFavorited } = movie

  //CRIA UMA DIV QUE RECEBE A CLASSE MOVIE, QUE SERÁ FILHA DA moviesContainer
  const movieElement = document.createElement('div')
  movieElement.classList.add('movie')

  // PAI = moviesContainer (DECLARADA NO INÍCIO DO CÓDIGO)
  moviesContainer.appendChild(movieElement)

// DIV QUE VAI ENGLOBAR A IMG, TÍTULO, E ÍCONS (LADO ESQUERDO)
  const movieInformations = document.createElement('div')
  movieInformations.classList.add('movie-informations')

  // DIV ONDE VAI FICAR A IMAGEM DO FILME
  const movieImageContainer = document.createElement('div')
  movieImageContainer.classList.add('movie-image')
  const movieImage = document.createElement('img')
  movieImage.src = image
  movieImage.alt = `${title} Poster`
  movieImageContainer.appendChild(movieImage)
  movieInformations.appendChild(movieImageContainer)

  // ÁREA DO TÍTULO E ANO DO FILME
  const movieTextContainer = document.createElement('div')
  movieTextContainer.classList.add('movie-text')
  const movieTitle = document.createElement('h4')
  movieTitle.textContent = `${title} (${year})`
  movieTextContainer.appendChild(movieTitle)
  movieInformations.appendChild(movieTextContainer)

// CRIA DIV PARA INSERIR O TÍTULO, ANO E ÍCONES RELACIONADOS AO FILME
  const informations = document.createElement('div')
  informations.classList.add('movie-informations')
  movieTextContainer.appendChild(informations)

  // FAVORITAR
  const ratingContainer = document.createElement('div')
  ratingContainer.classList.add('rating')
  const starImage = document.createElement('img')
  starImage.src = 'img/Star.svg'
  starImage.alt = 'Star'
  const movieRate = document.createElement('span')
  movieRate.classList.add('movie-rate')
  movieRate.textContent = rating
  ratingContainer.appendChild(starImage)
  ratingContainer.appendChild(movieRate)
  informations.appendChild(ratingContainer)


  // ICONS FAVORITAR - SE FAVORITADO HEART-FILL, SENÃO HEART EMPTY 'HEART'
  const favorite = document.createElement('div')
  favorite.classList.add('favorite')
  const favoriteImage = document.createElement('img')
  favoriteImage.src = isFavorited ? 'img/Heart-fill.svg' : 'img/Heart.svg'
  favoriteImage.alt = 'Heart'
  favoriteImage.classList.add('favoriteImage')
  const favoriteText = document.createElement('span')
  favoriteText.classList.add('movie-favorite')
  favoriteText.textContent = 'Favoritar'
  favorite.appendChild(favoriteImage)
  favorite.appendChild(favoriteText)
  informations.appendChild(favorite)

  // DESCRIÇÃO COM INFORMAÇÕES SOBRE O FILME
  const movieDescriptionContainer = document.createElement('div')
  movieDescriptionContainer.classList.add('movie-description')
  const movieDescription = document.createElement('span')
  movieDescription.textContent = description
  movieDescriptionContainer.appendChild(movieDescription)
  
  movieElement.appendChild(movieInformations)
  movieElement.appendChild(movieDescriptionContainer)
}