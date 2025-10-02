// Ambil semua elemen hobi
const hobiItems = document.querySelectorAll(".hobi-item");
const deskripsiBox = document.getElementById("deskripsiBox");

// Isi deskripsi hobi
const hobiDeskripsi = {
  "🎵 Musik": "Aku suka mendengarkan musik untuk meningkatkan mood dan semangat belajar.",
  "📚 Membaca": "Membaca novel dan buku motivasi jadi salah satu cara aku mencari inspirasi.",
  "🎬 Film & Drama": "Aku suka menonton film dan drama sebagai hiburan di waktu luang.",
  "💻 Teknologi": "Aku tertarik dengan teknologi, terutama pemrograman dan dunia web."
};

// Tambahkan interaksi klik
hobiItems.forEach(item => {
  item.addEventListener("click", () => {
    const text = hobiDeskripsi[item.textContent];
    if (deskripsiBox.style.display === "block" && deskripsiBox.innerText.includes(item.textContent)) {
      // toggle: sembunyikan kalau klik lagi
      deskripsiBox.style.display = "none";
      deskripsiBox.innerHTML = "";
    } else {
      deskripsiBox.innerHTML = `<p><strong>${item.textContent}</strong> - ${text}</p>`;
      deskripsiBox.style.display = "block";
    }
  });
});
