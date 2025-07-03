// Dark Mode Toggle
const darkToggle = document.getElementById("darkToggle");
darkToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Load saved dark mode on page load
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
});

// Scroll Progress Bar
window.onscroll = function () {
  let scrollBar = document.getElementById("scrollBar");
  if (scrollBar) {
    let winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    let height =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    scrollBar.style.width = scrolled + "%";
  }
};

// Course Modal Logic
const modal = document.getElementById("courseModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalSyllabus = document.getElementById("modalSyllabus");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".view-more").forEach((btn) => {
  btn.addEventListener("click", () => {
    modalTitle.textContent = btn.dataset.title;
    modalDescription.textContent = btn.dataset.description;
    modalSyllabus.textContent = btn.dataset.syllabus;
    modal.style.display = "block";
  });
});

closeModal?.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Course Filter
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    document.querySelectorAll(".course-card").forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = title.includes(value) ? "block" : "none";
    });
  });
}

// Newsletter Form (optional success alert)
const newsletterForm = document.getElementById("newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for subscribing! 🎉");
    newsletterForm.reset();
  });
}
