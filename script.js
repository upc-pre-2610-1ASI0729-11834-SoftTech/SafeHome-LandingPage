// ======== CARRUSEL LEARN MORE ========

let current = 0;
let moreTitle;
const pages = [
    "about",
    "aboutTheProduct",
    "aboutTheTeam"
];

const titleKeys = [
    "learn_more",
    "about_product",
    "about_team"
];

function mostrarVista() {

    pages.forEach(id => {
        document.getElementById(id).classList.add("hidden");
    });

    document.getElementById(pages[current]).classList.remove("hidden");
      // Cambiar el título
    moreTitle.setAttribute("data-i18n", titleKeys[current]);

    // Volver a traducir según el idioma actual
    const lang = document.getElementById("lang-toggle").getAttribute("data-lang");

    if (lang === "en") {
        import("./assets/locale/en.js").then(m => m.setLang());
    } else {
        import("./assets/locale/es.js").then(m => m.setLang());
    }
}

document.addEventListener("click", (e) => {
    const target = e.target;

    // Menú
    if (target.closest(".nav-toggle")) {
        const navLinks = document.querySelector(".nav-links");
        navLinks?.classList.toggle("open");
        return;
    }

    // Idioma
    if (target.id === "lang-toggle") {
        const btn = target;
        let lang = btn.getAttribute("data-lang");

        if (lang === "en") {

            btn.textContent = "ES";
            btn.setAttribute("data-lang", "es");
            btn.classList.add("active");

            import("./assets/locale/es.js").then((m) => {
                try { m.setLang && m.setLang(); }  
                catch (e) { console.error(e); }
            });

        } else {

            btn.textContent = "EN";
            btn.setAttribute("data-lang", "en");
            btn.classList.add("active");

            import("./assets/locale/en.js").then((m) => {
                try { m.setLang && m.setLang(); }
                catch (e) { console.error(e); }
            });

        }

        return;
    }
});

window.addEventListener("DOMContentLoaded", () => {

    // ===== Idioma =====

    const langBtn = document.getElementById("lang-toggle");

    if (langBtn) {

        langBtn.textContent = "EN";
        langBtn.setAttribute("data-lang", "en");
        langBtn.classList.add("active");

        import("./assets/locale/en.js").then((m) => {
            try { m.setLang && m.setLang(); }
            catch (e) { console.error(e); }
        });
    }

    // ===== Carrusel =====
    moreTitle = document.getElementById("moreTitle");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const teamCard = document.getElementById("teamCard");
    const productCard = document.getElementById("productCard");

    mostrarVista();

    nextBtn.addEventListener("click", () => {

        current++;

        if (current >= pages.length)
            current = 0;

        mostrarVista();

    });

    prevBtn.addEventListener("click", () => {

        current--;

        if (current < 0)
            current = pages.length - 1;

        mostrarVista();

    });

    teamCard.addEventListener("click", () => {

        current = 2;
        mostrarVista();

    });

    productCard.addEventListener("click", () => {

        current = 1;
        mostrarVista();

    });

});