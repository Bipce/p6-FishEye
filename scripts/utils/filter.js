const sortMedias = (medias, option) => {
  if (option === "popularity") {
    medias.sort((a, b) => {
      return a.likes - b.likes;
    });
  }

  if (option === "title") {
    medias.sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      if (titleA < titleB) {
        return -1;
      } else if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
  }

  if (option === "date") {
    medias.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }
};

const onChangeHandler = async (option) => {
  const medias = await getMedias();

  sortMedias(medias, option);
  displayMedia(medias);
};