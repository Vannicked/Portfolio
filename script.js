document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".dropdown-toggle");
    const dropdownContent = document.querySelector(".dropdown-content");
  
    toggleButton.addEventListener("click", () => {
      const isVisible = dropdownContent.style.display === "block";
      dropdownContent.style.display = isVisible ? "none" : "block";
    });
  });
  