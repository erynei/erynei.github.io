// Task 1
// Add an event listener to the button (the user drags his mouse over the button)
let justinBtn = document.getElementById("justin-btn");
let resultBox = document.getElementById("result");


justinBtn.addEventListener("mouseover", function() {
    resultBox.textContent = "Welcome to My Heart";
    resultBox.style.backgroundColor = "pink";
    resultBox.style.color = "blue";
});

// Task 2
// Add an event listener to the button (the user drags his mouse out of the button)
justinBtn.addEventListener("mouseout", function() {
    resultBox.textContent = "Don't Leave Me Please";
    resultBox.style.backgroundColor = "black";
    resultBox.style.color = "red";
});

