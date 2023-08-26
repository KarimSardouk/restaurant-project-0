document.addEventListener('DOMContentLoaded', function () {
    // Get all testimonial containers
    const testimonialContainers = document.querySelectorAll('.testimonial-container');
    let currentIndex = 0;

    // Function to show the current testimonial
    function showTestimonial(index) {
        testimonialContainers.forEach((container, i) => {
            if (i === index) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    }

    // Function to switch to the next testimonial
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonialContainers.length;
        showTestimonial(currentIndex);
    }

    // Function to switch to the previous testimonial
    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonialContainers.length) % testimonialContainers.length;
        showTestimonial(currentIndex);
    }

    // Set an interval to automatically switch testimonials
    setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds

    // Add event listeners for next and previous buttons (if you have them)
    const nextButton = document.getElementById('nextButton'); // Change 'nextButton' to your button's actual ID
    const prevButton = document.getElementById('prevButton'); // Change 'prevButton' to your button's actual ID

    if (nextButton && prevButton) {
        nextButton.addEventListener('click', nextTestimonial);
        prevButton.addEventListener('click', prevTestimonial);
    }
});
