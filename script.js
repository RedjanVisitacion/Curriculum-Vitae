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

    // Function to open the image in fullscreen
    function maximizeImage(src) {
        let modal = document.getElementById("imageModal");

        if (!modal) {
            // Create modal if it doesn't exist
            modal = document.createElement("div");
            modal.id = "imageModal";
            modal.className = "modal";
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img id="modalImage" src="" alt="Certificate">
                </div>
            `;
            document.body.appendChild(modal);
        }

        // Set image source and show modal
        document.getElementById("modalImage").src = src;
        modal.style.display = "flex";

        // Close modal when clicking outside the image or on close button
        modal.onclick = function(event) {
            if (event.target === modal || event.target.classList.contains("close-modal")) {
                modal.style.display = "none";
            }
        };
    }

    // Attach click event to all certificate images
    document.querySelectorAll(".certificate-container img").forEach(function (img) {
        img.addEventListener("click", function () {
            maximizeImage(this.src);
        });
    });

    // Expose functions globally
    window.toggleSection = toggleSection;
    window.closeSection = closeSection;
    window.nextResume = nextResume;
});
