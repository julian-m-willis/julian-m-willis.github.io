// JavaScript for interactive elements on the website

document.addEventListener("DOMContentLoaded", function() {
    // Tab functionality
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove("active"));

            // Add active class to the clicked tab
            this.classList.add("active");
            // Show the corresponding tab content
            const target = this.getAttribute("data-target");
            document.querySelector(target).classList.add("active");
        });
    });

    // Initialize the first tab as active
    if (tabs.length > 0) {
        tabs[0].click();
    }
});