const profile = document.querySelector(".profile");
const popupProfile = document.querySelector(".popupprofile");
const profileNameText = profile.querySelector(".profile__name-text"); // Элемент h1 с именем профиля
const profileProfessionText = profile.querySelector(".profile__profession-text"); // Элемент страницы с названием профессии
const buttonProfileOpen = profile.querySelector(".profile__edit-button"); // Кнопка отрытия popup профиля
const buttonProfileClose = popupProfile.querySelector(".popup__close"); // Кнопка закрытия popup профиля
const buttonProfileSave = popupProfile.querySelector(".popup__button-save"); // Кнопка сохранения popup профиля
const formEditProfile = popupProfile.querySelector(".edit-profile"); // Форма редактирования popup профиля
const inputProfileName = popupProfile.querySelector(".inputprofilename"); // Текстовое поле для ввода имени профиля
const inputProfileProfession = popupProfile.querySelector(".inputprofileprofession"); // Текстовое поле для ввода профессии

// Открываем popup окно редактирования профиля
// Подставляем значения в поля input со страницы сайта
buttonProfileOpen.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
  inputProfileName.value = profileNameText.textContent;;
  inputProfileProfession.value = profileProfessionText.textContent;;
});

// Закрываем popup окно редактирования профиля без редактирования, крестиком
buttonProfileClose.addEventListener("click", function () {
  popupProfile.classList.remove("popup_opened");
});

// Функция закрытия окна редактирования с сохранением изменений
function editFormProfession (evt) {
evt.preventDefault();
profileNameText.textContent = inputProfileName.value;
profileProfessionText.textContent = inputProfileProfession.value;
popupProfile.classList.remove("popup_opened");
}

// Отслеживаем нажатие кнопки "Сохранить" в форме редактирования профиля
formEditProfile.addEventListener('submit', editFormProfession);
