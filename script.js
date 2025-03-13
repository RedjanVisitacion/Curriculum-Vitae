document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript file loaded successfully!");
  
    function nextResume() {
      window.location.href = "silver.html";
    }
  
    // Toggle certificate section (for certificate containers)
    function toggleSection(sectionId) {
      var section = document.getElementById(sectionId);
      if (!section) return; // Prevent errors if the section doesn't exist
  
      var isHidden = section.classList.contains("hidden");
  
      // Hide all other certificate containers
      document.querySelectorAll(".certificate-container").forEach(function (sec) {
        sec.classList.add("hidden");
      });
  
      // Toggle the clicked section
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
  
    // Prevent certificate container dropdown from closing when clicking inside
    document.querySelectorAll(".certificate-container").forEach(function (section) {
      section.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    });
  
    // Close certificate dropdown if user clicks outside
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
  
        modal.addEventListener("click", function (event) {
          if (event.target === modal || event.target.classList.contains("close-modal")) {
            modal.style.display = "none";
          }
        });
      }
  
      document.getElementById("modalImage").src = src;
      modal.style.display = "flex";
    }
  
    // Attach click event to all certificate images
    document.querySelectorAll(".certificate-container img").forEach(function (img) {
      img.addEventListener("click", function () {
        maximizeImage(this.src);
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Toggle dropdown for a given dropdown ID
        function toggleDropdown(dropdownId) {
          var dropdown = document.getElementById(dropdownId);
          if (dropdown) {
            dropdown.classList.toggle("hidden");
          }
        }
        // Expose the function globally so your HTML button can call it
        window.toggleDropdown = toggleDropdown;
      });
      
  
      function toggleDropdown(id) {
        var dropdown = document.getElementById(id);
        var button = document.querySelector(`[onclick="toggleDropdown('${id}')"]`);
    
        // Close other dropdowns if a new one is clicked
        document.querySelectorAll(".dropdown-content").forEach((content) => {
            if (content.id !== id) {
                content.classList.remove("show");
            }
        });
    
        // Toggle current dropdown
        dropdown.classList.toggle("show");
    
        // Rotate icon only for the active button
        document.querySelectorAll(".dropdown-btn").forEach((btn) => {
            btn.classList.remove("active");
        });
    
        if (dropdown.classList.contains("show")) {
            button.classList.add("active");
        }
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown-container")) {
            document.querySelectorAll(".dropdown-content").forEach((content) => {
                content.classList.remove("show");
            });
            document.querySelectorAll(".dropdown-btn").forEach((btn) => {
                btn.classList.remove("active");
            });
        }
    });
    
  
    // Expose functions globally so they can be called from HTML attributes
    window.toggleSection = toggleSection;
    window.closeSection = closeSection;
    window.nextResume = nextResume;
    window.toggleDropdown = toggleDropdown;
  });
  