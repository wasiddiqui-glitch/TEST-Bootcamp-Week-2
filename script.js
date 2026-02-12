let fancy = false;

function changeTitle() {
    if(fancy === false) {
        document.getElementById("title").textContent = "🍪 Cookies & Cream Brownies 🍫";
        fancy = true;
    }
    else{
        document.getElementById("title").textContent = "Cookies and Cream Brownies";
        fancy = false;
    }
}

const saveBtn = document.getElementById("saveNoteBtn");
saveBtn.onclick = function () {
    const note = document.getElementById("noteInput").value;
    document.getElementById("noteOutput").textContent = "Saved note: " + note;
};

let metric = false;

document.getElementById("unitBtn").onclick = function () {
  if (metric === false) {
    document.getElementById("sugar").textContent = "300 g white sugar";
    document.getElementById("flour").textContent = "95 g all-purpose flour";
    document.getElementById("cocoa").textContent = "45 g cocoa powder";
    document.getElementById("salt").textContent = "3 g salt";
    document.getElementById("bakingPowder").textContent = "1 g baking powder";
    document.getElementById("butter").textContent = "170 g unsalted butter, melted";
    document.getElementById("eggs").textContent = "3 large eggs";
    document.getElementById("vanilla").textContent = "5 ml vanilla extract";
    document.getElementById("cookies").textContent = "32 chocolate sandwich cookies, divided";
    document.getElementById("whipped").textContent = "227 g whipped topping";

    this.textContent = "Switch to FREEDOM 🇺🇸";
    metric = true;
  } 
  else {
    document.getElementById("sugar").textContent = "1 ½ cups white sugar";
    document.getElementById("flour").textContent = "¾ cup all-purpose flour";
    document.getElementById("cocoa").textContent = "½ cup unsweetened cocoa powder";
    document.getElementById("salt").textContent = "½ teaspoon salt";
    document.getElementById("bakingPowder").textContent = "¼ teaspoon baking powder";
    document.getElementById("butter").textContent = "¾ cup unsalted butter, melted";
    document.getElementById("eggs").textContent = "3 large eggs";
    document.getElementById("vanilla").textContent = "1 teaspoon vanilla extract";
    document.getElementById("cookies").textContent = "32 chocolate sandwich cookies, divided";
    document.getElementById("whipped").textContent = "8 oz whipped topping, thawed";

    this.textContent = "Switch to Metric";
    metric = false;
  }
};
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("darkBtn");
  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
}
