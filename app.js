document.getElementById("tracker-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    let steps = document.getElementById("steps").value;
    let water = document.getElementById("water").value;
    let sleep = document.getElementById("sleep").value;

    // Display the results
    let resultsOutput = `
        <p><strong>Steps:</strong> ${steps}</p>
        <p><strong>Water Intake:</strong> ${water} liters</p>
        <p><strong>Sleep:</strong> ${sleep} hours</p>
    `;
    
    document.getElementById("results-output").innerHTML = resultsOutput;

    // Clear form fields
    document.getElementById("tracker-form").reset();
});
