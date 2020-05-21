const sendSale = () => {
    const btnDiscount = document.querySelectorAll('.sentence-btn'),
        popupDiscount = document.querySelector('.popup-discount');

    let opacity = 0;
    popupDiscount.style.opacity = opacity;
    btnDiscount.forEach((elem) => {
            elem.addEventListener('click', function animation(){
                popupDiscount.style.display = 'block';
                opacity += 0.1;
                popupDiscount.style.opacity = opacity;
                if(opacity < 1){
                    setTimeout(animation, 20);
                }
            
        });
    });
    popupDiscount.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup-close')){
            popupDiscount.style.display = 'none';
            return (opacity = 0);
        } else {
            target = target.closest('.popup-content');
            if(!target){
                popupDiscount.style.display = 'none';
            }
        }
    });

};  
export default sendSale;