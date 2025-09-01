// Load shared navbar
fetch("/site-elements/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;

    // Highlight active link
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const current = pathParts[0] || "home"; // root → "home"

    document.querySelectorAll(".navbar a").forEach(link => {
      if (current === "home" && link.getAttribute("href") === "/") {
        link.classList.add("active");
      } else if (link.getAttribute("href").includes("/" + current + "/")) {
        link.classList.add("active");
      }
    });
  });

