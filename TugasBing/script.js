/**
 * ClothShop - Modern E-Commerce Interactive Script (Tema Hijau Toska & Putih)
 * File: script.js
 */

// ==========================================
// 1. DATA PRODUK (KATALOG TOKO)
// ==========================================
const databaseProduk = [
    // --- Kategori Sepatu ---
    {
        id: 1,
        nama: "Adidas Adizero Evo SL Black White",
        kategori: "sepatu",
        harga: 2350000,
        rating: 4.9,
        terjual: 142,
        sizes: ["40", "41", "42", "43", "44"],
        img: "gambar/adizero.jpg",
        desc: "Sepatu daily running ringan dengan teknologi bantalan Lightstrike Pro untuk kenyamanan optimal saat latihan kecepatan tinggi."
    },
    {
        id: 2,
        nama: "Adidas Adizero Adios Pro 4 Cloud White",
        kategori: "sepatu",
        harga: 5189000,
        rating: 5.0,
        terjual: 56,
        sizes: ["40", "41", "42", "43"],
        img: "gambar/AdiosPro.jpg",
        desc: "Sepatu race marathon kasta tertinggi dengan Energyrods serat karbon premium untuk dorongan energi maksimal setiap langkah."
    },
    {
        id: 3,
        nama: "Nike Air Zoom Alphafly Next% 3 FP White Purple",
        kategori: "sepatu",
        harga: 4299000,
        rating: 5.0,
        terjual: 98,
        sizes: ["41", "42", "43", "44"],
        img: "gambar/Alphafly3.jpg",
        desc: "Sensasi membal responsif legendaris dengan dual unit Air Zoom di depan dan foam ZoomX terbaru untuk rekor personal terbaikmu."
    },
    {
        id: 4,
        nama: "Nike Alphafly 2 Men's Road Racing Shoes",
        kategori: "sepatu",
        harga: 3478000,
        rating: 4.8,
        terjual: 230,
        sizes: ["40", "41", "42", "43"],
        img: "gambar/Alphafly2.jpg",
        desc: "Dirancang untuk pelari jarak jauh dan maraton dengan stabilitas tapak ekstra dan daya tolak bantalan yang teruji."
    },
    {
        id: 5,
        nama: "Puma Speedcat OG Unisex Classic Sneakers",
        kategori: "sepatu",
        harga: 1899000,
        rating: 4.9,
        terjual: 380,
        sizes: ["39", "40", "41", "42", "43"],
        img: "gambar/PumaSpeed.jpg",
        desc: "Sneakers kasual suede ikonik yang terinspirasi dari gaya motorsport klasik dan sirkuit balap, trendi untuk gaya harian."
    },
    {
        id: 6,
        nama: "Puma Men's FAST-R NITRO™ Elite 2 Road",
        kategori: "sepatu",
        harga: 3599000,
        rating: 4.9,
        terjual: 29,
        sizes: ["41", "42", "43"],
        img: "gambar/PumaNitro.jpg",
        desc: "Sepatu kompetisi berteknologi bantalan Nitro Elite dengan sol dua bagian terpisah yang agresif dan responsif."
    },

    // --- Kategori Baju ---
    {
        id: 7,
        nama: "Stitch Supply – Kaos Polos Bodysize Premium Black",
        kategori: "baju",
        harga: 68000,
        rating: 4.7,
        terjual: 620,
        sizes: ["M", "L", "XL", "XXL"],
        img: "gambar/KaosHitam.jpg",
        desc: "Kaos polos rajutan tubular tanpa jahitan samping (bodysize). Bahan tebal, adem, dan sangat nyaman dipakai harian."
    },
    {
        id: 8,
        nama: "Heyplain – Kaos Polos Putih Basic Clean T-Shirt",
        kategori: "baju",
        harga: 79000,
        rating: 4.6,
        terjual: 450,
        sizes: ["S", "M", "L", "XL"],
        img: "gambar/KaosPutih.jpg",
        desc: "Bahan Cotton Combed 24S premium yang menyerap keringat, tidak menerawang, cocok untuk gaya kasual santai atau layering."
    },
    {
        id: 9,
        nama: "H&M – Regular Fit Printed T-shirt Sully Edition",
        kategori: "baju",
        harga: 249900,
        rating: 4.8,
        terjual: 110,
        sizes: ["S", "M", "L", "XL"],
        img: "gambar/KaosH&M.jpg",
        desc: "Kaos kasual grafis H&M dengan potongan regular fit yang rapi bernuansa cream sand, bahan 100% katun ramah lingkungan."
    },
    {
        id: 10,
        nama: "Uniqlo – Kaos Pria Lengan Pendek White Crewneck",
        kategori: "baju",
        harga: 199000,
        rating: 4.9,
        terjual: 920,
        sizes: ["S", "M", "L", "XL"],
        img: "gambar/KaosUniqlo.jpg",
        desc: "Potongan legendaris Uniqlo bertekstur lembut, jahitan kokoh, dan tetap rapi meski sudah berkali-kali dicuci."
    },
    {
        id: 11,
        nama: "Adidas Originals – Tech Graphic Tee White",
        kategori: "baju",
        harga: 600000,
        rating: 4.7,
        terjual: 75,
        sizes: ["M", "L", "XL"],
        img: "gambar/KaosAdidas.jpg",
        desc: "Kaos sportswear berdesain minimalis modern dengan logo linear khas Adidas Originals yang stylish dan sporty."
    },

    // --- Kategori Aksesoris / Jam ---
    {
        id: 12,
        nama: "Coros Pace Pro GPS AMOLED Sport Smart Watch",
        kategori: "jam",
        harga: 6199000,
        rating: 5.0,
        terjual: 45,
        sizes: null,
        img: "gambar/Coros1.jpg",
        desc: "Layar AMOLED ultra-cerah dengan prosesor super cepat, baterai tahan lama, dan metrik pelatihan lari terlengkap."
    },
    {
        id: 13,
        nama: "Coros Vertix 2 GPS Adventure Smartwatch Titanium",
        kategori: "jam",
        harga: 11199000,
        rating: 4.9,
        terjual: 18,
        sizes: null,
        img: "gambar/Coros2.jpg",
        desc: "Bahan bezel titanium kelas dunia dengan daya tahan baterai hingga 140 jam GPS aktif, tangguh untuk ekspedisi ekstrem."
    },
    {
        id: 14,
        nama: "Coros Pace 3 GPS Sport Watch Silicone Edition",
        kategori: "jam",
        harga: 4350000,
        rating: 4.9,
        terjual: 195,
        sizes: null,
        img: "gambar/Coros3.jpg",
        desc: "Jam tangan multisport teringan di kelasnya (hanya 30g) dengan GPS dual-frequency akurat dan sensor detak jantung optik baru."
    },
    {
        id: 15,
        nama: "Garmin Forerunner 165 Music Black Running Watch",
        kategori: "jam",
        harga: 5199000,
        rating: 4.8,
        terjual: 90,
        sizes: null,
        img: "gambar/Garmin1.jpg",
        desc: "Dilengkapi fitur pemutar musik offline tanpa ponsel, layar AMOLED sentuh cerah, dan rencana latihan adaptif Garmin Coach."
    },
    {
        id: 16,
        nama: "Garmin Forerunner 965 Amp Yellow Titanium Bezel",
        kategori: "jam",
        harga: 10599000,
        rating: 5.0,
        terjual: 35,
        sizes: null,
        img: "gambar/Garmin2.jpg",
        desc: "Smartwatch running & triathlon kasta tertinggi Garmin dengan peta topografi bawaan dan metrik performa lanjutan."
    }
];

