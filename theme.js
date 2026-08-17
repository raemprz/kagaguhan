/* theme.js - VenPCS Dark Mode Controller
   Runs on every page. Reads/writes localStorage key "venpcs-theme".
   Applies data-theme="dark" on <html> for dark mode.
*/

(function () {
    // Apply saved theme immediately (before paint) to avoid flash
    const saved = localStorage.getItem("venpcs-theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);

    document.addEventListener("DOMContentLoaded", function () {
        const btn = document.getElementById("themeToggle");
        if (!btn) return;

        function updateLabel() {
            const current = document.documentElement.getAttribute("data-theme");
            btn.textContent = current === "dark" ? "☀ Light" : "🌙 Dark";
        }

        updateLabel();

        btn.addEventListener("click", function () {
            const current = document.documentElement.getAttribute("data-theme");
            const next = current === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", next);
            localStorage.setItem("venpcs-theme", next);
            updateLabel();
        });
    });
})();
