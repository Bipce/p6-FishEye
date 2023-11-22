const params = new URL(document.location).searchParams;
const id = params.get("id");

const displayData = async (photographers, medias) => {
  const photographersMain = document.getElementById("main");
  photographers.forEach((photographer) => {
    if (photographer.id === parseInt(id)) {
      const photographerModel = new Photographer(photographer);
      photographersMain.innerHTML += photographerModel.getUserCardDOMPage();

      const mediasSection = document.createElement("section");
      mediasSection.id = "medias-section";
      // const asideCard = document.createElement("aside");
      medias.forEach((media) => {
        const mediaModel = new Media(media);
        if (media.photographerId === parseInt(id)) {
          mediasSection.innerHTML += mediaModel.getMediaCardDom();
        }
        mediasSection.innerHTML += mediaModel.getAsideCard();
      });


      photographersMain.appendChild(mediasSection);
      photographersMain.innerHTML += new Media().getAsideCard();
      // photographersMain.appendChild(asideCard);
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