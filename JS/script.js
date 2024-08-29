document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah pengiriman formulir default

      // Ambil data formulir
      const name = document.getElementById('name').value;
      const dob = document.getElementById('dob').value;
      const gender = document.getElementById('gender').value;
      const message = document.getElementById('message').value;

      // Tampilkan data (misalnya di console atau alert)
      console.log(`Nama: ${name}`);
      console.log(`Tanggal Lahir: ${dob}`);
      console.log(`Jenis Kelamin: ${gender}`);
      console.log(`Pesan: ${message}`);

      // Berikan umpan balik kepada pengguna
      alert('Formulir berhasil dikirim!');

      // Reset formulir setelah pengiriman
      form.reset();
    });
  }
});