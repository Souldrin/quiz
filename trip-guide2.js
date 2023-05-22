// Saglabā to checkboxu JS mainīgājā
const toggleTheme = document.getElementById("toggle-theme");
const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
  if (toggleTheme.checked) {
    html.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    html.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
}

const localStorageTheme = localStorage.getItem("theme");

if (localStorageTheme == "light" || !localStorageTheme) {
  html.dataset.theme = "light";
} else {
  html.dataset.theme = "dark";
  toggleTheme.checked = true;
}



for(let i=1; i <= 3; i++){
  const visasAtbildes = document.getElementsByName("1");
console.log(visasAtbildes);

visasAtbildes.forEach((atbilde) => {
  atbilde.addEventListener("click", checkHandler)
});
function checkHandler() {
  visasAtbildes.forEach(atbilde => {
    if(atbilde.checked == true) {
      if(atbilde.value == "Indonēzija"){
        atbilde.parentNode.style.backgroundColor = "#00B16E";
      } else {
        atbilde.parentNode.style.backgroundColor = "red";
      }
    } else {
      atbilde.parentNode.style.backgroundColor = "var(--secondary-color)";
    }
  })
  }
}

for(let i=1; i <= 3; i++){
  const visasAtbildes = document.getElementsByName("2");
console.log(visasAtbildes);

visasAtbildes.forEach((atbilde) => {
  atbilde.addEventListener("click", checkHandler)
});
function checkHandler() {
  visasAtbildes.forEach(atbilde => {
    if(atbilde.checked == true) {
      if(atbilde.value == "Austrālija"){
        atbilde.parentNode.style.backgroundColor = "#00B16E";
      } else {
        atbilde.parentNode.style.backgroundColor = "red";
      }
    } else {
      atbilde.parentNode.style.backgroundColor = "var(--secondary-color)";
    }
  })
  }
}

for(let i=1; i <= 3; i++){
  const visasAtbildes = document.getElementsByName("3");
console.log(visasAtbildes);

visasAtbildes.forEach((atbilde) => {
  atbilde.addEventListener("click", checkHandler)
});
function checkHandler() {
  visasAtbildes.forEach(atbilde => {
    if(atbilde.checked == true) {
      if(atbilde.value == "Liepāja"){
        atbilde.parentNode.style.backgroundColor = "#00B16E";
      } else {
        atbilde.parentNode.style.backgroundColor = "red";
      }
    } else {
      atbilde.parentNode.style.backgroundColor = "var(--secondary-color)";
    }
  })
  }
}