class Image extends Media {
  constructor(data) {
    super(data);
    this.image = data.image;
  }

  getMediaCardDom() {
    return (`
      <a href="#">
        <article id="article" class="medias-section__article">
          <img src="./../assets/photographers/${this.photographerId}/${this.image}" alt="${this.title}"
               class="medias-section__media">

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