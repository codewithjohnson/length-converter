const length = document.querySelector('#amount');
const convertFrom = document.querySelector('#from');
const convertTo = document.querySelector('#to');
const formulaContent = document.querySelector('.formular_content');
const result = document.querySelector('#result');

const hints = [
    {
        // 0
        sameUnit: 'gives the same value' 
    },

    {
        // 1
        c_m: 'Divide the length by 100'
    },
    {
        // 2
        c_f:'Multiply the length by 0.032808'
    },
    {
        // 3
        c_i:'Multiply the length by 0.39370'
    },
    {
        // 4
        c_y:'Multiply the length by 0.010936'
    },
    {
        // 5
        c_km:'Divide the length by 100000'
    },
    {
        // 6
        c_mi:'Multiply the length by 0.0000062137'
    },
    {
        // 7
        m_c:'Multiply the length by 100'
    },
    {
        // 8
        m_f:'Multiply the length by 3.2808'
    },
    {
        // 9
        m_y:'Multiply the length by 1.0936'
    },
    {
        // 10
        m_mi:'Multiply the length by 0.00062137'
    },
    {
        // 11
        m_i:'Multiply the length by 39.370'
    },
    {
        // 12
        m_km:'Divide the length by 1000'
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
        result.value = length.value;
        formulaContent.textContent = hints[0].sameUnit;
    } 
    else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'meter')) {
        result.value = length.value / 100;
        formulaContent.textContent = hints[1].c_m;
    } 
    else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'feet')) {
        result.value = length.value * 0.032808;
        formulaContent.textContent = hints[2].c_f;
    }
    else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'inches')) {
        result.value = length.value * 0.39370;
        formulaContent.textContent = hints[3].c_i;
    }
    else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'yards')) {
        result.value = length.value * 0.010936;
        formulaContent.textContent = hints[4].c_y;
    }
    else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'kilometers')) {
        result.value = length.value / 100000;
        formulaContent.textContent = hints[5].c_km;
    }
    else if ((convertFrom.value === 'centimeter') && (convertTo.value === 'miles')) {
        result.value = length.value * 0.0000062137;
        formulaContent.textContent = hints[6].c_mi;
    }

    // METER CONVERSION
    else if ((convertFrom.value === 'meter') && (convertTo.value === 'centimeter')) {
        result.value = length.value * 100;
        formulaContent.textContent = hints[7].m_c;
    }
    else if ((convertFrom.value === 'meter') && (convertTo.value === 'feet')) {
        result.value = length.value * 3.2808;
        formulaContent.textContent = hints[8].m_f;
    }
    else if ((convertFrom.value === 'meter') && (convertTo.value === 'yards')) {
        result.value = length.value * 1.0936;
        formulaContent.textContent = hints[9].m_y;
    }
    else if ((convertFrom.value === 'meter') && (convertTo.value === 'miles')) {
        result.value = length.value * 0.00062137;
        formulaContent.textContent = hints[10].m_mi;
    }
    else if ((convertFrom.value === 'meter') && (convertTo.value === 'inches')) {
        result.value = length.value * 39.370;
        formulaContent.textContent = hints[11].m_i;
    }
    else if ((convertFrom.value === 'meter') && (convertTo.value === 'kilometers')) {
        result.value = length.value / 1000;
        formulaContent.textContent = hints[12].m_km;
    }
}


convertFrom.addEventListener('change', convertValues);
convertTo.addEventListener('change', convertValues);
length.addEventListener('input', convertValues);