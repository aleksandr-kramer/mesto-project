import { openPopup } from "./modal";

const popupImage = document.querySelector(".popup_image");
const sectionElements = document.querySelector(".elements");
const cardTemplate = sectionElements.querySelector("#card").content;
const popupImageImage = popupImage.querySelector(".popup-image__image");
const popupImageCaption = popupImage.querySelector(".popup-image__caption");

// массив карточек с местами
const ohrid = new URL('../images/places/ohrid.jpeg', import.meta.url);
const lovchen = new URL('../images/places/lovchen.jpeg', import.meta.url);
const saloniki = new URL('../images/places/saloniki.jpeg', import.meta.url);


export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
  {
    name: "Озеро Охрид, Северная Македония",
    link: ohrid,
  },
  {
    name: "Гора Ловчен, Черногория",
    link: lovchen,
  },
  {
    name: "Салоники, Греция",
    link: saloniki,
  },
];
// Функция создания карточки
export function createCard(item) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardText = cardElement.querySelector(".card__mesto-text");

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardText.textContent = item.name;

  cardElement
    .querySelector(".card__button")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("card__button_black");
    });

  // Удаление карточки
  cardElement
    .querySelector(".card__trash")
    .addEventListener("click", function (event) {
      event.target.closest(".card").remove();
    });

  // Просмотр увеличенной карточки
  cardElement
    .querySelector(".card__image")
    .addEventListener("click", function (event) {
      popupImageImage.src = event.target.src;
      popupImageImage.alt = event.target.alt;
      popupImageCaption.textContent = event.target.alt;
      openPopup(popupImage);
    });

  return cardElement;
}
