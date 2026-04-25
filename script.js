document.addEventListener("click", (e) => {
  const target = e.target;


  if (target.closest(".nav-toggle")) {
    const navLinks = document.querySelector(".nav-links");
    navLinks?.classList.toggle("open");
    return;
  }


  if (target.id === "lang-toggle") {
    const btn = target;
    let lang = btn.getAttribute("data-lang");


    // Alternar idioma
    if (lang === "en") {
      btn.textContent = "ES";
      btn.setAttribute("data-lang", "es");
      btn.classList.add("active");


      import("./assets/locale/es.js").then((m) => {
        try { m.setLang && m.setLang(); }
        catch (e) { console.error("Error ES:", e); }
      });


    } else {
      btn.textContent = "EN";
      btn.setAttribute("data-lang", "en");
      btn.classList.add("active");


      import("./assets/locale/en.js").then((m) => {
        try { m.setLang && m.setLang(); }
        catch (e) { console.error("Error EN:", e); }
      });
    }


    return;
  }
});


window.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang-toggle");


  if (langBtn) {
    // Puedes cambiar a "es" si quieres español por defecto
    langBtn.textContent = "EN";
    langBtn.setAttribute("data-lang", "en");
    langBtn.classList.add("active");


    import("./assets/locale/en.js").then((m) => {
      try { m.setLang && m.setLang(); }
      catch (e) { console.error("Error default EN:", e); }
    });
  }
});
