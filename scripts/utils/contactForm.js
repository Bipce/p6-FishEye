const modal = document.getElementById("contact-modal");
const modalBg = document.getElementById("main-wrapper");

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
  Object.assign(modal.style, modalStyle);
  Object.assign(modalBg.style, modalBgStyleModalOpen);
};


const closeModal = () => {
  modal.style.display = "none";
  Object.assign(modalBg.style, modalBgStyleModalClose);
};