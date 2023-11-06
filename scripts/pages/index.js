const getPhotographers = async () => {
  const res = await fetch("../../data/photographers.json");
  const data = await res.json();
  const photographers = data.photographers;

  if (!photographers) return null;

  return ({
    photographers: [...photographers],
  });
};

const displayData = async photographers => {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
};

const init = async () => {
  const { photographers } = await getPhotographers();
  await displayData(photographers);
};

init();
    
