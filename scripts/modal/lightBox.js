const displayLightBox = (medias) => {
  const lightBoxModal = document.getElementById("lightBox-modal");

  medias.forEach((media) => {
    const lightBoxFactory = new MediaFactory(media);
    const lightBoxModel = lightBoxFactory.get();

    if (media.photographerId === parseInt(id)) {
      lightBoxModal.innerHTML += lightBoxModel.getMediaLightBox();
    }
  });
};