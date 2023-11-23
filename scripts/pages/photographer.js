const params = new URL(document.location).searchParams;
const id = params.get("id");

const displayData = async (photographers, medias) => {
  const photographersMain = document.getElementById("main");
  photographers.forEach((photographer) => {
    if (photographer.id === parseInt(id)) {
      const photographerModel = new Photographer(photographer);
      photographersMain.innerHTML += photographerModel.getPhotographerDOMPage();

      const mediasSection = document.createElement("section");
      mediasSection.id = "medias-section";
      medias.forEach((media) => {
        const mediaModel = new Media(media);
        if (media.photographerId === parseInt(id)) {
          mediasSection.innerHTML += mediaModel.getMediaCardDom();
        }
        photographersMain.appendChild(mediasSection);
      });
    }
  });
};

const init = async () => {
  const { photographers } = await getPhotographers();
  const { medias } = await getMedias();
  await displayData(photographers, medias);
};

// noinspection JSIgnoredPromiseFromCall
init();