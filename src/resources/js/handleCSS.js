export const handleLayOutButton = () => {
    const btnLayoutElement = document.querySelectorAll('.icon__layout');
    for (let itemBtn of btnLayoutElement) {
        itemBtn.onclick = (e) => {
            if (e.target === btnLayoutElement[0]) {
                const isCheck = e.target.classList.contains('icon--active');
                if (!isCheck) {
                    e.target.classList.add('icon--active');
                    btnLayoutElement[1].classList.remove('icon--active');
                }
            } else {
                const isCheck = e.target.classList.contains('icon--active');
                if (!isCheck) {
                    e.target.classList.add('icon--active');
                    btnLayoutElement[0].classList.remove('icon--active');
                }
            }
        };
    }
};
