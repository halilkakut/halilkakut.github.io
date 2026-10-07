(function () {
    "use strict";

    var root = document.documentElement;

    // JS çalışıyorsa kaydırma animasyonlarını etkinleştir
    root.classList.add("js");

    // Mobil menü
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");

    function closeMenu() {
        if (!toggle || !nav) return;
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
    }

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            var open = nav.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") closeMenu();
        });
    }

    // Öğeler görünür olunca ortaya çıksın
    var revealItems = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        var revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealItems.forEach(function (item) { revealObserver.observe(item); });
    } else {
        revealItems.forEach(function (item) { item.classList.add("is-visible"); });
    }

    // Menüde hangi bölümdeysek onu vurgula
    var sections = document.querySelectorAll("main section[id]");
    var navLinks = document.querySelectorAll('.site-nav ul a[href^="#"]');

    if ("IntersectionObserver" in window && sections.length && navLinks.length) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                navLinks.forEach(function (link) {
                    var active = link.getAttribute("href") === "#" + entry.target.id;
                    link.classList.toggle("is-active", active);
                });
            });
        }, { rootMargin: "-45% 0px -50% 0px" });

        sections.forEach(function (section) { spy.observe(section); });
    }
})();
