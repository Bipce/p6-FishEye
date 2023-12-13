class Video extends Media {
  constructor(data) {
    super(data);
    this.video = data.video;
  }

  getMediaCardDom() {
    return (`
      <article id="article" class="medias-section__article">
        <video controls class="medias-section__media">
        <source src="../../assets/photographers/${this.photographerId}/${this.video}" type="video/mp4" />
      </video>

      <a href="#">
        <div class="medias-section__content">
          <p class="medias-section__content__title">${this.title}</p>
          <p>${this.likes}</p>
          <img src="../../assets/icons/heart.svg" alt="heart" class="medias-section__content__heart">
        </div>
      </a>
    </article>
    `);
  }

  getMediaLightBox() {
    return (`
      <video controls class="lightBox__slide__content__img">>
      <source src="./../../assets/photographers/${this.photographerId}/${this.video}"
              type="video/mp4"/>
      </video>
      <p class="lightBox__slide__content__title">${this.title}</p>
    `);
  }
}