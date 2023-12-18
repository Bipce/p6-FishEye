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

  getMediaLightBox() {
    return (`
        <div class="lightBox__slide__left-side">
          <img src="assets/icons/previousMediaArrowLightBox.svg" alt="previous button"
               class="lightBox__slide__left-side__prevBtn img-btn ">
        </div>
        
        <div class="lightBox__slide__content">
          <img src="./../../assets/photographers/${this.photographerId}/${this.image}" alt="${this.title}"
               class="lightBox__slide__content__media">
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