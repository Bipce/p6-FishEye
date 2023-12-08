class Image extends Media {
  constructor(data) {
    super(data);
    this.image = data.image;
  }

  getMediaCardDom() {
    return (`
        <article id="article" class="medias-section__article">
          <img src="./../assets/photographers/${this.photographerId}/${this.image}" alt="${this.title}"
               class="medias-section__media">

          <div class="medias-section__content">
            <p class="medias-section__content__title">${this.title}</p>
            <p id="likes">${this.likes}</p>
            <img src="../../assets/icons/heart_red.svg" alt="heart" class="medias-section__content__heart" data-liked="false">
          </div>
        </article>
    `);
  }
}