// Untuk fitur kategori
const categoryButtons = document.querySelectorAll('.category-btn');
const menuItems = document.querySelectorAll('.menu-item');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    menuItems.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Untuk modal selamat datang
document.addEventListener("DOMContentLoaded", () => {
  const welcomeModal = document.getElementById("welcomeModal");
  const closeModalBtn = document.getElementById("closeModal");

  if (welcomeModal && closeModalBtn) {
    // Tampilkan modal setelah halaman dimuat
    setTimeout(() => {
      welcomeModal.classList.add("show");
    }, 500); // Delay untuk pengalaman pengguna yang lebih baik

    // Tutup modal saat tombol close diklik
    closeModalBtn.addEventListener("click", () => {
      welcomeModal.classList.remove("show");
    });
  }
});