// ==========================================
// 2. STATE MANAGEMENT APLIKASI
// ==========================================
let keranjang = JSON.parse(localStorage.getItem('clothshop_cart')) || [];
let kategoriAktif = 'all';
let kataKunciCari = '';
let urutanAktif = 'default';
let modalDetailInstance = null;
let offcanvasCartInstance = null;

// ==========================================
// 3. INISIALISASI SAAT DOM SIAP
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi modal & drawer bootstrap
    const modalEl = document.getElementById('modalDetail');
    if (modalEl && typeof bootstrap !== 'undefined') {
        modalDetailInstance = new bootstrap.Modal(modalEl);
    }

    const offcanvasEl = document.getElementById('offcanvasCart');
    if (offcanvasEl && typeof bootstrap !== 'undefined') {
        offcanvasCartInstance = new bootstrap.Offcanvas(offcanvasEl);
    }

    // Tampilkan produk pertama kali
    terapkanFilterDanRender();

    // Perbarui keranjang dan badge
    updateCartUI();

    // Live search listener
    const inputCari = document.getElementById('inputCari');
    if (inputCari) {
        inputCari.addEventListener('input', (e) => {
            kataKunciCari = e.target.value.trim().toLowerCase();
            terapkanFilterDanRender();
        });
    }

    // Sort dropdown listener
    const selectSort = document.getElementById('selectSort');
    if (selectSort) {
        selectSort.addEventListener('change', (e) => {
            urutanAktif = e.target.value;
            terapkanFilterDanRender();
        });
    }
});

