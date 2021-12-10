const profile = document.querySelector(".profile");
const popupProfile = document.querySelector(".popupprofile");
const popupMesto = document.querySelector('.popupmesto')
const profileNameText = profile.querySelector(".profile__name-text"); // Элемент h1 с именем профиля
const profileProfessionText = profile.querySelector(".profile__profession-text"); // Элемент страницы с названием профессии
const buttonProfileOpen = profile.querySelector(".profile__edit-button"); // Кнопка отрытия popup профиля
const buttonProfileClose = popupProfile.querySelector(".popup__close"); // Кнопка закрытия popup профиля
const buttonProfileSave = popupProfile.querySelector(".popup__button-save"); // Кнопка сохранения popup профиля
const formEditProfile = popupProfile.querySelector(".formEditProfile"); // Форма редактирования popup профиля
const inputProfileName = popupProfile.querySelector(".inputprofilename"); // Текстовое поле для ввода имени профиля
const inputProfileProfession = popupProfile.querySelector(".inputprofileprofession"); // Текстовое поле для ввода профессии
const buttonNewMesto = profile.querySelector(".profile__add-button"); // Кнопка отрытия popup добавления нового места
const buttonNewMestoClose = popupMesto.querySelector(".popup__close"); // Кнопка закрытия popup нового места
const buttonNewMestoSave = popupMesto.querySelector(".popup__button-save"); // Кнопка сохранения popup нового места
const formAddNewMesto = popupMesto.querySelector('.formaddnewmesto'); // Форма добавления нового места
const inputNewMestoName = popupMesto.querySelector(".inputnewmestoname"); // Текстовое поле для ввода названия нового места
const inputNewMestoLink = popupMesto.querySelector(".inputnewmestolink"); // Текстовое поле для ввода ссылки на картинку

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

initialCards.forEach(function (item) {
  const sectionElements = document.querySelector(".elements"); // Секция html с перечислением карточек мест
  const cardTemplate = document.querySelector("#card").content; // Получаем содержимое заготовленной (template) карточки места
  const cardElements = cardTemplate.querySelector(".card").cloneNode(true); // Клонирование содержимое тега Template
  cardElements.querySelector(".card__image").src = item.link;
  cardElements.querySelector(".card__image").alt = item.name;

  cardElements.querySelector(".card__mesto-text").textContent = item.name;
  sectionElements.append(cardElements); // Вставляем в разметку новую карточку места
});

// Открываем popup окно редактирования профиля
// Подставляем значения в поля input со страницы сайта
buttonProfileOpen.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
  inputProfileName.value = profileNameText.textContent;
  inputProfileProfession.value = profileProfessionText.textContent;
});

// Закрываем popup окно редактирования профиля без редактирования, крестиком
buttonProfileClose.addEventListener("click", function () {
  popupProfile.classList.remove("popup_opened");
});

// Функция закрытия окна редактирования с сохранением изменений
function editFormProfession(evt) {
  evt.preventDefault();
  profileNameText.textContent = inputProfileName.value;
  profileProfessionText.textContent = inputProfileProfession.value;
  popupProfile.classList.remove("popup_opened");
}

// Отслеживаем нажатие кнопки "Сохранить" в форме редактирования профиля
formEditProfile.addEventListener("submit", editFormProfession);

// Открываем popup окно добавления нового места
buttonNewMesto.addEventListener('click', function() {
  popupMesto.classList.add('popup_opened');
});

// Закрываем окно добавления нового места без сохранения
buttonNewMestoClose.addEventListener('click', function() {
  popupMesto.classList.remove('popup_opened');
});
