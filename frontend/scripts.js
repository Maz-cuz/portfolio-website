// PORTFOLIO JAVASCRIPT

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Create navbar buttons dynamically
const nav = document.createElement("nav");
nav.style.textAlign = "center";
nav.style.marginBottom = "20px";

const buttons = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" }
];

buttons.forEach(btn => {
  const button = document.createElement("button");
  button.innerText = btn.name;

  button.style.margin = "5px";
  button.style.padding = "10px 15px";
  button.style.border = "none";
  button.style.borderRadius = "6px";
  button.style.cursor = "pointer";
  button.style.backgroundColor = "#38bdf8";
  button.style.color = "#000";
  button.style.fontWeight = "bold";

  button.addEventListener("click", () => {
    scrollToSection(btn.id);
  });

  nav.appendChild(button);
});

// Add navbar to page
document.body.prepend(nav);

// ===============================
// PROJECT BUTTON ACTIONS
// ===============================

// Add "View GitHub" buttons automatically to projects
const projects = document.querySelectorAll(".project");

projects.forEach((project, index) => {
  const btn = document.createElement("button");
  btn.innerText = "View Project";
  btn.style.marginTop = "10px";
  btn.style.padding = "8px 12px";
  btn.style.border = "none";
  btn.style.borderRadius = "6px";
  btn.style.cursor = "pointer";
  btn.style.backgroundColor = "#22c55e";
  btn.style.color = "white";

  btn.addEventListener("click", () => {
    alert("Open GitHub or Live Demo for Project " + (index + 1));
  });

  project.appendChild(btn);
});

// ===============================
// CONTACT BUTTON ACTION
// ===============================

// Copy email to clipboard
function copyEmail() {
  const email = "mcndluvo14@gmail.com";
  navigator.clipboard.writeText(email);
  alert("Email copied to clipboard!");
}

// Create contact button
const contactBtn = document.createElement("button");
contactBtn.innerText = "Copy Email";
contactBtn.style.display = "block";
contactBtn.style.margin = "10px auto";
contactBtn.style.padding = "10px 15px";
contactBtn.style.border = "none";
contactBtn.style.borderRadius = "6px";
contactBtn.style.cursor = "pointer";
contactBtn.style.backgroundColor = "#f59e0b";

contactBtn.addEventListener("click", copyEmail);

// Add it at bottom
document.body.appendChild(contactBtn);

// ===============================
// DARK MODE TOGGLE (BONUS)
// ===============================

const toggleBtn = document.createElement("button");
toggleBtn.innerText = "Toggle Theme";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "10px";
toggleBtn.style.right = "10px";
toggleBtn.style.padding = "10px";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "6px";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.backgroundColor = "#fff";
toggleBtn.style.color = "#000";

document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});