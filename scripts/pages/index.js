const displayData = async (photographers) => {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = new Photographer(photographer);
    photographersSection.innerHTML += photographerModel.getUserCardDOM();
  });
};

const init = async () => {
  const { photographers } = await getPhotographers();
  await displayData(photographers);
};

// noinspection JSIgnoredPromiseFromCall
init();