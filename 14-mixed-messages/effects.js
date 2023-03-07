/*
Project name: Mixed Messages
JavaScript for hover effect on cards.
*/

/*
effect is achieved using CSS rules that use the --mouse-x and --mouse-y variables to position 
the card elements relative to the mouse cursor. For example, a rule like transform: 
translate(calc(var(--mouse-x) * 1px), calc(var(--mouse-y) * 1px)); would move the card element 
to the position of the mouse cursor
*/

// selects an HTML element with the ID "cards"
// onmousemove is an event listener that listens for a "mousemove" event on the selected elem
// e => {...} is the event handler function that is called when the mouse moves
// e parameter is an event object that contains information about the mouse movement
document.getElementById("cards").onmousemove = e => {
    // iterates through all the elements with the class "card" on the page
    for(const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(), // gets the size and position of each card element relative to the viewport
            // x + y vars calculated by subtracting position of the card element 
            // from the position of the mouse cursor
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
        // sets custom CSS variables on each card element
        // setProperty() used to set two custom variables 
        // named --mouse-x and --mouse-y for each card element
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
  }

/*
Later in the CSS code, these custom variables can be accessed using the var() function 
and used to apply styles to the respective card element. By using these custom variables, 
dynamic styles can be applied to the card element based on the position of the mouse cursor, 
giving a dynamic effect to the web page.
*/