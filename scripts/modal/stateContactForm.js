const modal = document.getElementById("contact-modal");
const modalBg = document.getElementById("main-wrapper");
const closeBtn = document.querySelector(".modal__header__btn");
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

const displayModal = () => {
  const photographerInfo = photographerHeader.children[0];

  modalBg.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-hidden", "false");
  Object.assign(modal.style, modalStyle);
  Object.assign(modalBg.style, modalBgStyleModalOpen);

  homeLink.tabIndex = -1;
  menu.tabIndex = -1;
  photographerInfo.tabIndex = -1;
  mediasSection.children.tabIndex = -1;

  for (let media of mediasSection.children) {
    if (media.id === "article") {
      media.children[0].tabIndex = -1;
    }
  }

  modal.addEventListener("keydown", closeModalEscapeKey);
  modalBg.addEventListener("keydown", closeModalEscapeKey);
  closeBtn.addEventListener("keydown", closeModalEnterKey);
};

const closeModal = () => {
  modalBg.setAttribute("aria-hidden", "false");
  modal.setAttribute("aria-hidden", "true");

  modal.style.display = "none";
  Object.assign(modalBg.style, modalBgStyleModalClose);

  modalBg.removeEventListener("keydown", closeModalEscapeKey);
};

const closeModalEscapeKey = (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
};

const closeModalEnterKey = (e) => {
  if (e.key === "Enter") {
    closeModal();
  }
};

