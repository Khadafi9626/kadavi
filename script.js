// Toggle navbar untuk hamburger menu
function toggleMenu() {
  document.getElementById('navbar').classList.toggle('active');
}

// Transaksi
if (document.getElementById('formTransaksi')) {
  document.getElementById("formTransaksi").addEventListener("submit", function (e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const kopi = document.getElementById("kopi").value;
    const jumlah = document.getElementById("jumlah").value;
    const tabel = document.getElementById("tabelTransaksi");
    const row = tabel.insertRow();
    row.innerHTML = `<td>${nama}</td><td>${kopi}</td><td>${jumlah}</td>`;
    this.reset();
  });
}

// login
if (document.getElementById('formLogin')) {
  document.getElementById("formLogin").addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const pesan = document.getElementById("pesan");
    if (!user || !pass) {
      pesan.textContent = "Username dan Password wajib diisi!";
      pesan.style.color = "red";
    } else {
      pesan.textContent = "Login berhasil!";
      pesan.style.color = "lime";
    }
  });
}