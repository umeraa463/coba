/**
 * LAVITRA SESERAHAN & MAHAR - JAVASCRIPT
 * Interaktivitas Navigasi, Accordion FAQ, & Quick Image Tester
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. HEADER SCROLL SHADOW
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 2. MOBILE DRAWER NAVIGATION (HAMBURGER MENU)
  const menuBtn = document.querySelector('.header-menu-btn');
  const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
  const drawer = document.querySelector('.mobile-drawer');
  const drawerCloseBtn = document.querySelector('.drawer-close-btn');

  function openDrawer() {
    if (drawer && drawerOverlay) {
      drawer.classList.add('active');
      drawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (drawer && drawerOverlay) {
      drawer.classList.remove('active');
      drawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', openDrawer);
  }
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
  }

  // Close drawer when clicking any nav link
  document.querySelectorAll('.drawer-nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // 3. FAQ ACCORDION INTERACTION (Halaman Beranda)
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close other accordion items
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });

        // Toggle current
        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });

  // 4. DESKTOP VIEW TOGGLE (Frame HP vs Full Width di Desktop)
  const toggleBtn = document.querySelector('.desktop-view-toggle');
  const viewportShell = document.querySelector('.mobile-viewport-shell');
  if (toggleBtn && viewportShell) {
    let isFramed = true;
    toggleBtn.addEventListener('click', () => {
      isFramed = !isFramed;
      if (isFramed) {
        viewportShell.style.maxWidth = '430px';
        toggleBtn.innerHTML = `<span>📱</span> Model Frame HP`;
      } else {
        viewportShell.style.maxWidth = '600px';
        toggleBtn.innerHTML = `<span>🔍</span> Layar Lebih Lebar`;
      }
    });
  }

  // 5. FITUR PRAKTIS: KLIK TEMPAT GAMBAR UNTUK PASANG FOTO SENDIRI (TEST DRIVE)
  // Memungkinkan Anda untuk klik pada kotak placeholder gambar, lalu memilih foto dari laptop/HP
  // sehingga bisa langsung melihat hasil desain dengan foto Anda secara instan!
  const placeholderWrappers = document.querySelectorAll('.img-placeholder-wrapper');
  
  // Create toast notification
  const toast = document.createElement('div');
  toast.className = 'photo-helper-toast';
  toast.innerHTML = `<span>✨ Foto berhasil dipasang ke slot!</span>`;
  document.body.appendChild(toast);

  function showToast(msg) {
    toast.innerHTML = `<span>${msg}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  placeholderWrappers.forEach((wrapper, index) => {
    // Buat input file tersembunyi jika belum ada
    let fileInput = wrapper.querySelector('.placeholder-file-input');
    if (!fileInput) {
      fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.className = 'placeholder-file-input';
      wrapper.appendChild(fileInput);
    }

    // Klik kotak placeholder -> buka dialog pilih file foto
    wrapper.addEventListener('click', (e) => {
      // Abaikan jika user mengklik tombol atau link tertentu di dalamnya
      if (e.target.closest('a') || e.target.closest('button')) return;
      fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          let userImg = wrapper.querySelector('.user-image');
          if (!userImg) {
            userImg = document.createElement('img');
            userImg.className = 'user-image';
            wrapper.appendChild(userImg);
          }
          userImg.src = event.target.result;
          userImg.classList.add('loaded');
          
          // Sembunyikan badge & text placeholder setelah foto masuk
          const placeholderContent = wrapper.querySelector('.placeholder-content');
          if (placeholderContent) {
            placeholderContent.style.opacity = '0';
          }
          const badge = wrapper.querySelector('.placeholder-badge');
          if (badge) {
            badge.style.opacity = '0';
          }

          showToast(`📸 Foto berhasil ditampilkan di slot #${index + 1}!`);
        };
        reader.readAsDataURL(file);
      }
    });
  });

});
