function addFact() {
  const facts = [
    "This site was made with HTML, CSS, and JavaScript!",
    "The first website was published in 1991.",
    "HTML stands for HyperText Markup Language.",
    "CSS is what makes websites look pretty.",
    "JavaScript can make websites interactive.",
    "You are viewing this page from GitHub Pages!",
    "Computers only understand 1s and 0s — wild, right?",
    "The internet and the web are *not* the same thing.",
    "Web developers use something called a 'DOM' to change pages."
  ];
  const randomIndex = Math.floor(Math.random() * facts.length);
  const fact = facts[randomIndex];
  const container = document.getElementById("factContainer");
  const p = document.createElement("p");
  p.textContent = "This site was made with HTML, CSS, and JavaScript!";
  p.textContent = fact;
  container.appendChild(p);
}
