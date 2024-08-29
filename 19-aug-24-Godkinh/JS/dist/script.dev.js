"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Mencegah pengiriman formulir default
      // Ambil data formulir

      var name = document.getElementById('name').value;
      var dob = document.getElementById('dob').value;
      var gender = document.getElementById('gender').value;
      var message = document.getElementById('message').value; // Tampilkan data (misalnya di console atau alert)

      console.log("Nama: ".concat(name));
      console.log("Tanggal Lahir: ".concat(dob));
      console.log("Jenis Kelamin: ".concat(gender));
      console.log("Pesan: ".concat(message)); // Berikan umpan balik kepada pengguna

      alert('Formulir berhasil dikirim!'); // Reset formulir setelah pengiriman

      form.reset();
    });
  }
});
//# sourceMappingURL=script.dev.js.map
