const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertBtn = document.getElementById('convert-btn');
const resultElement = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        resultElement.textContent = 'Invalid input. Please enter a number.';
        return;
    }

    let convertedTemperature;
    let convertedUnit;

    switch (unit) {
        case 'Celsius':
            convertedTemperature = (temperature * 9/5) + 32;
            convertedUnit = 'Fahrenheit';
            break;
        case 'Fahrenheit':
            convertedTemperature = (temperature - 32) * 5/9;
            convertedUnit = 'Celsius';
            break;
        case 'Kelvin':
            if (temperature < 0) {
                resultElement.textContent = 'Kelvin cannot be negative.';
                return;
            }
            convertedTemperature = temperature - 273.15;
            convertedUnit = 'Celsius';
            break;
    }

    resultElement.textContent = `The temperature in ${convertedUnit} is
     ${convertedTemperature.toFixed(2)}°${convertedUnit === 'Kelvin'? 'K' : ''}`;
});