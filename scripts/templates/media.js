class Media {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.image = data.image;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.video = data.video;
  }

  getMediaCardDom() {
    return (`
      <a href="#">
        <article id="article">
         ${this.image ? `<img src="./../assets/photographers/${this.photographerId}/${this.image}" alt="${this.title}" height="200" width="200">`
      : (`
          <video controls height="200" width="200">
            <source src="../../assets/photographers/${this.photographerId}/${this.video}" type="video/mp4"/>
            <p>
              Votre navigateur ne prend pas en charge les vidéos HTML5. Voici
              <a href="../../assets/photographers/${this.photographerId}/${this.video}">un lien pour télécharger la vidéo</a>.
            </p>
          </video>`)}

          <div>
            <p>${this.title}</p>
            <p>${this.likes} <img src="../../assets/icons/heart.svg" alt="heart"></p>
          </div>
        </article>
      </a>
    `);
  }
}