function convertTemp() {
    const input = document.getElementById("temperature").value;
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    const result = document.getElementById("result");
    const error = document.getElementById("error");

    error.innerText = "";
    result.innerText = "";

    if (input === "" || isNaN(input)) {
        error.innerText = "Please enter a valid temperature!";
        return;
    }

    const temp = parseFloat(input);
    let converted;

    if (from === "C" && to === "F") {
        converted = (temp * 9/5) + 32;
    } else if (from === "F" && to === "C") {
        converted = (temp - 32) * 5/9;
    } else if (from === "C" && to === "K") {
        converted = temp + 273.15;
    } else if (from === "K" && to === "C") {
        converted = temp - 273.15;
    } else if (from === "F" && to === "K") {
        converted = (temp - 32) * 5/9 + 273.15;
    } else if (from === "K" && to === "F") {
        converted = (temp - 273.15) * 9/5 + 32;
    } else {
        converted = temp; // same unit
    }

    result.innerText = `Result: ${converted.toFixed(2)}`;
}


// SWAP BUTTON
document.getElementById("swapBtn").addEventListener("click", function () {
    const from = document.getElementById("fromUnit");
    const to = document.getElementById("toUnit");

    let temp = from.value;
    from.value = to.value;
    to.value = temp;
});

// CLEAR BUTTON
document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("temperature").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("error").innerText = "";
});

