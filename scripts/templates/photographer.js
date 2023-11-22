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
      <a href="photographer.html?id=${this.id}" aria-label="lien vers la page du photographe">
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

  getUserCardDOMPage() {
    return (`
    <div class="photograph-header">
      <div>
        <h1>${this.name}</h1>
        <p>${this.city}, ${this.country}</p>
        <p>${this.tagline}</p>
      </div>
      <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
      <img src="./assets/photographers/Photographers%20ID%20Photos/${this.portrait}" alt="Mimi Keel" width="200"
           height="200">
    </div>
    
    <nav>
      <label for="filter">Trier par</label>
       <select id="filter">
         <option>Popularité</option>
         <option>Date</option> 
         <option>Titre</option>
       </select>
    </nav>
    `);
  }
}