class Video extends Media {
  constructor(data) {
    super(data);
    this.video = data.video;
  }

  getMediaCardDom() {
    return (`
      <article id="article" class="medias-section__article" tabindex="5">
        <video controls class="medias-section__media" tabindex="5">
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
        <div class="lightBox__slide__left-side">
          <img src="assets/icons/previousMediaArrowLightBox.svg" alt="previous button"
               class="lightBox__slide__left-side__prevBtn img-btn ">
        </div>
        
        <div class="lightBox__slide__content">
          <video controls class="lightBox__slide__content__media">>
          <source src="./../../assets/photographers/${this.photographerId}/${this.video}"
                  type="video/mp4"/>
          </video>
          <p class="lightBox__slide__content__title">${this.title}</p>
        </div>
        
        <div class="lightBox__slide__right-side">
        <div class="lightBox__slide__right-side__closeBtn">
          <img src="assets/icons/closeArrowLightBox.svg" alt="close button"
               class="lightBox__slide__right-side__closeBtn__btn img-btn"> 
        </div>
        
        <div class="lightBox__slide__right-side__nextBtn">
          <img src="assets/icons/nextMediaArrowLightBox.svg" alt="next button"
               class="lightBox__slide__right-side__nextBtn__btn img-btn">
        </div>
       </div>
     
    `);
  }
}