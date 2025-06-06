//TODO 📚 Module 4 - Lesson 09.02: Immediately Invoked Function Expressions (IIFE) - Challenge


//TODO  🧱 “Quick Settings Panel” Using IIFE

//* ✅ Step 1: Define the Purpose of the App

//? Question
//  > “What should this mini app do when the page loads?”

//? Project version:
//  • Show a dropdown or buttons to choose a theme ("light" or "dark")
//  • Log a message or update an area of the page with the selected theme
//  • Keep the theme private inside an IIFE
//  • Allow external code to use only a method like applyTheme() or getTheme()

//* ✅ Step 2: Design the HTML Structure (in mind or on paper)
//  • Input element (e.g. <select> with "Light" and "Dark")
//  • A heading or container whose style will reflect the selected theme
//  • A script at the bottom where the JavaScript will run
//  Test logic and visibility.

//* ✅ Step 3: Use an IIFE to Isolate the Settings Logic
//  Inside script:
//  • Wrap the entire theme-handling logic inside an IIFE
//  • Declare a private variable like let currentTheme = "light"
//  • Create a public object with one or two functions like:
//      > applyTheme(newTheme) – updates currentTheme and DOM
//      > getTheme() – returns the current theme
//  Return this object at the end of IIFE, and store it in something like const settingsPanel = (...)

//* ✅ Step 4: Link the Input to the IIFE Logic
//  • Add an event listener to the dropdown or buttons
//  • When the user changes the theme, call settingsPanel.applyTheme(value)
//  The applyTheme() method should:
//      > Update the private variable
//      > Change the text or background color in the DOM
//      > Log something like: "Theme changed to: dark"

//* ✅ Step 5: Test Scope Protection
//  After the IIFE:
//  • log currentTheme — it should fail (it’s private)
//  • Only settingsPanel.getTheme() should reveal the current value


//! Solution

(() => {
    
    function toggleTheme() {
        const currentTheme = document.documentElement.dataset.theme;
        document.documentElement.dataset.theme = currentTheme === 'dark' ? 'light' : 'dark';
    }

    const themeToggleButton = document.querySelector('[data-theme-toggle]');
    themeToggleButton.addEventListener('click', toggleTheme);
})();















