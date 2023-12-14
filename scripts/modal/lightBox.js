const lightBoxWrapper = document.getElementById("lightBox");

const displayLightBox = (medias) => {
  medias.forEach((media) => {
    const lightBoxFactory = new MediaFactory(media);
    const lightBoxModel = lightBoxFactory.get();

    if (media.photographerId === parseInt(id)) {
      const container = document.createElement("div");

      container.className = "lightBox__slide__content";
      container.setAttribute("isSelected", "false");

      lightBoxWrapper.appendChild(container);
      container.innerHTML += lightBoxModel.getMediaLightBox();
    }
  });
};

const lightBox = () => {
  const medias = document.querySelectorAll(".medias-section__media");
  const mainWrapper = document.getElementById("main-wrapper");
  const closeBtn = document.querySelector(".lightBox__closeBtn");
  const lightBoxContainer = document.querySelectorAll(".lightBox__slide__content");
  const nextArrow = document.querySelector(".lightBox__nextBtn");
  const prevArrow = document.querySelector(".lightBox__prevBtn");

  const updateMedia = (index) => {
    lightBoxContainer.forEach((media) => {
      media.setAttribute("isSelected", "false");
    });

    const currentMedia = lightBoxContainer[index];
    currentMedia.setAttribute("isSelected", "true");
  };

  const openLightBox = (e) => {
    const media = e.target;
    let index = 0;

    lightBoxContainer.forEach((item, key) => {
      const title = item.children[0].alt;
      if (media.alt === title) {
        index = key;
      }
    });
    updateMedia(index);

    mainWrapper.setAttribute("aria-hidden", "true");
    mainWrapper.style.display = "none";
    lightBoxWrapper.style.display = "flex";

    prevArrow.addEventListener("click", () => {
      index--;
      if (index < 0) {
        index = lightBoxContainer.length - 1;
      }
      updateMedia(index);
    });

    nextArrow.addEventListener("click", () => {
      index++;
      if (index === lightBoxContainer.length) {
        index = 0;
      }
      updateMedia(index);
    });
  };

  const closeLightBox = () => {
    mainWrapper.setAttribute("aria-hidden", "false");
    mainWrapper.style.display = "block";
    lightBoxWrapper.style.display = "none";

    lightBoxContainer.forEach((item) => {
      item.setAttribute("isSelected", "false");
    });
  };

  medias.forEach((media) => media.addEventListener("click", (e) => openLightBox(e)));
  closeBtn.addEventListener("click", () => closeLightBox());
};