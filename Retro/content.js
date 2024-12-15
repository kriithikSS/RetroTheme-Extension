(function () {
  'use strict';

  // Function to force dark mode for chatgpt.com
  function forceDarkMode() {
      document.querySelector('html').classList.add('dark');
      localStorage.setItem('theme', 'dark');
  }

  // Helper function to inject a CSS file for YouTube
  function injectCSS(file) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = chrome.runtime.getURL(file);
      document.head.appendChild(link);
  }

  // Apply retro styles to other websites
  function applyRetroStyles() {
      // Apply retro font and font size
      document.body.style.fontSize = "14px";
      document.body.style.fontFamily = "Courier New, monospace";

      // Apply retro effects to images
      document.querySelectorAll("img").forEach(img => {
          img.style.filter = "sepia(50%)";
      });

      // Apply retro styles to tables
      document.querySelectorAll("table").forEach(table => {
          table.style.border = "1px solid black";
          table.style.borderCollapse = "collapse";
          table.querySelectorAll("td, th").forEach(cell => {
              cell.style.border = "1px solid black";
              cell.style.padding = "5px";
          });
      });

      // Add marquee for header
      const header = document.querySelector("h1") || document.querySelector("header");
      if (header) {
          const marquee = document.createElement("marquee");
          marquee.textContent = header.textContent;
          header.parentElement.replaceChild(marquee, header);
      }
  }

  // Detect domain and apply relevant styles
  const domain = window.location.hostname;

  if (domain === "chatgpt.com") {
      // Apply dark mode only for chatgpt.com with retro styling
      forceDarkMode();

      // Add retro CSS styles for ChatGPT
      const style = document.createElement('style');
      style.textContent = `
          body, .dark, .dark .bg-white, .dark .bg-gray-50, .dark .bg-gray-100 {
              background-color: #000 !important;
              color: #0f0 !important;
              font-family: 'Courier New', Courier, monospace !important;
          }

          .dark .border-gray-100, .dark .border-gray-200 {
              border-color: #0f0 !important;
          }

          button, .dark button {
              background-color: #000 !important;
              color: #0f0 !important;
              border: 1px solid #0f0 !important;
              border-radius: 4px !important;
              transition: all 0.3s ease;
          }

          button:hover, .dark button:hover {
              background-color: #0f0 !important;
              color: #000 !important;
              box-shadow: 0 0 10px rgba(0, 255, 0, 0.7), inset 0 0 5px rgba(0, 0, 0, 0.5);
              text-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
          }

          input, textarea, .dark input, .dark textarea {
              background-color: #000 !important;
              color: #0f0 !important;
              border: 1px solid #0f0 !important;
              border-radius: 4px !important;
          }

          a:hover, .dark a:hover {
              color: #ff0 !important;
              text-shadow: 0 0 5px #ff0;
          }

          .text-base, .markdown, .dark .text-base, .dark .markdown {
              color: #0f0 !important;
              text-shadow: 0 0 5px #0f0;
          }

          img {
              filter: sepia(40%) hue-rotate(20deg) saturate(120%) contrast(120%) !important;
              border: 1px solid #9f9 !important;
              box-shadow: 0 0 5px #9f9 !important;
          }

          svg {
              fill: #0f0 !important;
              color: #0f0 !important;
          }

          body::after {
              content: "";
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background: repeating-linear-gradient(
                  0deg,
                  rgba(0, 255, 0, 0.03),
                  rgba(0, 255, 0, 0.03) 1px,
                  transparent 1px,
                  transparent 2px
              );
              pointer-events: none;
              z-index: 9999;
          }

          .dark .text-gray-400, .dark .text-gray-500, .dark .text-gray-600, .dark .text-gray-700 {
              color: #0f0 !important;
          }
      `;
      document.head.appendChild(style);

  } else if (domain.includes("youtube.com")) {
      // Inject specific CSS for YouTube
      injectCSS("styles.css");
  } else {
      // Apply retro styles for other websites
      applyRetroStyles();
  }
})();
