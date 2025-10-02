// Ambil semua elemen "Hal yang Kusukai"
const sukaItems = document.querySelectorAll(".suka-item");

// Buat deskripsi sesuai item (bisa disesuaikan lagi sama kamu)
const sukaDeskripsi = {
  "Meng": "Aku suka mendengarkan musik untuk menemani belajar dan santai.",
  "K-POP": "Aku suka musik dan konser K-POP, memberi energi positif.",
  "Dance": "Menari jadi salah satu cara aku mengekspresikan diri.",
  "Cooking": "Aku suka mencoba resep baru dan memasak di waktu senggang.",
  "Alam": "Menikmati alam membuatku lebih tenang dan segar."
};

// Buat box deskripsi dinamis
const deskripsiBox = document.createElement("div");
deskripsiBox.classList.add("deskripsi-box");
document.querySelector(".suka").appendChild(deskripsiBox);

// Event listener untuk tiap item
sukaItems.forEach(item => {
  item.addEventListener("click", () => {
    const judul = item.querySelector("h3").textContent;
    const text = sukaDeskripsi[judul];

    if (deskripsiBox.style.display === "block" && deskripsiBox.innerText.includes(judul)) {
      // toggle off
      deskripsiBox.style.display = "none";
      deskripsiBox.innerHTML = "";
    } else {
      deskripsiBox.innerHTML = `<p><strong>${judul}</strong> - ${text}</p>`;
      deskripsiBox.style.display = "block";
    }
  });
});
