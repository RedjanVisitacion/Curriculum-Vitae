document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript file loaded successfully!");

    function nextResume() {
        window.location.href = "silver.html";
    }

    // Toggle certificate section
    function toggleSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (!section) return; // Prevent errors if the section doesn't exist

        // Check if the clicked section is already visible
        var isHidden = section.classList.contains("hidden");

        // Hide all other sections
        document.querySelectorAll(".certificate-container").forEach(function (sec) {
            sec.classList.add("hidden");
        });

        // Show the clicked section if it was hidden
        if (isHidden) {
            section.classList.remove("hidden");
        }
    }

    // Function to close a specific certificate section
    function closeSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.classList.add("hidden");
        }
    }

    // Prevent dropdown from closing when clicking inside
    document.querySelectorAll(".certificate-container").forEach(function (section) {
        section.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent click from closing dropdown
        });
    });

    // Close dropdown if the user clicks outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".certificate-container, .toggle-btn")) {
            document.querySelectorAll(".certificate-container").forEach(function (section) {
                section.classList.add("hidden");
            });
        }
    });

    // Expose functions globally
    window.toggleSection = toggleSection;
    window.closeSection = closeSection;
    window.nextResume = nextResume;
});
