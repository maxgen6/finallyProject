
const calculatorAccordion = () => {
    const accordion = document.getElementById('accordion');
    const calcResultInput = document.getElementById('calc-result');
    const callBtnResult = document.getElementById('call-btn-result');
    const typeSwithcer = document.getElementById('myonoffswitch');
    const bottomInput = document.getElementById('myonoffswitch-two');
    const diameter1Input =  document.getElementById('diameter-1');
    const ringsCount1Input =  document.getElementById('rings-count-1');
    const diameter2Input =  document.getElementById('diameter-2');
    const ringsCount2Input =  document.getElementById('rings-count-2');
    const distanceInput = document.getElementById('distance');
    const formControl = accordion.querySelectorAll('.form-control');
    let sendResult = {};
    
    let type = 1;
    let sum = 0;
    let ringsCount1 = 1;
    let diametr1 = 1.4; //2.0
    let ringsCount2 = 1;
    let diametr2 = 1.4; //2.0
    let bottom = false;

    const secondFountain = document.getElementById('second-fountain');
    secondFountain.classList.add('hidden');

    accordion.addEventListener('change', event => {
        switch (event.target) {
            case typeSwithcer: 
                type = typeSwithcer.checked ? 1 : 2;
                
                if (!typeSwithcer.checked){
                    secondFountain.classList.remove('hidden'); 
                } else if (typeSwithcer.checked){
                    secondFountain.classList.add('hidden'); 
                }     
                break;
            case bottomInput:
                bottom = bottomInput.checked;
                break;
            case diameter1Input:
                diametr1 = +diameter1Input.options[diameter1Input.selectedIndex].value;
                break;
            case diameter2Input:
                diametr2 = +diameter2Input.options[diameter2Input.selectedIndex].value;
                break;
            case ringsCount1Input:
                ringsCount1 = +ringsCount1Input.options[ringsCount1Input.selectedIndex].value;
                break;
            case ringsCount2Input:
                ringsCount2 = +ringsCount2Input.options[ringsCount2Input.selectedIndex].value;
                break;
            }
        calculate();
       
    });

    const calculate = () => {
            let totalPrice = 0;
            switch (type) {
                case 1:
                    totalPrice = 10000;
                    if (diametr1 === 2.0) {
                        totalPrice *= 1.2;
                    }
                    if (ringsCount1 === 2) {
                        totalPrice *= 1.3;
                    } else if (ringsCount1 === 3) {
                        totalPrice *= 1.5;
                    }

                    if (bottom) {
                        totalPrice += 1000;
                    }
                    break;
                case 2:
                    totalPrice = 15000;
                    if (diametr1 === 2.0) {
                        totalPrice *= 1.2;
                    }
                    if (ringsCount1 === 2) {
                        totalPrice *= 1.3;
                    } else if (ringsCount1 === 3) {
                        totalPrice *= 1.5;
                    }

                    if (diametr2 === 2.0) {
                        totalPrice *= 1.2;
                    }
                    if (ringsCount2 === 2) {
                        totalPrice *= 1.3;
                    } else if (ringsCount2 === 3) {
                        totalPrice *= 1.5;
                    }

                    if (bottom) {
                        totalPrice += 2000;
                    }
                    break;
            }
            calcResultInput.value = totalPrice;
            
        };
        calculate();
}; 
export default calculatorAccordion;