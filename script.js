
document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Function to generate a random color (hexadecimal)
    function getRandomColor() {
        // Generate a random color in hexadecimal format
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add an event listener to the button
    changeColorBtn.addEventListener('click', function() {
        // Change the background color of the color-box
        colorBox.style.backgroundColor = getRandomColor();
    });
});
