// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (href === 'index.html' && currentPath === '')) {
      link.classList.add("active");
    }
  });
});
