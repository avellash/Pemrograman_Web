// Ambil semua elemen hobi
const hobiItems = document.querySelectorAll(".hobi-item");

// Buat deskripsi hobi (bisa kamu ubah sesuai keinginan)
const hobiDeskripsi = {
  "🎵 Musik": "Aku suka mendengarkan musik untuk meningkatkan mood dan semangat belajar.",
  "📚 Membaca": "Membaca novel dan buku motivasi jadi salah satu cara aku mencari inspirasi.",
  "🎬 Film & Drama": "Aku suka menonton film dan drama sebagai hiburan di waktu luang.",
  "💻 Teknologi": "Aku tertarik dengan teknologi, terutama pemrograman dan dunia web."
};

// Buat tempat untuk menampilkan deskripsi
const deskripsiBox = document.createElement("div");
deskripsiBox.classList.add("deskripsi-box");
document.querySelector(".hobi").appendChild(deskripsiBox);

// Tambahkan event listener ke setiap hobi
hobiItems.forEach(item => {
  item.addEventListener("click", () => {
    const text = hobiDeskripsi[item.textContent];
    deskripsiBox.innerHTML = `<p><strong>${item.textContent}</strong> - ${text}</p>`;
  });
});
