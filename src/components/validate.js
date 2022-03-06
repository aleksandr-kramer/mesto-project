export const validationConfig = {
  formSelector: ".form",
  inputSelector: ".popup__text",
  errorClass: "error-message_visible",
  inputInvalidClass: "popup__text_invalid",
  buttonSelector: ".popup__button-save",
  buttonDisabledClass: "popup__button-save_disabled",
};
// Функция скрытия ошибки
export const hideInputError = (inputElement, errorElement, config) => {
  inputElement.classList.remove(config.inputInvalidClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
};
// Функция показа ошибки
export const showInputError = (inputElement, errorElement, errorMessage, config) => {
  inputElement.classList.add(config.inputInvalidClass);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = errorMessage;
};

// Функция валидации инпутов
export const checkInputValidity = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.name}`);
  if (inputElement.validity.valid) {
    hideInputError(inputElement, errorElement, config);
  } else {
    showInputError(
      inputElement,
      errorElement,
      inputElement.validationMessage,
      config
    );
  }
};

export const disableButton = (buttonElement, config) => {
  buttonElement.classList.add(config.buttonDisabledClass);
  buttonElement.disabled = true;
};

export const enableButton = (buttonElement, config) => {
  buttonElement.classList.remove(config.buttonDisabledClass);
  buttonElement.disabled = false;
};

export const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// Функция состояния кнопки
export const toggleButtonState = (formElement, inputList, config) => {
  const buttonElement = formElement.querySelector(config.buttonSelector);
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, config);
  } else {
    enableButton(buttonElement, config);
  }
};

// Функция слушатель input'ов
export const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      // проверка валидации инпута
      checkInputValidity(formElement, inputElement, config);
      // проверка состояния кнопки
      toggleButtonState(formElement, inputList, config);
    });
  });
  toggleButtonState(formElement, inputList, config);
};

//Функция валидации форм
export const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
};
