document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".product-container");
  const leftButton = document.querySelector(".left-button");
  const rightButton = document.querySelector(".right-button");
  const tooltips = document.querySelectorAll(".scroll-button");

  let scrollPosition = 0;

  // Tampilkan tooltip saat hover
  tooltips.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      const tooltipText = button.getAttribute("data-tooltip");
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = tooltipText;
      button.appendChild(tooltip);
      tooltip.style.visibility = "visible";
      tooltip.style.opacity = "1";
    });

    // Sembunyikan tooltip saat mouse meninggalkan area
    button.addEventListener("mouseleave", () => {
      const tooltip = button.querySelector(".tooltip");
      tooltip.style.visibility = "hidden";
      tooltip.style.opacity = "0";
      button.removeChild(tooltip);
    });
  });

  // Aktifkan tombol scroll berdasarkan posisi scroll
  function enableScrollButtons() {
    if (scrollPosition <= 0) {
      leftButton.disabled = true;
      rightButton.disabled = false;
      hideTooltip(leftButton);
    } else if (
      scrollPosition >=
      container.scrollWidth - container.clientWidth
    ) {
      leftButton.disabled = false;
      rightButton.disabled = true;
      hideTooltip(rightButton);
    } else {
      leftButton.disabled = false;
      rightButton.disabled = false;
      hideTooltip(leftButton);
      hideTooltip(rightButton);
    }
  }

  // Sembunyikan tooltip untuk tombol tertentu
  function hideTooltip(button) {
    const tooltip = button.querySelector(".tooltip");
    if (tooltip) {
      tooltip.style.visibility = "hidden";
      tooltip.style.opacity = "0";
      button.removeChild(tooltip);
    }
  }

  // Scroll container ke kanan
  function scrollRight() {
    scrollPosition += 30;
    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    enableScrollButtons();
  }

  // Scroll container ke kiri
  function scrollLeft() {
    scrollPosition -= 30;
    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    enableScrollButtons();
  }

  // Tambahkan event listeners ke tombol scroll
  leftButton.addEventListener("click", scrollLeft);
  rightButton.addEventListener("click", scrollRight);

  // Aktifkan/nonaktifkan tombol scroll saat halaman dimuat
  enableScrollButtons();
});

// Fungsi untuk memperluas/menutup footer
function toggleFooter() {
  const footerContent = document.getElementById("footer-content");
  const toggleButton = document.getElementById("toggle-footer-button");

  if (footerContent.style.maxHeight === "0px") {
    footerContent.style.maxHeight = "1000px";
    toggleButton.innerHTML = "Sembunyikan Semua <span class='chevron'>▲</span>"; // Set teks tombol
  } else {
    footerContent.style.maxHeight = "0px";
    toggleButton.innerHTML = "Tampilkan Semua <span class='chevron'>▼</span>"; // Set teks tombol
  }
}

// Tombol Scroll ke Atas
window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.pageYOffset > 200) {
    scrollToTopBtn.style.display = "block"; // Tampilkan tombol
  } else {
    scrollToTopBtn.style.display = "none"; // Sembunyikan tombol
  }
});

document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
