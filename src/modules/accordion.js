const accordion = () => {
    const panel = document.querySelectorAll('.panel-collapse'),
        panelGroup = document.querySelectorAll('.panel-group'),
        nextBtn = document.querySelectorAll('.construct-btn'),
        panelBody = document.querySelectorAll('.panel-body'),
        panelHeading = document.querySelectorAll('.panel-heading');
    
  
    const accordionShow = (index) => {
        for(let i = 0; i < panelHeading.length; i++){
            if(index === i){
                panel[i].classList.add('in');
            } else {
                panel[i].classList.remove('in');
            }
        }
    };

    panelGroup.forEach((elem) => {
        elem.addEventListener('click', (event) => {
        let target = event.target;
        target = target.closest('.panel-heading');

        if(target){
            
            panelHeading.forEach((item, i) => {                  
                if(item === target){ 
            accordionShow(i);
        }       
    });
    } 
    });
});

    nextBtn.forEach((elem) => {
        elem.addEventListener('click', (event) => {
                let target = event.target;
                    target = target.closest('.construct-btn');
                
                if(target){
                    nextBtn.forEach((item, i) => {
                        if(item === target){
                            accordionShow(i + 1);
                        }
                    });
                }
                
        });
    });

};
export default accordion;