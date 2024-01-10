const modal = document.getElementById("contact-modal");
const closeBtn = document.getElementById("close-btn__contact-modal");
const homeLink = document.querySelector(".header__link");
const photographerHeader = document.querySelector(".photographer-header");
const menu = document.getElementById("filter");
const mediasSection = document.getElementById("medias-section");

const changeTabIndexElement = (tabIndex) => {
  const photographerInfo = photographerHeader.children[0];
  const heartsEl = document.querySelectorAll(".medias-section__content__heart");

  homeLink.tabIndex = tabIndex;
  menu.tabIndex = tabIndex;
  photographerInfo.tabIndex = tabIndex;
  mediasSection.children.tabIndex = tabIndex;

  for (let media of mediasSection.children) {
    media.children[0].tabIndex = tabIndex;
  }

  heartsEl.forEach(heartEl => heartEl.tabIndex = tabIndex);
};

const displayModal = () => {
  mainWrapper.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-hidden", "false");
  mainWrapper.setAttribute("modalIsOpen", "true");
  modal.style.display = "block";

  changeTabIndexElement(-1);

  body.addEventListener("keydown", closeModalEscapeKey);
  closeBtn.addEventListener("click", closeModal);
};


const closeModal = () => {
  mainWrapper.setAttribute("aria-hidden", "false");
  modal.setAttribute("aria-hidden", "true");
  mainWrapper.setAttribute("modalIsOpen", "false");
  modal.style.display = "none";

  changeTabIndexElement(0);

  body.removeEventListener("keydown", closeModalEscapeKey);
  closeBtn.removeEventListener("click", closeModal);
};

const closeModalEscapeKey = (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
};