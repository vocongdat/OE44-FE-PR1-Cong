const btnLayoutElement = $$('.icon__layout');
const pageNumberElement = $$('label[name=page]');

const handleOnclick = () => {
    for (let itemBtn of btnLayoutElement) {
        itemBtn.onclick = () => {
            btnLayoutElement[0].classList.toggle('icon--active');
            btnLayoutElement[1].classList.toggle('icon--active');
        };
    }
};

(() => {
    handleOnclick();
})();
