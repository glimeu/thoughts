document.addEventListener("DOMContentLoaded", onReady);

function onReady() {
  document.getElementById("new-though").onsubmit = (event) => {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const content = document.getElementById("content").value;

    alert("Isto foi desativado");

    /* fetch("https://thoughts-5g.herokuapp.com/thoughts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, content }),
    }); */
  };
}
