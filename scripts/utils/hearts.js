const initHearts = () => {
  const heartsEl = document.querySelectorAll(".medias-section__content__heart");

  const setLike = (e) => {
    const isLiked = e.target.getAttribute("data-liked");
    let heart = e.target;
    let like = e.target.previousElementSibling;

    if (isLiked === "true") {
      like.textContent--;
      heart.setAttribute("data-liked", "false");
    } else {
      like.textContent++;
      heart.setAttribute("data-liked", "true");
    }
    getLikes();
  };

  heartsEl.forEach((heartEl) => {
    heartEl.addEventListener("click", (e) => {
      setLike(e);
    });
    heartEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        setLike(e);
      }
    });
  });
};