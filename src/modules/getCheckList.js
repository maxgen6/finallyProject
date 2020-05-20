const getCheckList = () => {
    const checkBtn = document.querySelector('.check-btn'),
        popupCheck = document.querySelector('.popup-check');

    let opacity = 0;
    popupCheck.style.opacity = opacity;
    checkBtn.addEventListener('click', () => {
        popupCheck.style.display = 'block';
        opacity = 1;
        popupCheck.style.opacity = opacity; 
    });
    popupCheck.addEventListener('click', () => {
        let target = event.target;
            
        if(target.classList.contains('popup-close')){
            popupCheck.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if(!target){
                popupCheck.style.display = 'none';
            }
        }
    });


    };
    export default getCheckList;