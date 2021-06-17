document.addEventListener("DOMContentLoaded", onReady);

const months = Array.from({ length: 12 }, (_, i) =>
  new Date(0, i)
    .toLocaleDateString("pt-BR", { month: "long" })
    .split("")
    .map((char, charI) => (charI === 0 ? char.toUpperCase() : char))
    .join("")
);

async function onReady() {
  const mainElem = document.querySelector("body main");
  const logs = await fetch("./data.json").then((res) => res.json());

  logs.forEach((log) => {
    const date = log.date.split("-").map((str) => +str);
    const logElem = createElement(
      `${date[0]} de ${months[date[1]]} de ${date[2]}`,
      log.content
    );

    mainElem.innerHTML = mainElem.innerHTML + logElem;
  });
}

/**
 * @param {string} date
 * @param {string} content
 * @returns
 */
function createElement(date, content) {
  return `
  <section class="elevation-1">
    <strong class="title-heavy">${date}</strong>
    <p class="body-light">${content.replaceAll("\n", "<br />")}</p>
  </section>
  `;
}
