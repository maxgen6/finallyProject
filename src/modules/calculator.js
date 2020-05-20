const calculator = () => {
    const firstDiam = document.querySelector('.form-control1'),
        firstHow = document.querySelector('.form-control2'),
        secondDiam = document.querySelector('.form-control3'),
        secondHow = document.querySelector('.form-control4'),
        panelBody = document.querySelector('.panel-body'),
        accord = document.querySelector('#accordion'),
        calcResult = document.getElementById('calc-result');
    
        const countSum = (price) => {
            accord.addEventListener('change', () => {
                price = 10000;
                if (count % 2 !== 0){
                    price = price + 1000;
                }
                if(firstDiam.value === '1.4 метра'){  
                    if(firstHow.value === '1 штука'){
                    price = price; 
                    calcResult.value = price;
                } else  if(firstHow.value === '2 штуки'){
                    price += 0.3 * price;
                    calcResult.value = price;
                }else  if(firstHow.value === '3 штуки'){
                    price += 0.5 * price;
                    calcResult.value = price;
                }
            } else if(firstDiam.value === '2 метра'){
                    price += 0.2 * price;
                if(firstHow.value === '1 штука'){
                    price = price;
                    calcResult.value = price;
                } else  if(firstHow.value === '2 штуки'){
                    price += 0.3 * price;
                    calcResult.value = price;
                }else  if(firstHow.value === '3 штуки'){
                    price += 0.5 * price;
                    calcResult.value = price;
                }
            } 
            if(counter % 2 !== 0){
                price = 15000;
                if (count % 2 !== 0){
                    price = price + 2000;
                }
                if(secondDiam.value === '1.4 метра'){  
                    if(secondHow.value === '1 штука'){
                    price = price; 
                    calcResult.value = price;
                } else  if(secondHow.value === '2 штуки'){
                    price += 0.3 * price;
                    calcResult.value = price;
                }else  if(secondHow.value === '3 штуки'){
                    price += 0.5 * price;
                    calcResult.value = price;
                }
            } else if(secondDiam.value === '2 метра'){
                    price += 0.2 * price;
                if(secondHow.value === '1 штука'){
                    price = price;
                    calcResult.value = price;
                } else  if(secondHow.value === '2 штуки'){
                    price += 0.3 * price;
                    calcResult.value = price;
                }else  if(secondHow.value === '3 штуки'){
                    price += 0.5 * price;
                    calcResult.value = price;
                }
            }

        }
        }); 
        };
            


    const label = document.querySelectorAll('.onoffswitch-label'),            
        checkBox = document.querySelector('.onoffswitch-checkbox'),
        selectBox = document.querySelectorAll('.select-box'),
        titleText = document.querySelectorAll('.title-text');
    
    titleText[1].style.display = 'none';
    for(let i = 2; i < selectBox.length; i++){
        selectBox[i].style.display = 'none';
    }
    countSum(10000);
    let counter = 0; 
    label[0].addEventListener('click', () => {   
    counter++;
    if(counter % 2 === 0){
        titleText[1].style.display = 'none';
    for(let i = 2; i < selectBox.length; i++){
        selectBox[i].style.display = 'none';
    } 
    countSum(10000);
    } else {
    titleText[1].style.display = 'block';
    for(let i = 2; i < selectBox.length; i++){
        selectBox[i].style.display = 'inline-block';
    }
    countSum(15000);
    }
});

let count = 0;
label[1].addEventListener('click', () => count ++);

};
export default calculator;