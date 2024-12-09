// Detect the current domain
const domain = window.location.hostname;

if (domain.includes("youtube.com")) {
  // Inject specific CSS for YouTube
  injectCSS("youtube.css");
} else {
  // Apply JavaScript-based styling for default pages
  document.body.style.fontSize = "14px";
  document.body.style.fontFamily = "Courier New, monospace";

  // Add retro effects to images
  document.querySelectorAll("img").forEach(img => {
    img.style.filter = "sepia(50%)";
  });

  // Add retro table styles
  document.querySelectorAll("table").forEach(table => {
    table.style.border = "1px solid black";
    table.style.borderCollapse = "collapse";
    table.querySelectorAll("td, th").forEach(cell => {
      cell.style.border = "1px solid black";
      cell.style.padding = "5px";
    });
  });

  // Add marquee if the website has a header
  const header = document.querySelector("h1") || document.querySelector("header");
  if (header) {
    const marquee = document.createElement("marquee");
    marquee.textContent = header.textContent;
    header.parentElement.replaceChild(marquee, header);
  }
}

// Helper function to inject a CSS file
function injectCSS(file) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = chrome.runtime.getURL(file);
  document.head.appendChild(link);
}
