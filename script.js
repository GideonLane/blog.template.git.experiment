const btn = document.querySelector('.btn');
const popupContainer = document.querySelector('.popup-container');
const popupButton = document.querySelector('.popup-button');

btn.onclick = () => {
    popupContainer.classList.add('active');
}

popupButton.onclick = () => {
    popupContainer.classList.remove('active');
}