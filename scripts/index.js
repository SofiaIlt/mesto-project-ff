// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');

function addCard(nameValue, linkValue) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
    cardElement.querySelector('.card__image').src = linkValue;
    cardElement.querySelector('.card__image').alt = nameValue;
    cardElement.querySelector('.card__title').textContent = nameValue;
  
    cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('card__like-button_is-active');
    });

    cardElement.querySelector('.card__delete-button').addEventListener('click', function (evt) {
        deleteCard(evt);
    });
  
    placesList.append(cardElement);
}

function deleteCard(evt) {
    evt.target.closest('.card').remove();
}

initialCards.forEach( (element) => {
    addCard(element.name, element.link);
});
