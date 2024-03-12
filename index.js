var rate = document.querySelectorAll("li");
var lastClicked = null;
var scoreAmount = "none";
for (var i = 0; i < rate.length; i++) {
    rate[i].addEventListener('click', function(handleClick) {
        if (this === lastClicked) {
            // Toggle the styles to normal (deselected)
            this.style.backgroundColor = '';
            this.style.color = ''; // Resetting to default color
            lastClicked = null; // Reset lastClicked
        }else{
        // Reset the color of the previously clicked item,if there is any
        if (lastClicked !== null) {
            lastClicked.style.backgroundColor = '';
            lastClicked.style.color = ''; // Resetting to default color
        }
        // Update the color of the currently clicked item
        this.style.backgroundColor = 'hsl(216, 12%, 54%)';
        this.style.color = 'white';
        // setting value to lastckicled when something is clicked
        // "this" is same as rate[i]
        lastClicked = this; 
        scoreAmount = lastClicked.innerHTML;
    }
    });
}

var button = document.querySelector("button");
var containerOne = document.querySelector(".container-1")
var containerTwo = document.querySelector(".container-2")
var score = document.querySelector(".score");
button.addEventListener('click', function(){
    containerOne.classList.add("hidden");
    containerTwo.classList.remove("hidden");
    score.innerHTML = scoreAmount;
})
