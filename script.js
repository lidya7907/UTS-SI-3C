const konten = document.getElementById("konten");
const home = document.getElementById("home");
const mahasiswa = document.getElementById("mahasiswa");
const kelas = document.getElementById("kelas");
const sidebarLinks = document.querySelectorAll(".sidebar a");

function setActive(link) {
  sidebarLinks.forEach(a => a.classList.remove("active"));
  link.classList.add("active");
}

home.addEventListener("click", () => {
  setActive(home);
  konten.querySelector(".welcome-card h1").textContent = "Selamat Datang, Nama Mahasiswa";
  konten.querySelector(".welcome-card h2").textContent = "Kelas SI-3C";
});

mahasiswa.addEventListener("click", () => {
  setActive(mahasiswa);
  konten.querySelector(".welcome-card h1").textContent = "Selamat Datang, Maulidya Pratiwi";
  konten.querySelector(".welcome-card h2").textContent = "Kelas SI-3C";
});

kelas.addEventListener("click", () => {
  setActive(kelas);
  konten.querySelector(".welcome-card h1").textContent = "Selamat Datang, Maulidya Pratiwi";
  konten.querySelector(".welcome-card h2").textContent = "Kelas SI-3C";
});