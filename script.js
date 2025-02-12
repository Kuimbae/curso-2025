// Seleccionar el botón por su ID
const colorButton = document.getElementById("colorButton");

// Función para cambiar el color de fondo
colorButton.addEventListener("click", function() {
    // Array con varios colores
    const colors = ["#ff6347", "#3cb371", "#1e90ff", "#ff1493", "#8a2be2"];

    // Obtener un color aleatorio del array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Cambiar el color de fondo
    document.body.style.backgroundColor = randomColor;
});