class Video extends Media {
  constructor(data) {
    super(data);
    this.video = data.video;
  }

  getMediaCardDom() {
    return (`
      <article class="medias-section__article">
        <video controls class="medias-section__media" aria-label="${this.title}, ${this.likes} likes, cliquez pour agrandir"
         id="${this.id}">
        <source src="../../assets/photographers/${this.photographerId}/${this.video}" type="video/mp4" />
      </video>

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
        <div class="lightBox__slide__content" aria-label="${this.title}">
          <video controls class="lightBox__slide__content__media">
          <source src="./../../assets/photographers/${this.photographerId}/${this.video}"
                  type="video/mp4"/>
          </video>
          <p class="lightBox__slide__content__title">${this.title}</p>
        </div>
    `);
  }
}