// ==========================================
// 4. FORMAT CURRENCY RUPIAH
// ==========================================
function formatRupiah(angka) {
    return 'Rp ' + Number(angka).toLocaleString('id-ID');
}

// ==========================================
// 5. RENDER DAFTAR PRODUK (KATALOG)
// ==========================================
function terapkanFilterDanRender() {
    let hasil = [...databaseProduk];

    // Filter Kategori
    if (kategoriAktif !== 'all') {
        hasil = hasil.filter(p => p.kategori === kategoriAktif);
    }

    // Filter Pencarian
    if (kataKunciCari) {
        hasil = hasil.filter(p => 
            p.nama.toLowerCase().includes(kataKunciCari) || 
            p.desc.toLowerCase().includes(kataKunciCari) ||
            p.kategori.toLowerCase().includes(kataKunciCari)
        );
    }

    // Pengurutan (Sorting)
    if (urutanAktif === 'termurah') {
        hasil.sort((a, b) => a.harga - b.harga);
    } else if (urutanAktif === 'termahal') {
        hasil.sort((a, b) => b.harga - a.harga);
    } else if (urutanAktif === 'rating') {
        hasil.sort((a, b) => b.rating - a.rating);
    } else if (urutanAktif === 'terlaris') {
        hasil.sort((a, b) => b.terjual - a.terjual);
    }

    // Update Judul Etalase
    const judulEl = document.getElementById('judul-etalase');
    if (judulEl) {
        const namaKategori = {
            all: 'Semua Produk Pilihan',
            sepatu: 'Koleksi Sepatu Olahraga',
            baju: 'Koleksi Pakaian & Kaos',
            jam: 'Koleksi Smartwatch & Jam Lari'
        };
        let teks = namaKategori[kategoriAktif] || 'Katalog Produk';
        if (kataKunciCari) {
            teks = `Pencarian: "${kataKunciCari}" (${hasil.length} hasil)`;
        }
        judulEl.innerHTML = `<i class="bi bi-grid-3x3-gap-fill me-2" style="color: var(--tosca-primary);"></i>${teks}`;
    }

    tampilkanProduk(hasil);
}

