// Greeting dengan nama dari prompt
document.addEventListener("DOMContentLoaded", () => {
  const name = prompt("Masukkan nama Anda:");
  if (name) {
    document.getElementById("welcomeText").innerText = `Hi ${name}, Selamat Datang di Guild Petualang Teyvat!`;
  }
});

// Validasi form
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const birthDate = document.getElementById("birthDate").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById("messageText").value.trim();

  if (!name || !birthDate || !gender || !message) {
    alert("Semua field harus diisi!");
    return false;
  }

  // Tampilkan waktu submit
  const now = new Date();

  // Tampilkan hasil input
  document.getElementById("resultBox").innerHTML = `
    <p><strong>Current time</strong> : ${now.toString()}</p>
    <p><strong>Nama</strong> : ${name}</p>
    <p><strong>Tanggal Lahir</strong> : ${birthDate}</p>
    <p><strong>Jenis Kelamin</strong> : ${gender.value}</p>
    <p><strong>Pesan</strong> : ${message}</p>
  `;
  return false; // agar tidak reload halaman
}

// Carousel functionality
let currentIndex = 0;
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const dotsContainer = document.querySelector('.carousel-dots');

// Buat dots
items.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});
