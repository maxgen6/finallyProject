const addBtn = () => {
    const btn = document.querySelector('.add-sentence-btn'),
          blocks = document.querySelectorAll('.col-md-4');


    btn.addEventListener('click', () => {
        for(let i = 0; i < blocks.length; i++){
            blocks[i].classList.remove('hidden');
        }
       btn.style.display = 'none'; 
    });
};

export default addBtn;

