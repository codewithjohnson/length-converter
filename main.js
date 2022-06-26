const length = document.querySelector('#amount');
const convertFrom = document.querySelector('#from');
const convertTo = document.querySelector('#to');
const formulaContent = document.querySelector('.formular_content');
const result = document.querySelector('#result');

const hints = [
    {
        sameUnit: 'gives the same value',
    },

    {
        c_m:'Divide the length by 100',
    },
    
    {
        m_c:'Multiply the length by 100',
    }
];




function convertValues() {
    if ((convertFrom.value === 'centimeter') && (convertTo.value === 'centimeter')) {
        result.value = length.value;
        formulaContent.textContent = hints[0].sameUnit;
    } 
    
    else if ((convertFrom.value === 'meter') && (convertTo.value === 'meter')) {
        result.value = length.value;
        formulaContent.textContent = hints[0].sameUnit;
    } 
    
    else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'meter')) {
        result.value = length.value / 100;
        formulaContent.textContent = hints[1].c_m;
    } 
    
    else if ((convertFrom.value === 'meter') && (convertTo.value === 'centimeter')) {
        result.value = length.value / 100;
        formulaContent.textContent = hints[2].m_c;
    }
}




convertFrom.addEventListener('change', convertValues);
convertTo.addEventListener('change', convertValues);
length.addEventListener('input', convertValues);