const sukaItems = document.querySelectorAll(".suka-item");

const sukaDeskripsi = {
  "Meng": "Bestiee, kukenalkan sama anabul kesayanganku ya! Namanya Milo, dia suka keluyuran dan pulang kalau lagi laper aja, maklum anak ganteng.",
  "K-POP": "Salah satu hobiku adalah mendengarkan musik dan yang paling sering kudengarkan adalah K-POP. Aku sudah meluncur ke dunia ini sejak 2017, boygrub pertamaku itu BTS, well siapa sih yg gatau BTS. Untuk sekarang aku banyak menyukai gg maupun bg yang kalau disebutin semuanya ngga akan cukup.",
  "Dance": "Alasan lain aku sangat menyukai K-POP karena mereka punya koreografi untuk beberapa lagu mereka dan menurutku itu keren, mulai dari situlah aku sering mengikuti dance mereka yaa walaupun hasilnya mengecewakan.",
  "Biola": "Menurutku biola itu adalah alat musik yang sangat sangaaattt elegan, suaranya merdu dan menenangkan. Rasanya cocok untuk disatukan dengan ballet dan ice skate.",
  "Alam": "Jujur saja aku sangat menyukai hal-hal yang berbau ketenangan, seperti setiap melihat tempat-tempat yang memiliki hamparan alam yang luas membuat bisa membuatku bersyukur dan lega. Tentu saja ada keinginan untuk mengunjungi tempat itu tapi yasudahlah, suatu saat nanti pasi ada jalannya."
};

const deskripsiBox = document.createElement("div");
deskripsiBox.classList.add("deskripsi-box");
document.querySelector(".suka").appendChild(deskripsiBox);

sukaItems.forEach(item => {
  item.addEventListener("click", () => {
    const judul = item.querySelector("h3").textContent;
    const text = sukaDeskripsi[judul];

    if (deskripsiBox.style.display === "block" && deskripsiBox.innerText.includes(judul)) {
      deskripsiBox.style.display = "none";
      deskripsiBox.innerHTML = "";
    } else {
      deskripsiBox.innerHTML = `<p><strong>${judul}</strong> - ${text}</p>`;
      deskripsiBox.style.display = "block";
    }
  });
});
