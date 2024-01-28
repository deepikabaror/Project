function changePageBackgroundColor() {
    // Generate a random color (you can customize this part)
    var randomColor = getRandomColor();
        
    // Change the background color of the entire page
    document.body.style.backgroundColor = randomColor;
}

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}