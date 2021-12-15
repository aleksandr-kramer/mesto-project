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
const buttonProfileSave = popupProfile.querySelector(".popup__button-save"); // Кнопка сохранения popup профиля
const formEditProfile = popupProfile.querySelector(".formEditProfile"); // Форма редактирования popup профиля
const inputProfileName = popupProfile.querySelector(".inputprofilename"); // Текстовое поле для ввода имени профиля
const inputProfileProfession = popupProfile.querySelector(
  ".inputprofileprofession"
); // Текстовое поле для ввода профессии
const buttonNewMesto = profile.querySelector(".profile__add-button"); // Кнопка отрытия popup добавления нового места
const buttonNewMestoClose = popupMesto.querySelector(".popup__close"); // Кнопка закрытия popup нового места
const buttonNewMestoSave = popupMesto.querySelector(".popup__button-save"); // Кнопка сохранения popup нового места
const formAddNewMesto = popupMesto.querySelector(".formaddnewmesto"); // Форма добавления нового места
const inputNewMestoName = popupMesto.querySelector(".inputnewmestoname"); // Текстовое поле для ввода названия нового места
const inputNewMestoLink = popupMesto.querySelector(".inputnewmestolink"); // Текстовое поле для ввода ссылки на картинку
const popupImageImage = popupImage.querySelector(".popup-image__image"); // Увеличенная картинка в popup
const popupImageClose = popupImage.querySelector(".popup__close"); // Кнопка закрытия popup увеличенной картинки
const popupImageCaption = popupImage.querySelector(".popup-image__caption"); // Подпись к картинке в popup

// массив карточек с местами
const initialCards = [
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
    link: "./images/places/ohrid.jpeg",
  },
  {
    name: "Гора Ловчен, Черногория",
    link: "./images/places/lovchen.jpeg",
  },
  {
    name: "Салоники, Греция",
    link: "./images/places/saloniki.jpeg",
  },
];
// Функция создания карточки
function createCard(item) {
  const cardTemplate = document.querySelector("#card").content;
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
// Функция открытия popup окошек
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
// Функция закрытия popup окошек
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
// Перебираем подготовленный массив карточек и вставляем их в разметку. Используем template
initialCards.forEach(function (item) {
  createCard(item);
  sectionElements.append(createCard(item));
});
// Открываем popup окно редактирования профиля, Подставляем значения в поля input со страницы сайта
buttonProfileOpen.addEventListener("click", function () {
  openPopup(popupProfile);
  inputProfileName.value = profileNameText.textContent;
  inputProfileProfession.value = profileProfessionText.textContent;
});
// Закрываем popup окно редактирования профиля без редактирования, крестиком
buttonProfileClose.addEventListener("click", function () {
  closePopup(popupProfile);
});
// Функция закрытия окна редактирования с сохранением изменений
function editFormProfession(evt) {
  evt.preventDefault();
  profileNameText.textContent = inputProfileName.value;
  profileProfessionText.textContent = inputProfileProfession.value;
  closePopup(popupProfile);
}
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
// Функция добавления нового места в popup
function addFormNewMesto(evt) {
  evt.preventDefault();
  const item = [];
  item.name = inputNewMestoName.value;
  item.link = inputNewMestoLink.value;
  createCard(item);
  sectionElements.prepend(createCard(item));
  popupMesto.querySelector(".inputnewmestoname").value = "";
  popupMesto.querySelector(".inputnewmestolink").value = "";
  closePopup(popupMesto);
}
//Отслеживаем нажатие кнопки "Создать" в popup нового места
formAddNewMesto.addEventListener("submit", addFormNewMesto);
// Закрываем окно просмотра увеличенной карточки
popupImageClose.addEventListener("click", function () {
  closePopup(popupImage);
});
