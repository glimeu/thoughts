document.addEventListener("DOMContentLoaded", onReady);

async function onReady() {
  const mainElem = document.querySelector("body main");
  const { data: logs } = await fetch(
    "https://thoughts-5g.herokuapp.com/api/posts"
  ).then((res) => res.json());

  moment.locale("pt-BR");

  logs.reverse().forEach((log, index) => {
    const logElem = createElement(log.createdAt, log.content);

    mainElem.innerHTML = index === 0 ? logElem : mainElem.innerHTML + logElem;
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
    <strong class="title-heavy">
      ${moment(date).format("LL")}
      <span class="body-light">${moment(date).fromNow()}</span>
    </strong>
    <p class="body-light">${content.replaceAll("\n", "<br />")}</p>
  </section>
  `;
}
