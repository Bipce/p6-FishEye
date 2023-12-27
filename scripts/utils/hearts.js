const initHearts = () => {
  const likes = document.querySelectorAll(".medias-section__content__heart");

  likes.forEach((heart) => heart.addEventListener("click", (e) => {
    const isLiked = e.target.getAttribute("data-liked");
    let heart = e.target;
    let like = e.target.previousElementSibling;

    if (isLiked === "true") {
      like.textContent--;
      heart.setAttribute("data-liked", false);
    } else {
      like.textContent++;
      heart.setAttribute("data-liked", true);
    }
    getLikes();
  }));
};