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
      <a href="../../photographer.html">
        <div class="photographer_section__article__container">
          <img class="photographer_section__article__container__img"
               src="assets/photographers/Photographers ID Photos/${this.portrait}" alt="${this.name}"
               aria-label="image du photographe">
        </div>
        <h2 class="photographer_section__article__title" aria-label="nom du photographe">${this.name}</h2>
      </a>
       <p class="photographer_section__article__city" aria-label="pays et ville du photographe"> ${this.city},
        ${this.country}</p>
      <p class="photographer_section__article__tagline" aria-label="catchphrase du photographe">${this.tagline}</p>
      <p class="photographer_section__article__price" aria-label="prix du photographe par jour">${this.price}€/jour</p>
    </article>
    `);


  }
}