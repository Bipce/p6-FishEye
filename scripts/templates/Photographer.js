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
    <article class="photographer_section__article">
      <a href="photographer.html?id=${this.id}"
         aria-label="lien vers la page de ${this.name}, ${this.city}, ${this.country},
                    ${this.tagline}, ${this.price}€ par jour">
        <div class="photographer_section__article__container img-container">
          <img class="photographer_section__article__container__img img"
               src="assets/photographers/Photographers ID Photos/${this.portrait}" alt="${this.name}">
        </div>
        <h2 class="photographer_section__article__title">${this.name}</h2>
      </a>
      <p class="photographer_section__article__city" aria-hidden="true">${this.city}, ${this.country}</p>
      <p class="photographer_section__article__tagline" aria-hidden="true">${this.tagline}</p>
      <p class="photographer_section__article__price" aria-hidden="true">${this.price}€/jour</p>
    </article>
    `);
  }

  getPhotographerDOMPage() {
    return (`
      <div class="photographer-header__info" aria-label="${this.name}, ${this.city} ${this.country}, ${this.tagline}"
          tabindex="0">
        <h1 class="photographer-header__info__title">${this.name}</h1>
        <p class="photographer-header__info__location">${this.city}, ${this.country}</p>
        <p class="photographer-header__info__tagline">${this.tagline}</p>
      </div>
      
      <button class="modal__button btn" onclick="displayModal()">Contactez-moi</button>
      
      <div class="img-container">
        <img src="./assets/photographers/Photographers%20ID%20Photos/${this.portrait}" alt="${this.name}" 
             class="photographer-header__img img">
      </div>
    `);
  }

  getNameContact() {
    return (`
    Contactez-moi ${this.name}
    `);
  }
}