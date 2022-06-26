const selectInputs = document.querySelectorAll('select');

const units = [
    'meter',
    'inches',
    'feet',
    'kilometers',
    'yards',
    'miles'
];

for (let i = 5; i >= 0; i--) {
    selectInputs[0].firstElementChild.insertAdjacentHTML('afterend', `<option value= ${units[i]}>${units[i]}</option>`);
}

for (let i = 5; i >= 0; i--) {
    selectInputs[1].firstElementChild.insertAdjacentHTML('afterend', `<option value= ${units[i]}>${units[i]}</option>`);
}
