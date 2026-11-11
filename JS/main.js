/* ==========================================================================
   IM22503 Multimedia Web Programming - Main Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. HIGHLIGHT ACTIVE NAV LINK
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const allNavLinks = document.querySelectorAll('.nav-links a');

    allNavLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. DARK / LIGHT MODE TOGGLE
    const themeToggleBtn = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme on page load
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggleBtn) themeToggleBtn.textContent = '☀️ Light';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            themeToggleBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // 3. MOBILE HAMBURGER MENU TOGGLE
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Stop click event propagation
            hamburgerBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close hamburger when a link inside is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 4. COMMENTS FORM VALIDATION (comments.html)
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('fullName').value.trim();
            const rating = document.getElementById('rating').value;
            alert(`Thank you for your feedback, ${name}!\n\nYour ${rating}-star rating has been submitted.`);
            feedbackForm.reset();
        });
    }
});
