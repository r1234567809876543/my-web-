function addFact() {
  const facts = [
    "dog is big",
    "dogs are better than cats",
    "dogs can fly",
    "dogs come from Mars",
  ];
  const randomIndex = Math.floor(Math.random() * facts.length);
  const fact = facts[randomIndex];
  const container = document.getElementById("factContainer");
  const p = document.createElement("p");
  p.innerHTML = "This site was made with HTML, CSS, and JavaScript!";
  container.appendChild(p);
}
