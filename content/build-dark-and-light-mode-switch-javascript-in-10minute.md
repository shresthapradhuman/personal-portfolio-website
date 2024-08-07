---
title: "Build a Dark/Light Mode Switch in JavaScript in 10 Minutes"
date: "7 Apr, 2023"
excerpt: "
Learn how to quickly build a dark/light mode switch in JavaScript. This 10-minute guide covers the essentials for creating a seamless mode toggle in your web applications."
---

Dark mode and light mode have become essential features in modern web design. They enhance user experience and reduce eye strain. In this tutorial, we'll show you how to implement a dark mode and light mode switch in JavaScript in just 10 minutes.

### Prerequisites

Before we dive in, ensure you have:

- Basic knowledge of HTML, CSS, and JavaScript
- A code editor such as Visual Studio Code or Sublime Text

### Step 1: HTML Markup

Start by creating the HTML structure for our dark mode/light mode switch. We'll use a simple checkbox to toggle between the two modes.

```html
<div class="switch">
  <input type="checkbox" id="toggle" class="toggle" />
  <label for="toggle"></label>
</div>
```

Here, we have a div with a class of switch that holds our toggle button. The input element is a checkbox with an ID of toggle, and the label element associates with this checkbox via the for attribute.

### Step 2: CSS Styling

Next, we style the switch button with CSS to make it look like a toggle switch.

```css
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch label {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: background-color 0.2s ease-in-out;
}

.switch label::before {
  content: "";
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #fff;
  top: 4px;
  left: 4px;
  transition: transform 0.2s ease-in-out;
}

.switch input:checked + label {
  background-color: #2196f3;
}

.switch input:checked + label::before {
  transform: translateX(26px);
}
```

In this CSS, the switch class sets up the size and positioning of our switch. We make the checkbox invisible and style the label to look like a switch. The ::before pseudo-element creates the sliding effect, and the input:checked + label selectors handle the switch's visual changes when toggled.

### Step 3: JavaScript Logic

Now, add JavaScript to handle the theme switching.

```javascript
const toggleSwitch = document.querySelector(".toggle");
const body = document.querySelector("body");

function switchTheme(e) {
  if (e.target.checked) {
    body.classList.replace("light", "dark");
  } else {
    body.classList.replace("dark", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
```

We select the toggle switch and body elements. The switchTheme function checks if the switch is on or off and updates the body class accordingly. We then attach an event listener to the toggle switch to call switchTheme when the switch is changed.

### Step 4: Testing

Open your HTML file in a web browser to test the dark/light mode switch. Toggle the switch to see the background color change between light and dark modes.

### Conclusion

In this quick tutorial, we built a dark mode/light mode switch using HTML, CSS, and JavaScript. This feature improves user experience and reduces eye strain, making your web applications more user-friendly.
