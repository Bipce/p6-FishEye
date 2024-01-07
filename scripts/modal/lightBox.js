const lightBoxWrapper = document.getElementById("lightBox");
const lightBoxContent = document.getElementById("lightBox__slide");
const closeLightBoxBtn = document.querySelector(".lightBox__right-side__closeBtn__btn");
const prevBtn = document.querySelector(".lightBox__left-side__prevBtn");
const nextBtn = document.querySelector(".lightBox__right-side__nextBtn");

const initLightBox = (medias) => {
  const mediasEl = document.querySelectorAll(".medias-section__media");
  mediasEl.forEach((mediaEl) => {
    mediaEl.addEventListener("click", (e) => openLightBox(e.target, medias));
    mediaEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        openLightBox(e.target, medias);
      }
    });
  });
};

const openLightBox = (mediaElement, medias) => {
  mainWrapper.setAttribute("aria-hidden", "true");
  lightBoxWrapper.setAttribute("aria-hidden", "false");
  mainWrapper.style.display = "none";
  lightBoxWrapper.style.display = "flex";
  lightBoxWrapper.tabIndex = 0;

  const updateMedia = () => {
    let lightBoxFactory = new MediaFactory(medias[index]);
    let lightBoxModel = lightBoxFactory.get();

    lightBoxContent.innerHTML = lightBoxModel.getMediaLightBox();
  };

  let index = medias.findIndex((element) => element.id === parseInt(mediaElement.id));
  updateMedia();

  const prev = () => {
    index--;
    if (index < 0) {
      index = medias.length - 1;
    }
    updateMedia();
  };

  const next = () => {
    index++;
    if (index > medias.length - 1) {
      index = 0;
    }
    updateMedia();
  };

  const lightBoxKeys = (e) => {
    if (e.key === "Escape") {
      closeLightBox();
    } else if (e.key === "ArrowRight") {
      next();
    } else if (e.key === "ArrowLeft") {
      prev();
    }
  };

  const closeLightBox = () => {
    mainWrapper.setAttribute("aria-hidden", "false");
    lightBoxWrapper.setAttribute("aria-hidden", "true");
    mainWrapper.style.display = "block";
    lightBoxWrapper.style.display = "none";

    prevBtn.removeEventListener("click", prev);
    nextBtn.removeEventListener("click", next);
    closeLightBoxBtn.removeEventListener("click", closeLightBox);
    body.removeEventListener("keydown", lightBoxKeys);
  };

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
  closeLightBoxBtn.addEventListener("click", closeLightBox);
  body.addEventListener("keydown", lightBoxKeys);
};