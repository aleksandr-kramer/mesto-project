import "../pages/index.css";
import { createCard, initialCards } from "./card";
import {
  openPopup,
  closePopup,
  editFormProfession,
  addNewCard,
  closeByEscape,
} from "./modal";
import { validationConfig, enableValidation } from "./validate";

const profile = document.querySelector(".profile");
const popupProfile = document.querySelector(".popupprofile");
const popupMesto = document.querySelector(".popupmesto");
const popupImage = document.querySelector(".popup_image"); // popup увеличенной картинки
const profileNameText = profile.querySelector(".profile__name-text"); // Элемент h1 с именем профиля
const profileProfessionText = profile.querySelector(
  ".profile__profession-text"
); // Элемент страницы с названием профессии
const sectionElements = document.querySelector(".elements"); // Секция html с перечислением карточек мест
const buttonProfileOpen = profile.querySelector(".profile__edit-button"); // Кнопка отрытия popup профиля
const buttonProfileClose = popupProfile.querySelector(".popup__close"); // Кнопка закрытия popup профиля
const formEditProfile = popupProfile.querySelector(".formEditProfile"); // Форма редактирования popup профиля
const inputProfileName = popupProfile.querySelector(".inputprofilename"); // Текстовое поле для ввода имени профиля
const inputProfileProfession = popupProfile.querySelector(
  ".inputprofileprofession"
); // Текстовое поле для ввода профессии
const buttonNewMesto = profile.querySelector(".profile__add-button"); // Кнопка отрытия popup добавления нового места
const buttonNewMestoClose = popupMesto.querySelector(".popup__close"); // Кнопка закрытия popup нового места
const formAddNewMesto = popupMesto.querySelector(".formaddnewmesto"); // Форма добавления нового места
const popupImageClose = popupImage.querySelector(".popup__close"); // Кнопка закрытия popup увеличенной картинки

// Перебираем подготовленный массив карточек и вставляем их в разметку. Используем template
initialCards.forEach(function (item) {
  sectionElements.append(createCard(item));
});
// Открываем popup окно редактирования профиля, Подставляем значения в поля input со страницы сайта
buttonProfileOpen.addEventListener("click", function () {
  openPopup(popupProfile);
  inputProfileName.value = profileNameText.textContent;
  inputProfileProfession.value = profileProfessionText.textContent.trim();
});
// Закрываем popup окно редактирования профиля без редактирования, крестиком
buttonProfileClose.addEventListener("click", function () {
  closePopup(popupProfile);
});
// Отслеживаем нажатие кнопки "Сохранить" в форме редактирования профиля
formEditProfile.addEventListener("submit", editFormProfession);
// Открываем popup окно добавления нового места
buttonNewMesto.addEventListener("click", function () {
  openPopup(popupMesto);
});
// Закрываем окно добавления нового места без сохранения
buttonNewMestoClose.addEventListener("click", function () {
  closePopup(popupMesto);
});
//Отслеживаем нажатие кнопки "Создать" в popup нового места
formAddNewMesto.addEventListener("submit", addNewCard);
// Закрываем окно просмотра увеличенной карточки
popupImageClose.addEventListener("click", function () {
  closePopup(popupImage);
});

enableValidation(validationConfig);

// Закрытие окна редактирования профиля по клику мыши за пределами popup
popupProfile.addEventListener("click", function (evt) {
  if (evt.target === popupProfile) {
    closePopup(popupProfile);
  }
});

// Закрытие окна редактирования профиля по Escape
//document.addEventListener("keydown", closeByEscape);

// Закрытие окна редактирования места по клику мыши за пределами popup
popupMesto.addEventListener("click", function (evt) {
  if (evt.target === popupMesto) {
    closePopup(popupMesto);
  }
});

// Закрытие окна просмотра рисунка по клику мыши за пределами popup
popupImage.addEventListener("click", function (evt) {
  if (evt.target === popupImage) {
    closePopup(popupImage);
  }
});
