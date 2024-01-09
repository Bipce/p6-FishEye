const PHOTOGRAPHERS_FILE = "./data/photographers.json";

const getPhotographers = async () => {
  const res = await fetch(PHOTOGRAPHERS_FILE);
  const data = await res.json();
  // noinspection JSUnresolvedReference
  const photographers = data.photographers;

  if (!photographers) return null;

  return ([...photographers]);
};

const getMedias = async () => {
  const res = await fetch(PHOTOGRAPHERS_FILE);
  const data = await res.json();
  const medias = data.media;

  if (!medias) return null;

  return [...medias];
};

const getPhotographer = async (id) => {
  const photographers = await getPhotographers();
  return photographers.find(x => x.id === id);
};

const getLikes = () => {
  const likes = document.querySelectorAll("#likes");
  const likesElement = document.querySelector(".aside__container__likes");
  let sum = 0;

  likes.forEach(like => sum += parseInt(like.textContent));
  return likesElement.textContent = sum;
};