const stateLightBox = () => {
  const medias = document.querySelectorAll(".medias-section__media");
  const mainWrapper = document.getElementById("main-wrapper");
  const lightBoxModal = document.getElementById("lightBox-modal");
  const closeBtn = document.querySelector(".lightBox__closeBtn");

  const openLightBox = () => {
    mainWrapper.setAttribute("aria-hidden", "true");
    mainWrapper.style.display = "none";
    lightBoxModal.style.display = "grid";
  };

  const closeLightBox = () => {
    mainWrapper.setAttribute("aria-hidden", "false");
    mainWrapper.style.display = "block";
    lightBoxModal.style.display = "none";
  };


  medias.forEach(media => media.addEventListener("click", () => openLightBox()));
  closeBtn.addEventListener("click", () => closeLightBox());
};