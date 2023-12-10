const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const heightInCm = parseInt((height.value / 100) ** 2);
    const weightInKg = parseInt(weight.value);

    if (isNaN(height.value) || height.value.trim() === "" || height.value < 0 || isNaN(weight.value) || weight.value.trim() === "" || weight.value < 0) {
        results.innerText = "Enter valid Height and Weight";
        return;
    }

    const bmi = weightInKg / heightInCm;
    const para = document.createElement("div");

    const getBmiCategory = () => {
        if (bmi > 24.9) {
            return "Overweight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            return "Normal";
        } else {
            return "Underweight";
        }
    };

    results.innerHTML = `
        <p>Height: ${height.value}</p>
        <p>Weight: ${weight.value}</p>
        <p>BMI: ${bmi.toFixed(2)}</p>
        <p>${getBmiCategory()}</p>
    `;

    results.appendChild(para);

    height.value = "";
    weight.value = "";
});
