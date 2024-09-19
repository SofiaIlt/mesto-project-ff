// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');

function createCard(nameValue, linkValue) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
  
    cardImage.src = linkValue;
    cardImage.alt = nameValue;
    cardElement.querySelector('.card__title').textContent = nameValue;
  
    cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('card__like-button_is-active');
    });

    cardElement.querySelector('.card__delete-button').addEventListener('click', function (evt) {
        deleteCard(evt);
    });
  
    return cardElement;
}

function deleteCard(evt) {
    evt.target.closest('.card').remove();
}

initialCards.forEach( (element) => {
    const cardElement = createCard(element.name, element.link);
    placesList.append(cardElement);
});
