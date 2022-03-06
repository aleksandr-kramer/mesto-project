import { createCard } from "./card";

const profile = document.querySelector(".profile");
const popupProfile = document.querySelector(".popupprofile");
const popupMesto = document.querySelector(".popupmesto");
const profileNameText = profile.querySelector(".profile__name-text");
const inputProfileName = popupProfile.querySelector(".inputprofilename");
const profileProfessionText = profile.querySelector(".profile__profession-text");
const inputProfileProfession = popupProfile.querySelector(".inputprofileprofession");
const inputNewMestoName = popupMesto.querySelector(".inputnewmestoname");
const inputNewMestoLink = popupMesto.querySelector(".inputnewmestolink");
const sectionElements = document.querySelector(".elements");

// Функция открытия popup окошек
export function openPopup(popup) {
  popup.classList.add("popup_opened");
}
// Функция закрытия popup окошек
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
// Функция закрытия окна редактирования профиля с сохранением изменений
export function editFormProfession(evt) {
  evt.preventDefault();
  profileNameText.textContent = inputProfileName.value;
  profileProfessionText.textContent = inputProfileProfession.value;
  closePopup(popupProfile);
}

// Функция добавления нового места в popup
export function addFormNewMesto(evt) {
  evt.preventDefault();
  const item = [];
  item.name = inputNewMestoName.value;
  item.link = inputNewMestoLink.value;
  sectionElements.prepend(createCard(item));
  inputNewMestoName.value = "";
  inputNewMestoLink.value = "";
  closePopup(popupMesto);
}
