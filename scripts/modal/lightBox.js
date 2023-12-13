const displayLightBox = (medias) => {
  const lightBox = document.getElementById("lightBox");

  medias.forEach((media) => {
    const lightBoxFactory = new MediaFactory(media);
    const lightBoxModel = lightBoxFactory.get();

    if (media.photographerId === parseInt(id)) {
      const container = document.createElement("div");

      container.className = "lightBox__slide__content";
      container.setAttribute("isSelected", "false");

      lightBox.appendChild(container);
      container.innerHTML += lightBoxModel.getMediaLightBox();
    }
  });
};