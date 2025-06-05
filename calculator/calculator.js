// Calculator variables to remember our state
// Think of these as the calculator's "memory"
let currentDisplay = '';
let operator = '';   
let firstNumber = '';

function addDigit(digit) {
    // When user clicks a number button (0-9)
    
    // Step 1: Add the new digit to what's already showing
    // Example: if display shows "12" and they click "3", it becomes "123"
    currentDisplay = currentDisplay + digit;
    
    // Step 2: Update what the user sees on the calculator screen
    updateScreen(currentDisplay);

    // Step 3: Update the debug display to show current values
    updateDebugDisplay();
}

function chooseOperation(op) {
    // When user clicks an operation button (+, -, *, /)
    
    // Step 1: Make sure they actually entered a number first
    // (Can't do math with nothing!)
    if (currentDisplay === '') {
        return; // Exit early if no number entered
    }
    
    // Step 2: Save the first number in our memory
    // Example: if they typed "15" then clicked "+", save "15"
    firstNumber = currentDisplay;
    
    // Step 3: Remember which operation they want to do
    // Example: save "+" so we know to add later
    operator = op;
    
    // Step 4: Clear the internal display so they can type the second number
    // Example: screen was showing "15", now it's empty for the next number
    currentDisplay = '';
    
    // Step 5: Briefly show the operation symbol so they know what they picked
    updateScreen(op);

    // Step 6: Update the debug display to show current values
    updateDebugDisplay();
}

function doCalculation() {
    // When user clicks the equals (=) button
    
    // Step 1: Make sure we have all the pieces needed for math
    // Need: first number, operation, and second number
    if (firstNumber === '' || currentDisplay === '' || operator === '') {
        return; // Can't calculate if any piece is missing
    }
    
    // Step 2: Do the actual math calculation
    // Example: if firstNumber="15", operator="+", currentDisplay="7"
    // then codeToEvaluate becomes "15+7"
    let codeToEvaluate = firstNumber + operator + currentDisplay;
    console.log('Calculating:', codeToEvaluate); // Show in browser's developer console
    let result = eval(codeToEvaluate); // eval() does the math for us
    
    // Step 3: Show the answer on the calculator screen
    updateScreen(result);
    
    // Step 4: Clear our memory so calculator is ready for next problem
    currentDisplay = '';
    operator = '';
    firstNumber = '';

    // Step 5: Update the debug display to show current values
    updateDebugDisplay();
}

function clearEverything() {
    // When user clicks the clear (C) button - resets everything
    
    // Erase all our saved information
    currentDisplay = '';
    operator = '';
    firstNumber = '';
    
    // Make the screen blank too
    updateScreen('');

    // Update the debug display to show current values
    updateDebugDisplay();
}

function updateScreen(value) {
    // This function updates what the user sees on the calculator display
    
    // Find the display element in our HTML page
    const displayElement = document.getElementById('display');

    // Update its content with the new value (convert to text first)
    displayElement.value = value.toString();
}

function updateDebugDisplay() {
    // Update the debug display with current variable values
    document.getElementById('debug-current').textContent = currentDisplay;
    document.getElementById('debug-operator').textContent = operator;
    document.getElementById('debug-first').textContent = firstNumber;
}