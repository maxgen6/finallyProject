
const popupCallForm = () => {
    let universalPopupFormId = null;
    const universalPopup = document.getElementById('universal-popup');

    const callBtn = document.querySelectorAll('.call-btn');
    const popupContent = document.querySelector('.popup-content');
    
    //popUpAnimation
    const popUpAnimation = () => {
            const topPosition = (document.documentElement.clientHeight - popupContent.clientHeight) / 2;
            let start = Date.now();
            let timer = setInterval(function () {
                let timePassed = (Date.now() - start);
                if (parseFloat(popupContent.style.top) >= topPosition) {
                    clearInterval(timer);
                }
                muve(timePassed);
            }, 10);
            function muve(timePassed) {
                popupContent.style.top = timePassed / 5 + 'px';
            }
    };
    callBtn.forEach((elem) => {
        elem.addEventListener('click', (event) => {  
            event.preventDefault();
            if (screen.width  < 768) {
                universalPopup.style.display = 'block';
            }else {
                universalPopup.style.display = 'block';
                popUpAnimation();
            } 
            universalPopup.querySelector('.capture-form-btn').innerHTML = event.target.dataset.buttonTitle;
            universalPopupFormId = event.target.dataset.form;
        });    
    });              
    universalPopup.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            universalPopup.style.display = 'none';
            popupContent.style.top = '';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                universalPopup.style.display = 'none';
                popupContent.style.top = '';
            }
        }
    });
    
    

    //send data
    const forms = document.querySelectorAll('.common-form');
    const inputValu = document.getElementsByTagName('input');
        for(const form of forms){
            form.addEventListener('submit', (event) => {

                event.preventDefault();
                const errorMessage = 'Что то пошло не так...';
                const loadMessage = 'Идет отправка...';
                const successMesage =  'Спасибо! Мы скоро с вами свяжемся!';
                const statusMessage = form.querySelector('.status-message');
                const bottomInput = document.getElementById('myonoffswitch-two');
                const formControl = document.querySelectorAll('.form-control');
                const accordion = document.querySelector('.accordion');
                const panelCollapses =  accordion.querySelectorAll('.panel-collapse');
                const textInputs = document.querySelectorAll('.recet');


                const formData = new FormData(form);
                form.append(statusMessage);
                statusMessage.style.cssText = 'font-size: 1.2rem; color: #6de4fc;';
                const body = {};
                for (const value of formData.entries()) {
                    body[value[0]] = value[1];
                }
                if (universalPopupFormId) {
                    const formData = new FormData(document.getElementById(universalPopupFormId));
                    for (const value of formData.entries()) {
                        body[value[0]] = value[1];
                    }
                }
                form.reset();
                    const reset = () => {
                        formControl.forEach((elem) => {
                            elem.options.selectedIndex = 0;
                    
                        });   
                        textInputs.forEach((elem) => {
                            elem.value  = '';
                        });
                        panelCollapses.forEach((elem) => {
                           elem.classList.remove('in');   
                        });
                        panelCollapses.forEach((elem) => {
                            elem.classList.remove('in');
                            document.getElementById('collapseOne').classList.add('in');
                        });   
                    };
                    reset();
                
            const postData = (body) => {
                statusMessage.textContent = loadMessage;
                return new Promise((resolve, reject) => {
                    const request = new XMLHttpRequest();
                    request.addEventListener('readystatechange', () => {
                            if (request.readyState !== 4) {
                                return;
                            } 
                            if (request.status === 200) {
                                resolve(); 
                            }else {
                                reject(request.status);  
                            }      
                        });
                request.open('POST', './server.php');
                request.setRequestHeader('Content-Type', 'application/json');     
                request.send(JSON.stringify(body));               
                });
            };  
            postData(body).then(res => {
                statusMessage.textContent = successMesage;
            }).catch(error => {
                statusMessage.textContent = errorMessage;
            });

        });
        
    }
};
export default popupCallForm;

