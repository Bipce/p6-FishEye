const params = new URL(document.location).searchParams;
const id = params.get("id");

const displayPhotographer = (photographer) => {
  const photographersHeader = document.querySelector(".photographer-header");
  const photographerModel = new Photographer(photographer);
  photographersHeader.innerHTML += photographerModel.getPhotographerDOMPage();
};

const displayMedia = (medias) => {
  const mediasSection = document.getElementById("medias-section");
  const aside = document.getElementById("aside");

  mediasSection.innerHTML = "";
  mediasSection.appendChild(aside);

  medias.forEach((media) => {
    const mediasFactory = new MediaFactory(media);
    const mediaModel = mediasFactory.get();

    if (media.photographerId === parseInt(id)) {
      mediasSection.innerHTML += mediaModel.getMediaCardDom();
    }
  });

  const photographerMedias = medias.filter((x) => x.photographerId === parseInt(id));

  initHearts();
  initLightBox(photographerMedias);
};

const displayAside = (photographer) => {
  const aside = document.getElementById("aside");

  const likes = document.createElement("p");
  likes.className = "aside__container__likes";

  const heartImg = document.createElement("img");
  heartImg.src = "../../assets/icons/heart.svg";
  heartImg.alt = "likes";
  heartImg.className = "aside__container__heart";

  const divContainer = document.createElement("div");
  divContainer.className = "aside__container";
  divContainer.appendChild(likes);
  divContainer.appendChild(heartImg);

  const price = document.createElement("p");
  price.className = "aside__price";
  price.textContent = `${photographer.price}€/jour`;
  price.ariaLabel = `${photographer.price}€ par jour`;

  aside.appendChild(divContainer);
  aside.appendChild(price);
};

const displayNameContact = (photographer) => {
  const nameTitle = document.getElementById("modal__header__title");
  const nameTitleModel = new Photographer(photographer);

  nameTitle.innerHTML += nameTitleModel.getNameContact();
};

const init = async () => {
  const photographer = await getPhotographer(parseInt(id));
  const medias = await getMedias();
  const filter = document.getElementById("filter");

  sortMedias(medias, "popularity");
  displayPhotographer(photographer);
  displayMedia(medias);
  displayAside(photographer, medias);
  displayNameContact(photographer);
  getLikes();

  filter.addEventListener("change", () => {
    const option = filter.options[filter.selectedIndex].value;
    sortMedias(medias, option);
    displayMedia(medias);
  });
};

// noinspection JSIgnoredPromiseFromCall
init();