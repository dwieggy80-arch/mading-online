document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Data Konten Mading
    const madingData = [
        {
            id: 1,
            title: "Puisi: Senja di Pelataran Sekolah",
            category: "Puisi",
            icon: "fa-feather-alt",
            author: "Aulia Rahman",
            date: "17 Okt 2025",
            content: "Rona jingga memudar perlahan, menyisakan bayangan di lapangan yang sepi. Angin berbisik membawa sisa tawa yang tadi siang bergemuruh. Inilah kisah kita, di antara buku dan janji yang belum tertepati..."
        },
        {
            id: 2,
            title: "Lomba Desain Poster HUT RI ke-81",
            category: "Berita",
            icon: "fa-bullhorn",
            author: "OSIS Kreatif",
            date: "15 Okt 2025",
            content: "Ayo kirimkan karya terbaikmu! Tema tahun ini adalah 'Membangun Masa Depan Hijau'. Hadiah utama menanti pemenang. Deadline pengumpulan tanggal 30 Oktober. Cek panduan lengkap di folder drive OSIS."
        },
        {
            id: 3,
            title: "Tips Fotografi Ponsel Keren",
            category: "Visual",
            icon: "fa-camera-retro",
            author: "Klub Fotografi",
            date: "10 Okt 2025",
            content: "Tidak perlu kamera mahal, ponsel pun bisa! Kunci foto keren ada pada komposisi dan pencahayaan. Hindari zoom digital, manfaatkan mode portrait, dan edit dengan VSCO atau Lightroom."
        },
        {
            id: 4,
            title: "Cerpen: Pena Ajaib Risa",
            category: "Puisi",
            icon: "fa-book-open",
            author: "Budi Santoso",
            date: "05 Okt 2025",
            content: "Risa selalu menulis dengan pena usang miliknya. Pena itu tidak hanya menuliskan kata, tetapi juga mewujudkan apa yang ia tuliskan. Sayangnya, suatu hari Risa menulis tentang pena yang hilang..."
        },
        {
            id: 5,
            title: "Pengumuman: Jadwal Ujian Tengah Semester",
            category: "Berita",
            icon: "fa-calendar-alt",
            author: "Tim Kurikulum",
            date: "01 Okt 2025",
            content: "Perhatian kepada seluruh siswa! Jadwal UTS telah dirilis. Ujian akan dimulai pada tanggal 25 Oktober. Pastikan Anda sudah mengunduh materi revisi dari portal sekolah. Selamat belajar!"
        }
        // Tambahkan konten mading lain di sini
    ];

    const container = document.getElementById('mading-container');

    // Fungsi untuk membuat elemen kartu
    function createMadingCard(data) {
        const card = document.createElement('a'); // Menggunakan <a> agar bisa ditautkan
        card.href = `#post-${data.id}`; // Tautan dummy
        card.className = `mading-card ${data.category.toLowerCase()}`;
        card.setAttribute('data-category', data.category);

        card.innerHTML = `
            <i class="fas ${data.icon}"></i>
            <h3>${data.title}</h3>
            <p>${data.content}</p>
            <div class="meta">
                <span><i class="fas fa-user-edit"></i> ${data.author}</span>
                <span><i class="fas fa-clock"></i> ${data.date}</span>
            </div>
        `;
        return card;
    }

    // Tampilkan semua kartu di container
    madingData.forEach(data => {
        container.appendChild(createMadingCard(data));
    });

    // BONUS: Animasi saat halaman pertama kali dimuat
    const cards = document.querySelectorAll('.mading-card');
    cards.forEach((card, index) => {
        // Kartu muncul perlahan dengan sedikit jeda (staggered animation)
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, index * 100); // Jeda 100ms per kartu
    });
});
