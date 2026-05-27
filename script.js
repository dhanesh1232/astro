(function () {
  "use strict";

  // ─── FONT FAMILIES ───────────────────────────────────────────────
  var fonts = [
    { name: "Cinzel", value: "'Cinzel', serif", google: "Cinzel:wght@400;600;700;900" },
    { name: "Playfair Display", value: "'Playfair Display', serif", google: "Playfair+Display:wght@400;600;700;900" },
    { name: "Cormorant Garamond", value: "'Cormorant Garamond', serif", google: "Cormorant+Garamond:wght@400;600;700" },
    { name: "EB Garamond", value: "'EB Garamond', serif", google: "EB+Garamond:wght@400;600;700" },
    { name: "Libre Baskerville", value: "'Libre Baskerville', serif", google: "Libre+Baskerville:wght@400;700" },
    { name: "DM Serif Display", value: "'DM Serif Display', serif", google: "DM+Serif+Display" },
    { name: "Merriweather", value: "'Merriweather', serif", google: "Merriweather:wght@400;700;900" },
    { name: "Poppins", value: "'Poppins', sans-serif", google: "Poppins:wght@400;600;700;900" },
    { name: "Montserrat", value: "'Montserrat', sans-serif", google: "Montserrat:wght@400;600;700;900" },
    { name: "Raleway", value: "'Raleway', sans-serif", google: "Raleway:wght@400;600;700;900" },
  ];

  var bodyFonts = [
    { name: "Lato", value: "'Lato', sans-serif", google: "Lato:wght@300;400;700" },
    { name: "Open Sans", value: "'Open Sans', sans-serif", google: "Open+Sans:wght@300;400;600;700" },
    { name: "Inter", value: "'Inter', sans-serif", google: "Inter:wght@300;400;600;700" },
    { name: "Nunito", value: "'Nunito', sans-serif", google: "Nunito:wght@300;400;600;700" },
    { name: "Source Sans 3", value: "'Source Sans 3', sans-serif", google: "Source+Sans+3:wght@300;400;600;700" },
  ];

  // ─── LOAD GOOGLE FONT ────────────────────────────────────────────
  function loadFont(googleParam) {
    var id = "gf-" + googleParam.replace(/[^a-z0-9]/gi, "");
    if (document.getElementById(id)) return;
    var link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=" + googleParam + "&display=swap";
    document.head.appendChild(link);
  }

  // ─── FONT SELECTOR ───────────────────────────────────────────────
  function initFontSelector() {
    var headingSelect = document.getElementById("font-heading");
    var bodySelect = document.getElementById("font-body");

    if (headingSelect) {
      fonts.forEach(function (f) {
        var opt = document.createElement("option");
        opt.value = f.value;
        opt.textContent = f.name;
        opt.setAttribute("data-google", f.google);
        headingSelect.appendChild(opt);
      });

      var savedHeading = localStorage.getItem("jl-font-heading");
      if (savedHeading) {
        headingSelect.value = savedHeading;
        applyHeadingFont(savedHeading);
      }

      headingSelect.addEventListener("change", function () {
        var val = this.value;
        var opt = this.options[this.selectedIndex];
        var gf = opt.getAttribute("data-google");
        if (gf) loadFont(gf);
        applyHeadingFont(val);
        localStorage.setItem("jl-font-heading", val);
      });
    }

    if (bodySelect) {
      bodyFonts.forEach(function (f) {
        var opt = document.createElement("option");
        opt.value = f.value;
        opt.textContent = f.name;
        opt.setAttribute("data-google", f.google);
        bodySelect.appendChild(opt);
      });

      var savedBody = localStorage.getItem("jl-font-body");
      if (savedBody) {
        bodySelect.value = savedBody;
        applyBodyFont(savedBody);
      }

      bodySelect.addEventListener("change", function () {
        var val = this.value;
        var opt = this.options[this.selectedIndex];
        var gf = opt.getAttribute("data-google");
        if (gf) loadFont(gf);
        applyBodyFont(val);
        localStorage.setItem("jl-font-body", val);
      });
    }
  }

  function applyHeadingFont(fontValue) {
    document.documentElement.style.setProperty("--font-heading", fontValue);
  }

  function applyBodyFont(fontValue) {
    document.documentElement.style.setProperty("--font-body", fontValue);
  }

  // ─── HERO ENTRANCE ───────────────────────────────────────────────
  function initHeroEntrance() {
    var heroEls = document.querySelectorAll(".hero-enter");
    heroEls.forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add("show");
      }, 200 + i * 150);
    });
  }

  // ─── SCROLL REVEAL ───────────────────────────────────────────────
  function initScrollReveal() {
    var els = document.querySelectorAll(".reveal");
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(function (el) {
      obs.observe(el);
    });
  }

  // ─── ANIMATED COUNTER ────────────────────────────────────────────
  function initCounter() {
    function animateCounter(el, target, suffix) {
      var duration = 1800;
      var startTime = null;
      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    var statsObserved = false;
    var statsObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting && !statsObserved) {
            statsObserved = true;
            var nums = document.querySelectorAll(".stat-item .num");
            var data = [
              { val: 500, suf: "+" },
              { val: 15, suf: "+" },
              { val: 20, suf: "+" },
              { val: 98, suf: "%" },
            ];
            nums.forEach(function (n, i) {
              animateCounter(n, data[i].val, data[i].suf);
            });
            statsObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    var statsBar = document.querySelector(".stats-bar");
    if (statsBar) statsObs.observe(statsBar);
  }

  // ─── NAVBAR SCROLL + ACTIVE ──────────────────────────────────────
  function initNavbar() {
    var nav = document.getElementById("navbar");
    var secs = document.querySelectorAll("section[id]");
    var links = document.querySelectorAll(".nav-links a:not(.cta)");

    window.addEventListener(
      "scroll",
      function () {
        nav.classList.toggle("scrolled", window.scrollY > 20);
        var pos = window.scrollY + 140;
        secs.forEach(function (s) {
          if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) {
            links.forEach(function (l) {
              l.classList.toggle("active", l.getAttribute("href") === "#" + s.id);
            });
          }
        });
      },
      { passive: true }
    );
  }

  // ─── MOBILE MENU ─────────────────────────────────────────────────
  function initMobileMenu() {
    var btn = document.getElementById("menu-btn");
    var navEl = document.getElementById("nav-links");
    if (!btn || !navEl) return;

    btn.addEventListener("click", function () {
      var open = navEl.style.display === "flex";
      navEl.style.display = open ? "" : "flex";
      navEl.style.flexDirection = open ? "" : "column";
      navEl.style.position = open ? "" : "absolute";
      navEl.style.top = open ? "" : "100%";
      navEl.style.left = open ? "" : "0";
      navEl.style.right = open ? "" : "0";
      navEl.style.background = open ? "" : "var(--bg)";
      navEl.style.padding = open ? "" : "24px";
      navEl.style.borderBottom = open ? "" : "2px solid var(--primary)";
      navEl.style.zIndex = open ? "" : "99";
      if (open) navEl.removeAttribute("style");
    });
  }

  // ─── INIT ────────────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", function () {
    initFontSelector();
    initHeroEntrance();
    initScrollReveal();
    initCounter();
    initNavbar();
    initMobileMenu();
  });
})();