function tampilkanProduk(list) {
    const container = document.getElementById('container-produk');
    if (!container) return;

    if (list.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5" style="grid-column: 1 / -1;">
                <div class="mb-3" style="font-size: 3rem; color: var(--tosca-mint);">
                    <i class="bi bi-search"></i>
                </div>
                <h5 class="fw-bold" style="color: var(--tosca-dark);">Produk Tidak Ditemukan</h5>
                <p class="text-muted small">Coba masukkan kata kunci lain atau pilih kategori produk yang tersedia.</p>
                <button class="btn text-white btn-sm px-4 rounded-pill shadow-sm" style="background-color: var(--tosca-primary);" onclick="resetFilter()">Tampilkan Semua Produk</button>
            </div>
        `;
        return;
    }

    let cardsHtml = '';
    list.forEach(p => {
        let sizeHtml = '';
        if (p.sizes && p.sizes.length > 0) {
            const sizePills = p.sizes.map((s, idx) => `
                <button type="button" class="size-pill ${idx === 0 ? 'active' : ''}" onclick="pilihUkuran(this, event)">${s}</button>
            `).join('');
            sizeHtml = `<div class="product-sizes"><div class="size-selector">${sizePills}</div></div>`;
        } else {
            sizeHtml = `<div class="product-sizes"><span class="badge border small" style="background-color: var(--tosca-light); color: var(--tosca-dark); border-color: var(--tosca-border);">All Size / Standar</span></div>`;
        }

        cardsHtml += `
            <article class="product-card" data-id="${p.id}">
                <div class="product-img-wrapper" onclick="bukaDetail(${p.id})">
                    <span class="product-badge-category">${p.kategori}</span>
                    <img src="${p.img}" alt="${p.nama}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-title" onclick="bukaDetail(${p.id})" title="${p.nama}">
                        ${p.nama}
                    </h3>
                    <div class="product-price">${formatRupiah(p.harga)}</div>
                    <div class="product-meta">
                        <span class="stars"><i class="bi bi-star-fill"></i> ${p.rating}</span>
                        <span>•</span>
                        <span>${p.terjual} Terjual</span>
                    </div>

                    ${sizeHtml}

                    <div class="product-actions">
                        <button class="btn-card-cart" onclick="tambahKeranjangDariCard(${p.id}, this)" title="Tambah ke Keranjang">
                            <i class="bi bi-cart-plus"></i>
                        </button>
                        <button class="btn-card-buy" onclick="beliSekarangDariCard(${p.id}, this)">
                            Beli Sekarang
                        </button>
                    </div>
                </div>
            </article>
        `;
    });

    container.innerHTML = cardsHtml;
}

// ==========================================
// 6. FILTER & KATEGORI ACTIONS
// ==========================================
function filterKategori(kat, btnElement) {
    kategoriAktif = kat;

    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) {
        btnElement.classList.add('active');
    } else {
        const matchingBtn = document.querySelector(`.filter-btn[data-category="${kat}"]`);
        if (matchingBtn) matchingBtn.classList.add('active');
    }

    tampilkanHalaman('katalog');
    terapkanFilterDanRender();
}

function resetFilter() {
    kategoriAktif = 'all';
    kataKunciCari = '';
    const inputCari = document.getElementById('inputCari');
    if (inputCari) inputCari.value = '';
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-category') === 'all');
    });

    terapkanFilterDanRender();
}

function submitPencarian(e) {
    if (e) e.preventDefault();
    const inputCari = document.getElementById('inputCari');
    if (inputCari) {
        kataKunciCari = inputCari.value.trim().toLowerCase();
        tampilkanHalaman('katalog');
        terapkanFilterDanRender();
    }
}

// ==========================================
// 7. SELEKSI UKURAN (SIZE PILL)
// ==========================================
function pilihUkuran(el, evt) {
    if (evt) evt.stopPropagation();
    const parent = el.closest('.size-selector');
    if (!parent) return;
    parent.querySelectorAll('.size-pill').forEach(btn => btn.classList.remove('active'));
    el.classList.add('active');
}

// ==========================================
// 8. DETAIL PRODUK (MODAL)
// ==========================================
function bukaDetail(id) {
    const prod = databaseProduk.find(p => p.id === id);
    if (!prod) return;

    document.getElementById('modalFotoUtama').src = prod.img;
    document.getElementById('modalFotoUtama').alt = prod.nama;
    document.getElementById('modalNamaProduk').innerText = prod.nama;
    document.getElementById('modalHargaProduk').innerText = formatRupiah(prod.harga);
    document.getElementById('modalKategori').innerText = prod.kategori.toUpperCase();
    document.getElementById('modalRating').innerText = prod.rating;
    document.getElementById('modalTerjual').innerText = prod.terjual;
    document.getElementById('modalDeskripsi').innerText = prod.desc;
    document.getElementById('modalProdukId').value = prod.id;

    const sizeWrapper = document.getElementById('modalSizeContainer');
    if (prod.sizes && prod.sizes.length > 0) {
        sizeWrapper.innerHTML = `
            <label class="form-label small fw-bold mb-1" style="color: var(--tosca-dark);">Pilih Ukuran:</label>
            <div class="size-selector" id="modalSizeSelector">
                ${prod.sizes.map((s, idx) => `
                    <button type="button" class="size-pill ${idx === 0 ? 'active' : ''}" onclick="pilihUkuran(this, event)">${s}</button>
                `).join('')}
            </div>
        `;
    } else {
        sizeWrapper.innerHTML = `
            <label class="form-label small fw-bold mb-1" style="color: var(--tosca-dark);">Pilihan Ukuran:</label>
            <div><span class="badge border" style="background-color: var(--tosca-light); color: var(--tosca-dark); border-color: var(--tosca-border);">Ukuran Standar (All Size)</span></div>
        `;
    }

    if (modalDetailInstance) {
        modalDetailInstance.show();
    }
}

function aksiModalBeli(mode) {
    const id = parseInt(document.getElementById('modalProdukId').value);
    const prod = databaseProduk.find(p => p.id === id);
    if (!prod) return;

    let ukuran = null;
    const activeSizeBtn = document.querySelector('#modalSizeSelector .size-pill.active');
    if (activeSizeBtn) {
        ukuran = activeSizeBtn.innerText.trim();
    } else if (prod.sizes && prod.sizes.length > 0) {
        ukuran = prod.sizes[0];
    }

    tambahItemKeKeranjang(prod, ukuran);

    if (modalDetailInstance) {
        modalDetailInstance.hide();
    }

    if (mode === 'checkout') {
        tampilkanHalaman('checkout');
    } else {
        bukaDrawerKeranjang();
    }
}

// ==========================================
// 9. LOGIKA KERANJANG BELANJA (CART)
// ==========================================
function simpanKeranjang() {
    localStorage.setItem('clothshop_cart', JSON.stringify(keranjang));
    updateCartUI();
}

function ambilUkuranAktif(cardElement) {
    if (!cardElement) return null;
    const activeSize = cardElement.querySelector('.size-pill.active');
    return activeSize ? activeSize.innerText.trim() : null;
}

function tambahKeranjangDariCard(id, btnElement) {
    const prod = databaseProduk.find(p => p.id === id);
    if (!prod) return;

    const card = btnElement.closest('.product-card');
    const ukuran = ambilUkuranAktif(card) || (prod.sizes ? prod.sizes[0] : null);

    tambahItemKeKeranjang(prod, ukuran);
    tampilkanToast(`Berhasil masuk keranjang: ${prod.nama}${ukuran ? ' (Ukuran: ' + ukuran + ')' : ''}`);
}

function beliSekarangDariCard(id, btnElement) {
    const prod = databaseProduk.find(p => p.id === id);
    if (!prod) return;

    const card = btnElement.closest('.product-card');
    const ukuran = ambilUkuranAktif(card) || (prod.sizes ? prod.sizes[0] : null);

    tambahItemKeKeranjang(prod, ukuran);
    tampilkanHalaman('checkout');
}

function tambahItemKeKeranjang(prod, ukuran) {
    const itemAda = keranjang.find(item => item.id === prod.id && item.ukuran === ukuran);

    if (itemAda) {
        itemAda.qty += 1;
    } else {
        keranjang.push({
            id: prod.id,
            nama: prod.nama,
            harga: prod.harga,
            img: prod.img,
            kategori: prod.kategori,
            ukuran: ukuran,
            qty: 1
        });
    }

    simpanKeranjang();
}

function ubahQty(index, delta) {
    if (!keranjang[index]) return;

    keranjang[index].qty += delta;
    if (keranjang[index].qty <= 0) {
        keranjang.splice(index, 1);
    }

    simpanKeranjang();
}

function hapusItem(index) {
    if (!keranjang[index]) return;
    keranjang.splice(index, 1);
    simpanKeranjang();
}

function kosongkanKeranjang() {
    if (keranjang.length === 0) return;
    if (confirm("Apakah Anda yakin ingin mengosongkan seluruh keranjang belanja?")) {
        keranjang = [];
        simpanKeranjang();
    }
}

// ==========================================
// 10. UPDATE UI KERANJANG, OFFCANVAS & CHECKOUT
// ==========================================
function updateCartUI() {
    const totalQty = keranjang.reduce((acc, item) => acc + item.qty, 0);
    const totalHarga = keranjang.reduce((acc, item) => acc + (item.harga * item.qty), 0);

    // Update Badges di Navbar
    document.querySelectorAll('.cart-badge').forEach(badge => {
        badge.innerText = totalQty;
        badge.style.display = totalQty > 0 ? 'inline-flex' : 'none';
    });

    // Render Drawer & Halaman Checkout
    renderDrawerCart(totalHarga);
    renderCheckoutCart(totalHarga);
}

function renderDrawerCart(totalHarga) {
    const container = document.getElementById('drawerCartItems');
    const totalEl = document.getElementById('drawerCartTotal');
    if (!container) return;

    if (keranjang.length === 0) {
        container.innerHTML = `
            <div class="text-center py-5 text-muted">
                <i class="bi bi-cart-x fs-1 d-block mb-2" style="color: var(--tosca-mint);"></i>
                <p class="mb-0 fw-semibold" style="color: var(--tosca-dark);">Keranjang belanja masih kosong.</p>
                <small>Pilih produk favorit Anda dari katalog kami!</small>
            </div>
        `;
        if (totalEl) totalEl.innerText = formatRupiah(0);
        return;
    }

    let itemsHtml = '';
    keranjang.forEach((item, index) => {
        itemsHtml += `
            <div class="cart-item-card">
                <img src="${item.img}" alt="${item.nama}" class="cart-item-img">
                <div class="cart-item-details">
                    <h5 class="cart-item-name">${item.nama}</h5>
                    <div class="cart-item-price">${formatRupiah(item.harga)}</div>
                    ${item.ukuran ? `<div class="cart-item-size">Ukuran: <strong>${item.ukuran}</strong></div>` : ''}
                    <div class="qty-control">
                        <button class="qty-btn" onclick="ubahQty(${index}, -1)" title="Kurangi">-</button>
                        <span class="qty-number">${item.qty}</span>
                        <button class="qty-btn" onclick="ubahQty(${index}, 1)" title="Tambah">+</button>
                    </div>
                </div>
                <button class="cart-item-delete" onclick="hapusItem(${index})" title="Hapus Item">
                    <i class="bi bi-trash3"></i>
                </button>
            </div>
        `;
    });

    container.innerHTML = itemsHtml;
    if (totalEl) totalEl.innerText = formatRupiah(totalHarga);
}

function renderCheckoutCart(totalHarga) {
    const container = document.getElementById('checkoutCartItems');
    const totalEl = document.getElementById('checkoutTotalHarga');
    const subtotalEl = document.getElementById('checkoutSubtotal');
    if (!container) return;

    if (keranjang.length === 0) {
        container.innerHTML = `
            <div class="text-center py-4 text-muted">
                <p class="mb-0">Belum ada item pesanan yang dipilih.</p>
            </div>
        `;
        if (subtotalEl) subtotalEl.innerText = formatRupiah(0);
        if (totalEl) totalEl.innerText = formatRupiah(0);
        return;
    }

    let itemsHtml = '';
    keranjang.forEach((item, index) => {
        itemsHtml += `
            <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
                <div class="d-flex align-items-center gap-2">
                    <img src="${item.img}" style="width: 44px; height: 44px; object-fit: contain; background: var(--tosca-light); border-radius: 6px; padding: 2px;">
                    <div>
                        <div class="fw-bold small text-truncate" style="max-width: 170px; color: var(--tosca-dark);">${item.nama}</div>
                        <div class="text-muted" style="font-size: 0.75rem;">
                            ${item.ukuran ? `Size: ${item.ukuran} | ` : ''}${item.qty} x ${formatRupiah(item.harga)}
                        </div>
                    </div>
                </div>
                <div class="text-end">
                    <span class="fw-bold small text-dark">${formatRupiah(item.harga * item.qty)}</span>
                </div>
            </div>
        `;
    });

    container.innerHTML = itemsHtml;
    if (subtotalEl) subtotalEl.innerText = formatRupiah(totalHarga);
    if (totalEl) totalEl.innerText = formatRupiah(totalHarga);
}

function bukaDrawerKeranjang() {
    if (offcanvasCartInstance) {
        offcanvasCartInstance.show();
    }
}

// ==========================================
// 11. NAVIGASI HALAMAN (KATALOG / CHECKOUT)
// ==========================================
function tampilkanHalaman(pageName) {
    const sectionKatalog = document.getElementById('section-katalog');
    const sectionCheckout = document.getElementById('section-checkout');
    const heroBanner = document.getElementById('hero-banner');

    if (pageName === 'checkout') {
        if (sectionKatalog) sectionKatalog.style.display = 'none';
        if (heroBanner) heroBanner.style.display = 'none';
        if (sectionCheckout) sectionCheckout.style.display = 'block';

        if (offcanvasCartInstance) {
            offcanvasCartInstance.hide();
        }
    } else {
        if (sectionKatalog) sectionKatalog.style.display = 'block';
        if (heroBanner) heroBanner.style.display = 'block';
        if (sectionCheckout) sectionCheckout.style.display = 'none';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 12. PROSES CHECKOUT & TRANSAKSI
// ==========================================
function selesaikanPesanan(e) {
    e.preventDefault();

    if (keranjang.length === 0) {
        alert("Keranjang belanja masih kosong! Silakan pilih produk terlebih dahulu.");
        tampilkanHalaman('katalog');
        return;
    }

    const nama = document.getElementById('namaPenerima').value.trim();
    const telp = document.getElementById('telpPenerima').value.trim();
    const kurir = document.getElementById('kurirPengiriman').value;
    const metode = document.getElementById('metodeBayar').value;

    const totalBayar = keranjang.reduce((acc, item) => acc + (item.harga * item.qty), 0);

    alert(`🎉 Terima Kasih ${nama}!\n\nPesanan Anda berhasil kami terima.\nTotal Pembayaran: ${formatRupiah(totalBayar)}\nEkspedisi: ${kurir}\nMetode Pembayaran: ${metode}\n\nRincian dan nomor resi pengiriman akan dikirimkan ke WhatsApp: ${telp}`);

    keranjang = [];
    simpanKeranjang();
    e.target.reset();
    tampilkanHalaman('katalog');
}

// ==========================================
// 13. TOAST NOTIFIKASI
// ==========================================
let toastTimeout;
function tampilkanToast(pesan) {
    const toast = document.getElementById('appToast');
    const toastMsg = document.getElementById('toastMessage');
    if (!toast || !toastMsg) return;

    toastMsg.innerText = pesan;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
