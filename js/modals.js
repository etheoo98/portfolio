let modalContainer = document.querySelector(".modal-container");
let schoolModal = document.querySelector(".school-system-modal");
let bankModal = document.querySelector(".bank-system-modal");
let cinemaModal = document.querySelector(".cinema-website-modal");

function openSchoolSystemModal() {
  modalContainer.classList.add("show");
  schoolModal.classList.add("show");
  schoolModal.setAttribute("aria-hidden", "false");
}

function closeSchoolSystemModal() {
  modalContainer.classList.remove("show");
  schoolModal.classList.remove("show");

  schoolModal.setAttribute("aria-hidden", "true");
}

function openBankSystemModal() {
  modalContainer.classList.add("show");
  bankModal.classList.add("show");
  bankModal.setAttribute("aria-hidden", "false");
}

function closeBankSystemModal() {
  modalContainer.classList.remove("show");
  bankModal.classList.remove("show");
  bankModal.setAttribute("aria-hidden", "true");
}

function openCinemaWebsiteModal() {
  modalContainer.classList.add("show");
  cinemaModal.classList.add("show");
  cinemaModal.setAttribute("aria-hidden", "false");
}

function closeCinemaWebsiteModal() {
  modalContainer.classList.remove("show");
  cinemaModal.classList.remove("show");
  cinemaModal.setAttribute("aria-hidden", "true");
}
