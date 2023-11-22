const getPhotographers = async () => {
  const res = await fetch("../../data/photographers.json");
  const data = await res.json();
  const photographers = data.photographers;

  if (!photographers) return null;

  return ({ photographers: [...photographers] });
};

const getMedias = async () => {
  const res = await fetch("../../data/photographers.json");
  const data = await res.json();
  const medias = data.media;

  if (!medias) return null;


  return ({ medias: [...medias] });
};