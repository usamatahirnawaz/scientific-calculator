let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendFunction(func) {
    display.value += func + "(";
}

function calculate() {
    try {
        let expression = display.value;

        // Replace math functions
        expression = expression.replace(/sin/g, "Math.sin");
        expression = expression.replace(/cos/g, "Math.cos");
        expression = expression.replace(/tan/g, "Math.tan");
        expression = expression.replace(/log/g, "Math.log10");
        expression = expression.replace(/sqrt/g, "Math.sqrt");

        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}
