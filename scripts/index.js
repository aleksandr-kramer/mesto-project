const profile = document.querySelector(".profile");
const popupprofile = document.querySelector(".popupprofile");
const profilenametext = profile.querySelector(".profile__name-text"); // Элемент h1 с именем профиля
const profileprofessiontext = profile.querySelector(
  ".profile__profession-text"
); // Элемент страницы с названием профессии
const buttonprofileopen = profile.querySelector(".profile__edit-button"); // Кнопка отрытия popup профиля
const buttonprofileclose = popupprofile.querySelector(".popup__close"); // Кнопка закрытия popup профиля
const buttonprofilesave = popupprofile.querySelector(".popup__button-save"); // Кнопка сохранения popup профиля
const formeditprofile = popupprofile.querySelector(".edit-profile"); // Форма редактирования popup профиля
const inputprofilename = popupprofile.querySelector(".inputprofilename"); // Текстовое поле для ввода имени профиля
const inputprofileprofession = popupprofile.querySelector(".inputprofileprofession"); // Текстовое поле для ввода профессии

let profilename = profilenametext.textContent; // Имя профиля со страницы из тега h1
let profileprofession = profileprofessiontext.textContent; // Профессия со страницы

// Открываем popup окно редактирования профиля
// Подставляем значения в поля input со страницы сайта
buttonprofileopen.addEventListener("click", function () {
  popupprofile.classList.add("popup_opened");
  inputprofilename.value = profilename;
  inputprofileprofession.value = profileprofession;
});

// Закрываем popup окно редактирования профиля
buttonprofileclose.addEventListener("click", function () {
  popupprofile.classList.remove("popup_opened");
});

// Функция закрытия окна редактирования профиля
// Получаем и Передаём значения полей input в html
// Закрываем окно
function formeditprofession (evt) {
evt.preventDefault();
profilename = inputprofilename.value;
profileprofession = inputprofileprofession.value;
profilenametext.textContent = profilename;
profileprofessiontext.textContent = profileprofession;
popupprofile.classList.remove("popup_opened");
}

// Отслеживаем нажатие кнопки "Сохранить" в форме редактирования профиля
// Запускаем закрытие с сохранением данных
buttonprofilesave.addEventListener('click', formeditprofession);
