const sendForm = () => {
    const errorMessage = 'Что-то пошло не так ...',
        loadMessage = 'Загрузка...',
        succesMessage = 'Спасибо! Мы с Вами свяжемся!';

    const forms = document.querySelectorAll('form'),
        statusMessage = document.createElement('div');

    statusMessage.style.css = 'font-size: 2rem;';

    const validate = () => {
        let formName = document.getElementsByName('user_name'),
            userQuest = document.querySelectorAll('.user_quest'),
            formPhone = document.querySelectorAll('.phone-user');

        for(let i = 0; i < formName.length; i++){
            formName[i].addEventListener('input', () => {
                formName[i].value = formName[i].value.replace(/\w/gi, '');
            });
        }
        for(let i = 0; i < formPhone.length; i++){
            formPhone[i].addEventListener('input', () => {
                formPhone[i].value = formPhone[i].value.replace(/\D/g, '');
            });
        }
        for(let i = 0; i < userQuest.length; i++){
        userQuest[i].addEventListener('input', () => {
            userQuest[i].value = userQuest[i].value.replace(/\w/gi, '');
        });
    }

    };
    validate();


    forms.forEach(form => {
        validate(form);
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;

            const formData = new FormData(form);

            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });
            
            postData(body)
                .then((response) => {
                    if(response.status !== 200){
                        throw new Error('status network now 200');
                    }
                    statusMessage.textContent = succesMessage;
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.err(error);
                });
        
        });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include'
        });
    };


};
export default sendForm;