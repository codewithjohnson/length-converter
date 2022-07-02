const length = document.querySelector('#amount');
const convertFrom = document.querySelector('#from');
const convertTo = document.querySelector('#to');
const formulaContent = document.querySelector('.formular_content');
const result = document.querySelector('#result');


const hints = [{
        // 0
        sameUnit: 'gives the same value'
    },

    {
        // 1
        c_m: 'Divide the length by 100'
    },
    {
        // 2 CENTIMETER TO FEET
        c_f: 'Multiply the length by 0.032808'
    },
    {
        // 3 CENTIMETER TO INCHES
        c_i: 'Multiply the length by 0.39370'
    },
    {
        // 4 CENTIMETER TO YARDS
        c_y: 'Multiply the length by 0.010936'
    },
    {
        // 5 CENTIMETER TO KILOMETER
        c_km: 'Divide the length by 100000'
    },
    {
        // 6 CENTIMETER TO MILES
        c_mi: 'Multiply the length by 0.0000062137'
    },
    {
        // 7 METER TO CENTIMETER
        m_c: 'Multiply the length by 100'
    },
    {
        // 8 METER TO FEET
        m_f: 'Multiply the length by 3.2808'
    },
    {
        // 9 METER TO YARDS
        m_y: 'Multiply the length by 1.0936'
    },
    {
        // 10 METER TO MILES
        m_mi: 'Multiply the length by 0.00062137'
    },
    {
        // 11 METER TO INCHES
        m_i: 'Multiply the length by 39.370'
    },
    {
        // 12 METER TO KILOMETER
        m_km: 'Divide the length by 1000'
    },
    {
        // 13 KILOMETER TO CENTIMETER
        km_cm: 'Multiply the length by 100000'
    },
    {
        // 14  KILOMETER TO METER
        km_m: 'Multiply the length by 1000'
    },
];



function convertValues() {
    if (
        (convertFrom.value === 'centimeter') && (convertTo.value === 'centimeter') ||
        (convertFrom.value === 'meter') && (convertTo.value === 'meter') ||
        (convertFrom.value === 'inches') && (convertTo.value === 'inches') ||
        (convertFrom.value === 'feet') && (convertTo.value === 'feet') ||
        (convertFrom.value === 'kilometers') && (convertTo.value === 'kilometers') ||
        (convertFrom.value === 'yards') && (convertTo.value === 'yards') ||
        (convertFrom.value === 'miles') && (convertTo.value === 'miles')

    ) {
        result.style.border = '2px solid red';
        result.value = length.value;
        formulaContent.textContent = hints[0].sameUnit;
    }
    // CENTIMETER CONVERSION
    else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'meter')) {
        result.value = length.value / 100;
        formulaContent.textContent = hints[1].c_m;
        result.style.border = '3px solid green';
    } else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'feet')) {
        result.value = length.value * 0.032808;
        formulaContent.textContent = hints[2].c_f;
        result.style.border = '3px solid green';
    } else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'inches')) {
        result.value = length.value * 0.39370;
        formulaContent.textContent = hints[3].c_i;
        result.style.border = '3px solid green';
    } else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'yards')) {
        result.value = length.value * 0.010936;
        formulaContent.textContent = hints[4].c_y;
        result.style.border = '3px solid green';
    } else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'kilometers')) {
        result.value = length.value / 100000;
        formulaContent.textContent = hints[5].c_km;
        result.style.border = '3px solid green';
    } else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'miles')) {
        result.value = zlength.value * 0.0000062137;
        formulaContent.textContent = hints[6].c_mi;
        result.style.border = '3px solid green';
    }

    // METER CONVERSION
    else if ((convertFrom.value === 'meter') && (convertTo.value === 'centimeter')) {
        result.value = length.value * 100;
        formulaContent.textContent = hints[7].m_c;
        result.style.border = '3px solid green';
    } else if ((convertFrom.value === 'meter') && (convertTo.value === 'feet')) {
        result.value = length.value * 3.2808;
        formulaContent.textContent = hints[8].m_f;
        result.style.border = '3px solid green';
    } else if ((convertFrom.value === 'meter') && (convertTo.value === 'yards')) {
        result.value = length.value * 1.0936;
        formulaContent.textContent = hints[9].m_y;
        result.style.border = '3px solid green';
    } else if ((convertFrom.value === 'meter') && (convertTo.value === 'miles')) {
        result.value = length.value * 0.00062137;
        formulaContent.textContent = hints[10].m_mi;
        result.style.border = '3px solid green';
    } else if ((convertFrom.value === 'meter') && (convertTo.value === 'inches')) {
        result.value = length.value * 39.370;
        formulaContent.textContent = hints[11].m_i;
        result.style.border = '3px solid green';
    } else if ((convertFrom.value === 'meter') && (convertTo.value === 'kilometers')) {
        result.value = length.value / 1000;
        formulaContent.textContent = hints[12].m_km;
        result.style.border = '3px solid green';
    }else if ((convertFrom.value === 'kilometers') && (convertTo.value === 'centimeter')) {
        result.value = length.value * 100000;
        formulaContent.textContent = hints[13].km_cm;
        result.style.border = '3px solid green';
    }else if ((convertFrom.value === 'kilometers') && (convertTo.value === 'meter')) {
        result.value = length.value * 1000;
        formulaContent.textContent = hints[14].km_m;
        result.style.border = '3px solid green';
    }
    
}


convertFrom.addEventListener('change', convertValues);
convertTo.addEventListener('change', convertValues);
length.addEventListener('input', convertValues);