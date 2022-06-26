const length = document.querySelector('#amount');
const convertFrom = document.querySelector('#from');
const convertTo = document.querySelector('#to');
const formulaContent = document.querySelector('.formular_content');
const result = document.querySelector('#result');


function convertValues(){
    if ((convertFrom.value === 'centimeter') && (convertTo.value === 'centimeter')) {
        result.value = length.value;
    } 

    else if ((convertFrom.value === 'meter') && (convertTo.value === 'meter')) {
        result.value = length.value;
    } 
    
    else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'meter')) {
        result.value = length.value / 100;
    }

    else if ((convertFrom.value === 'meter') && (convertTo.value === 'centimeter')) {
        result.value = length.value / 100;
    }
}




convertFrom.addEventListener('change', convertValues);
convertTo.addEventListener('change', convertValues);
length.addEventListener('input',convertValues);
