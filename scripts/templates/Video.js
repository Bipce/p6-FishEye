class Video extends Media {
  constructor(data) {
    super(data);
    this.video = data.video;
  }

  getMediaCardDom() {
    return (`
      <article id="article" class="medias-section__article">
        <video controls class="medias-section__media" aria-label="${this.title}, ${this.likes} likes, cliquez pour aggrandir">
        <source src="../../assets/photographers/${this.photographerId}/${this.video}" type="video/mp4" />
      </video>

        <div class="medias-section__content">
          <p class="medias-section__content__title">${this.title}</p>
          <p>${this.likes}</p>
          <img src="../../assets/icons/heart_red.svg" alt="heart" class="medias-section__content__heart">
        </div>
    </article>
    `);
  }

  getMediaLightBox() {
    return (`
        <div class="lightBox__slide__left-side">
          <button>
            <img src="assets/icons/previousMediaArrowLightBox.svg" alt="bouton précédent"
                 class="lightBox__slide__left-side__prevBtn img-btn ">
          </button>
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
          <button>
            <img src="assets/icons/closeArrowLightBox.svg" alt="boutou fermer"
                 class="lightBox__slide__right-side__closeBtn__btn img-btn">
          </button> 
        </div>
        
        <div class="lightBox__slide__right-side__nextBtn">
          <button>
            <img src="assets/icons/nextMediaArrowLightBox.svg" alt="bouton suivant"
                 class="lightBox__slide__right-side__nextBtn__btn img-btn">
          </button>
        </div>
       </div>
     
    `);
  }
}