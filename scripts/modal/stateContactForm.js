const modal = document.getElementById("contact-modal");
const closeBtn = document.getElementById("close-btn__contact-modal");
const homeLink = document.querySelector(".header__link");
const photographerHeader = document.querySelector(".photographer-header");
const menu = document.getElementById("filter");
const mediasSection = document.getElementById("medias-section");

const modalStyle = {
  display: "block",
  position: "fixed",
  top: "10%",
  bottom: "5%",
  left: "150px",
  right: "200px",
  overflowY: "scroll",
};

const modalBgStyleModalOpen = {
  position: "relative",
  opacity: "0.4",
  pointerEvents: "none",
};

const modalBgStyleModalClose = {
  position: "inherit",
  opacity: "1",
  pointerEvents: "inherit",
};

const changeTabIndexElement = (tabIndex) => {
  const photographerInfo = photographerHeader.children[0];

  homeLink.tabIndex = tabIndex;
  menu.tabIndex = tabIndex;
  photographerInfo.tabIndex = tabIndex;
  mediasSection.children.tabIndex = tabIndex;

  for (let media of mediasSection.children) {
    media.children[0].tabIndex = tabIndex;
  }
};

const displayModal = () => {
  mainWrapper.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-hidden", "false");
  Object.assign(modal.style, modalStyle);
  Object.assign(mainWrapper.style, modalBgStyleModalOpen);

  changeTabIndexElement(-1);

  body.addEventListener("keydown", closeModalEscapeKey);
  closeBtn.addEventListener("click", closeModal);
};


const closeModal = () => {
  mainWrapper.setAttribute("aria-hidden", "false");
  modal.setAttribute("aria-hidden", "true");
  modal.style.display = "none";
  Object.assign(mainWrapper.style, modalBgStyleModalClose);

  changeTabIndexElement(0);

  body.removeEventListener("keydown", closeModalEscapeKey);
  closeBtn.removeEventListener("click", closeModal);
};

const closeModalEscapeKey = (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
};