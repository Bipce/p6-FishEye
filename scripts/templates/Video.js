class Video extends Media {
  constructor(data) {
    super(data);
    this.video = data.video;
  }

  getMediaCardDom() {
    return (`
      <a href="#">
        <article id="article" class="medias-section__article">
          <video controls class="medias-section__media">
            <source src="../../assets/photographers/${this.photographerId}/${this.video}" type="video/mp4"/>
            <p>
              Votre navigateur ne prend pas en charge les vidéos HTML5. Voici
              <a href="../../assets/photographers/${this.photographerId}/${this.video}">un lien pour télécharger la vidéo</a>.
            </p>
          </video>

          <div class="medias-section__content">
            <p class="medias-section__content__title">${this.title}</p>
            <p>${this.likes}</p>
            <img src="../../assets/icons/heart.svg" alt="heart" class="medias-section__content__heart">
          </div>
        </article>
      </a>
    `);
  }
}