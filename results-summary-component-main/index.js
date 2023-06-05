async function getData() {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
}

window.addEventListener("load", async function () {
  const summaryWrapper = document.getElementById("summary-wrapper");
  try {
    const data = await getData();
    for (const skill of data) {
      // Skill-wrapper element
      const skillWrapper = document.createElement("div");
      skillWrapper.classList.add("skill-wrapper");

      // Individual-skill element
      const individualWrapper = document.createElement("div");
      individualWrapper.classList.add("individual-skill");

      const skillText = document.createElement("h5");
      switch (skill.category) {
        case "Reaction":
          skillText.style.color = 'var(--Light-red)';
          break;
        case "Memory":
          skillText.style.color = 'var(--Orangey-yellow)';
          break;
        case "Verbal":
          skillText.style.color = 'var(--Green-teal)';
          break;
        case "Visual":
          skillText.style.color = 'var( --Cobalt-blue)';
          break;
        default:
          skillText.style.color = "black";
      }
      skillText.innerHTML = skill.category;

      const skillScore = document.createElement("h5");
      skillScore.innerHTML = `${skill.score} / `;

      const totalScore = document.createElement("span");
      totalScore.innerHTML = "100";

      const img = document.createElement("img");
      img.src = skill.icon;
      img.alt = skill.category;

      // add element to DOM
      individualWrapper.appendChild(img);
      individualWrapper.appendChild(skillText);
      skillScore.appendChild(totalScore);
      skillWrapper.appendChild(individualWrapper);
      skillWrapper.appendChild(skillScore);
      summaryWrapper.appendChild(skillWrapper);
    }
  } catch (err) {
    console.log(err);
  }
});
