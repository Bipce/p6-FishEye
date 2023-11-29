const displayData = async (photographers) => {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = new Photographer(photographer);
    photographersSection.innerHTML += photographerModel.getUserCardDOM();
  });
};

const init = async () => {
  await displayData(await getPhotographers());
};

// noinspection JSIgnoredPromiseFromCall
init();