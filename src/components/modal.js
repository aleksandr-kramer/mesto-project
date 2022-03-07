import { createCard } from "./card";

const profile = document.querySelector(".profile");
const popupProfile = document.querySelector(".popupprofile");
const popupMesto = document.querySelector(".popupmesto");
const profileNameText = profile.querySelector(".profile__name-text");
const inputProfileName = popupProfile.querySelector(".inputprofilename");
const profileProfessionText = profile.querySelector(
  ".profile__profession-text"
);
const inputProfileProfession = popupProfile.querySelector(
  ".inputprofileprofession"
);
const inputNewMestoName = popupMesto.querySelector(".inputnewmestoname");
const inputNewMestoLink = popupMesto.querySelector(".inputnewmestolink");
const sectionElements = document.querySelector(".elements");
const buttonNewMesto = popupMesto.querySelector(".button_new_mesto");
// Функция закрытия popUp по Escape
export function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

// Функция открытия popup окошек
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

// Функция закрытия popup окошек
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}
// Функция закрытия окна редактирования профиля с сохранением изменений
export function editFormProfession(evt) {
  evt.preventDefault();
  profileNameText.textContent = inputProfileName.value;
  profileProfessionText.textContent = inputProfileProfession.value;
  closePopup(popupProfile);
}

// Функция добавления нового места в popup
export function addNewCard(evt) {
  evt.preventDefault();
  const item = {};
  item.name = inputNewMestoName.value;
  item.link = inputNewMestoLink.value;
  sectionElements.prepend(createCard(item));
  inputNewMestoName.value = "";
  inputNewMestoLink.value = "";
  buttonNewMesto.classList.add("popup__button-save_disabled");
  buttonNewMesto.disabled = true;
  closePopup(popupMesto);
}
