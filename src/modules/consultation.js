const consultation = () => {
    const consultationBtn = document.querySelector('.consultation-btn'),
        popupConsultation = document.querySelector('.popup-consultation');
        
        
        let opacity = 0;
        popupConsultation.style.opacity = opacity;
    consultationBtn.addEventListener('click', () => {
        opacity = 1;
        popupConsultation.style.display = 'block';
        popupConsultation.style.opacity = opacity;
    });

    popupConsultation.addEventListener('click', () => {
        let target = event.target;
        if(target.classList.contains('popup-close')){
            popupConsultation.style.display = 'none';
        } else if(target !== target.closest('.popup-content')){
            popupConsultation.style.display = 'none';
        }
    });

};
export default consultation;    