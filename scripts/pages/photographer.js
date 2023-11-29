const params = new URL(document.location).searchParams;
const id = params.get("id");

const displayPhotographer = (photographer) => {

  console.log(photographer);
  const photographersHeader = document.querySelector(".photograph-header");
  const photographerModel = new Photographer(photographer);
  photographersHeader.innerHTML += photographerModel.getPhotographerDOMPage();
};

const displayMedia = (medias) => {
  const mediasSection = document.getElementById("medias-section");

  medias.forEach((media) => {
    const mediasFactory = new MediaFactory(media);
    const mediaModel = mediasFactory.get();

    if (media.photographerId === parseInt(id)) {
      mediasSection.innerHTML += mediaModel.getMediaCardDom();
    }
  });
};

const init = async () => {
  displayPhotographer(await getPhotographer(parseInt(id)));
  displayMedia(await getMedias());
};

// noinspection JSIgnoredPromiseFromCall
init();