##projects related DOM
#soltion code
##project 2
```javascript
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const resultSummary = document.getElementById('result-summary');
    const detailedResult = document.getElementById('detailed-result');
    const bmiValueEl = document.getElementById('bmi-value');
    const bmiCategoryEl = document.getElementById('bmi-category');
    const tipsEl = document.getElementById('tips');

    detailedResult.classList.add('hidden');

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        resultSummary.innerText = "Please enter valid values.";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const roundedBMI = bmi.toFixed(2);

    let category = '';
    let tips = [];

    if (bmi < 18.5) {
        category = 'Underweight';
        tips = [
            'Eat more nutrient-rich foods.',
            'Include more calories in your diet.',
            'Consult a healthcare provider.'
        ];
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        tips = [
            'Maintain a balanced diet.',
            'Regular exercise.',
            'Get enough sleep.'
        ];
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        tips = [
            'Increase physical activity.',
            'Eat more vegetables and fruits.',
            'Monitor your calorie intake.'
        ];
    } else {
        category = 'Obesity';
        tips = [
            'Consult a healthcare professional.',
            'Create a weight loss plan.',
            'Eat a healthy, balanced diet.'
        ];
    }

    resultSummary.innerText = `Your BMI is ${roundedBMI} (${category})`;
    bmiValueEl.innerText = `Your BMI: ${roundedBMI}`;
    bmiCategoryEl.innerText = `Category: ${category}`;

    // Populate tips
    tipsEl.innerHTML = '';
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.innerText = tip;
        tipsEl.appendChild(li);
    });

    // Show detailed result
    detailedResult.classList.remove('hidden');
}
```
project 2
