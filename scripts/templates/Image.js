class Image extends Media {
  constructor(data) {
    super(data);
    this.image = data.image;
  }

  getMediaCardDom() {
    return (`
        <article class="medias-section__article" >
          <img src="./../assets/photographers/${this.photographerId}/${this.image}" alt="${this.title}" tabindex="0"
               class="medias-section__media" aria-label="${this.title}, ${this.likes} likes, cliquez pour agrandir"
               id="${this.id}">

          <div class="medias-section__content">
            <p class="medias-section__content__title">${this.title}</p>
            <p id="likes">${this.likes}</p>
            <i class="fa-regular fa-heart medias-section__content__heart" data-liked="false"></i>
          </div>
        </article>
    `);
  }

  getMediaLightBox() {
    return (`
        <div class="lightBox__slide__content" tabindex="0" aria-label="${this.title}">
          <img src="./../../assets/photographers/${this.photographerId}/${this.image}" alt="${this.title}"
               class="lightBox__slide__content__media">
          <p class="lightBox__slide__content__title">${this.title}</p>
        </div>
    `);
  }
}