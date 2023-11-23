class Photographer {
  constructor(data) {
    this.name = data.name;
    this.id = data.id;
    this.city = data.city;
    this.country = data.country;
    this.tagline = data.tagline;
    this.price = data.price;
    this.portrait = data.portrait;
  }

  getUserCardDOM() {
    return (`
    <article class="photographer_section__article" aria-label="article">
      <a href="photographer.html?id=${this.id}" aria-label="lien vers la page de ${this.name}">
        <div class="photographer_section__article__container img-container">
          <img class="photographer_section__article__container__img img "
               src="assets/photographers/Photographers ID Photos/${this.portrait}" alt="${this.name}"
               aria-label="image de ${this.name}">
        </div>
        <h2 class="photographer_section__article__title" aria-label="nom du photographe">${this.name}</h2>
      </a>
       <p class="photographer_section__article__city" aria-label="pays et ville de ${this.name}"> ${this.city},
        ${this.country}</p>
      <p class="photographer_section__article__tagline" aria-label="catchphrase de ${this.name}">${this.tagline}</p>
      <p class="photographer_section__article__price" aria-label="prix de ${this.name} par jour">${this.price}€/jour</p>
    </article>
    `);
  }

  getPhotographerDOMPage() {
    return (`
    <div class="photograph-header" aria-label="header photographe">
      <div class="photograph-header__info" aria-label="infos de ${this.name}">
        <h1 class="photograph-header__info__title">${this.name}</h1>
        <p class="photograph-header__info__location">${this.city}, ${this.country}</p>
        <p class="photograph-header__info__tagline">${this.tagline}</p>
      </div>
      <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
      <div class="img-container">
        <img src="./assets/photographers/Photographers%20ID%20Photos/${this.portrait}" alt="${this.name}" 
             class="photograph-header__img img" aria-label="image de ${this.name}">
      </div>
    </div>
    
    <nav>
      <label for="filter">Trier par</label>
       <select id="filter">
         <option>Popularité</option>
         <option>Date</option> 
         <option>Titre</option>
       </select>
    </nav>
    
    <aside>
      <p>297 081 <img src="../../assets/icons/heart.svg" alt="heart"></p>
      <p>${this.price}€/jour</p>
    </aside>
    `);
  }
}