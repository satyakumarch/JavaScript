const calcButton = document.querySelector('.res');
calcButton.addEventListener('click', function() {
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#width').value); // Using the ID from your HTML
    const result = document.querySelector('#result');
    
    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`; // Fixed variable name
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
    }
});