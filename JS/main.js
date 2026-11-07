/* JAVA SCRIPT INTERACTIVE SCRIPTS */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Highlight Active Navigation Link Based on Current URL
    const currentPath = window.location.pathname.split("/").pop() || "index.html"; // Default to index.html if no path
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // 2. Interactive Form Submission with Validation (comments.html)
    const feedbackForm = document.getElementById('feedbackForm');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission behavior
            
            // Simple validation
            const name = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const rating = document.getElementById('rating').value;
            const comments = document.getElementById('comments').value.trim();

            if (!name || !email || !rating || !comments) {
                alert("Please fill in all fields before submitting.");
                return;
            }

            // Submission Confirmation
            alert(`Thank you for your feedback, ${name}! Your rating and comments have been submitted successfully.`);

            // Clear the form after submission
            feedbackForm.reset();
        });
    }

    // 3. Dynamic Scroll-Triggered Animations
    const animatedCards = document.querySelectorAll('.project-card, .skill-item');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target); // Stop observing once the animation is triggered
                }
            });
        }, {threshold: 0.1});

        animatedCards.forEach(card => {
            card.style.opacity = 0; // Initial state
            card.style.transform = 'translateY(20px)'; // Initial state
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'; // Smooth transition
            cardObserver.observe(card);
        });
    }
});
