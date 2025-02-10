// Obtener elementos del DOM
const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorBox = document.querySelector(".color-box");
const hexCode = document.getElementById("hex-code");
const colorPicker = document.getElementById("colorPicker");

// Función para actualizar el color
function updateColor() {
    const red = parseInt(redRange.value);
    const green = parseInt(greenRange.value);
    const blue = parseInt(blueRange.value);

    // Convertir a hexadecimal
    const hex = `#${red.toString(16).padStart(2, "0")}${green.toString(16).padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;

    // Aplicar color y actualizar textos
    colorBox.style.backgroundColor = hex;
    hexCode.textContent = hex.toUpperCase();
    colorPicker.value = hex;

    // Sincronizar los inputs numéricos con los sliders
    redInput.value = red;
    greenInput.value = green;
    blueInput.value = blue;
}

// Función para sincronizar los sliders con los inputs numéricos
function syncRangeWithInput(event) {
    let { id, value } = event.target;
    value = Math.max(0, Math.min(255, value)); // Limitar valores entre 0 y 255
    event.target.value = value;

    if (id === "redInput") redRange.value = value;
    if (id === "greenInput") greenRange.value = value;
    if (id === "blueInput") blueRange.value = value;

    updateColor();
}

// Función para actualizar desde el Color Picker
function updateFromColorPicker() {
    const hex = colorPicker.value;
    
    // Extraer valores RGB del color seleccionado
    const red = parseInt(hex.substring(1, 3), 16);
    const green = parseInt(hex.substring(3, 5), 16);
    const blue = parseInt(hex.substring(5, 7), 16);

    // Asignar valores a los sliders e inputs numéricos
    redRange.value = red;
    greenRange.value = green;
    blueRange.value = blue;

    redInput.value = red;
    greenInput.value = green;
    blueInput.value = blue;

    updateColor();
}

// Event listeners para los sliders
redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);

// Event listeners para los inputs numéricos
redInput.addEventListener("input", syncRangeWithInput);
greenInput.addEventListener("input", syncRangeWithInput);
blueInput.addEventListener("input", syncRangeWithInput);

// Event listener para el Color Picker
colorPicker.addEventListener("input", updateFromColorPicker);

// Inicializar color
updateColor();
