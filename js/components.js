// js/components.js
// Shared navbar and footer injected dynamically into all pages

const BRAND_HTML = `
  <div class="flex items-center gap-2">
    <div class="text-primary">
      <span class="material-symbols-outlined text-4xl">terminal</span>
    </div>
    <a href="/index.html" class="text-xl font-bold tracking-tight">Informatics <span class="text-primary">Dept</span></a>
  </div>`;

const NAV_LINKS = `
  <a class="text-sm font-medium hover:text-primary" href="/index.html">Home</a>
  <div class="relative dropdown">
    <button class="flex items-center gap-1 text-sm font-medium hover:text-primary">
      Profil <span class="material-symbols-outlined text-sm">expand_more</span>
    </button>
    <div class="dropdown-menu absolute left-0 mt-2 w-52 rounded-lg bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 py-2">
      <a class="block px-4 py-2 text-sm hover:bg-primary/10" href="/sejarah.html">Sejarah</a>
      <a class="block px-4 py-2 text-sm hover:bg-primary/10" href="/visi-misi.html">Visi &amp; Misi</a>
      <a class="block px-4 py-2 text-sm hover:bg-primary/10" href="/capaian-pembelajaran.html">Capaian Pembelajaran</a>
      <a class="block px-4 py-2 text-sm hover:bg-primary/10" href="/struktur-organisasi.html">Struktur Organisasi</a>
    </div>
  </div>
  <div class="relative dropdown">
    <button class="flex items-center gap-1 text-sm font-medium hover:text-primary">
      Akademik <span class="material-symbols-outlined text-sm">expand_more</span>
    </button>
    <div class="dropdown-menu absolute left-0 mt-2 w-64 rounded-lg bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 py-2">
      <a class="block px-4 py-2 text-sm hover:bg-primary/10" href="/akademik/kurikulum.html">Kurikulum</a>
      <div class="relative dropdown-submenu">
        <button class="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-primary/10 text-left">
          Kelompok Keahlian (KK) <span class="material-symbols-outlined text-sm">chevron_right</span>
        </button>
        <div class="dropdown-menu absolute left-full top-0 ml-1 w-72 rounded-lg bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 py-2">
          <a class="block px-4 py-2 text-sm hover:bg-primary/10" href="/akademik/kk-ai-ds.html">1. AI & Data Science</a>
          <a class="block px-4 py-2 text-sm hover:bg-primary/10" href="/akademik/kk-se-hci.html">2. Software Engineering & HCI</a>
          <a class="block px-4 py-2 text-sm hover:bg-primary/10" href="/akademik/kk-nsi.html">3. Network & Security</a>
        </div>
      </div>
    </div>
  </div>
  <div class="relative dropdown">
    <button class="flex items-center gap-1 text-sm font-medium hover:text-primary">
      Fasilitas <span class="material-symbols-outlined text-sm">expand_more</span>
    </button>
    <div class="dropdown-menu absolute left-0 mt-2 w-52 rounded-lg bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 py-2">
      <a class="block px-4 py-2 text-sm hover:bg-primary/10" href="/fasilitas/lab.html">Laboratorium</a>
      <a class="block px-4 py-2 text-sm hover:bg-primary/10" href="/fasilitas/perpustakaan.html">Perpustakaan</a>
    </div>
  </div>
  <a class="text-sm font-medium hover:text-primary" href="/kemahasiswaan.html">Kemahasiswaan</a>
  <a class="text-sm font-medium hover:text-primary" href="/blog.html">Berita</a>
`;

const MOBILE_NAV_LINKS = `
  <a class="block px-4 py-3 text-sm font-medium hover:bg-primary/10 rounded-lg" href="/index.html">Home</a>
  
  <p class="px-4 pt-4 pb-1 text-xs font-bold text-slate-400 uppercase tracking-widest">Profil</p>
  <a class="block px-4 py-2 text-sm hover:bg-primary/10 rounded-lg" href="/sejarah.html">Sejarah</a>
  <a class="block px-4 py-2 text-sm hover:bg-primary/10 rounded-lg" href="/visi-misi.html">Visi &amp; Misi</a>
  <a class="block px-4 py-2 text-sm hover:bg-primary/10 rounded-lg" href="/capaian-pembelajaran.html">Capaian Pembelajaran</a>
  <a class="block px-4 py-2 text-sm hover:bg-primary/10 rounded-lg" href="/struktur-organisasi.html">Struktur Organisasi</a>
  
  <p class="px-4 pt-4 pb-1 text-xs font-bold text-slate-400 uppercase tracking-widest">Akademik</p>
  <a class="block px-4 py-2 text-sm hover:bg-primary/10 rounded-lg" href="/akademik/kurikulum.html">Kurikulum</a>
  <div class="pl-4">
    <p class="px-4 pt-2 pb-1 text-[10px] font-bold text-primary uppercase">Kelompok Keahlian</p>
    <a class="block px-4 py-2 text-sm hover:bg-primary/10 rounded-lg" href="/akademik/kk-ai-ds.html">AI & Data Science</a>
    <a class="block px-4 py-2 text-sm hover:bg-primary/10 rounded-lg" href="/akademik/kk-se-hci.html">Software Engineering & HCI</a>
    <a class="block px-4 py-2 text-sm hover:bg-primary/10 rounded-lg" href="/akademik/kk-nsi.html">Network & Security</a>
  </div>
  
  <p class="px-4 pt-4 pb-1 text-xs font-bold text-slate-400 uppercase tracking-widest">Fasilitas</p>
  <a class="block px-4 py-2 text-sm hover:bg-primary/10 rounded-lg" href="/fasilitas/lab.html">Laboratorium</a>
  <a class="block px-4 py-2 text-sm hover:bg-primary/10 rounded-lg" href="/fasilitas/perpustakaan.html">Perpustakaan</a>
  
  <div class="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
    <a class="block px-4 py-3 text-sm font-medium hover:bg-primary/10 rounded-lg" href="/kemahasiswaan.html">Kemahasiswaan</a>
    <a class="block px-4 py-3 text-sm font-medium hover:bg-primary/10 rounded-lg" href="/blog.html">Berita</a>
  </div>
`;

const FOOTER_HTML = `
  <footer class="bg-slate-900 text-slate-300 py-16">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div class="col-span-1 md:col-span-1 space-y-6">
          <div class="flex items-center gap-2 text-white">
            <span class="material-symbols-outlined text-3xl text-primary">terminal</span>
            <span class="text-xl font-bold tracking-tight">Informatics <span class="text-primary">Dept</span></span>
          </div>
          <p class="text-sm leading-relaxed">Membangun generasi unggul di bidang teknologi informasi melalui pendidikan berkualitas dan riset inovatif.</p>
          <div class="flex gap-4">
            <a class="hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">public</span></a>
            <a class="hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">alternate_email</span></a>
            <a class="hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">podcasts</span></a>
          </div>
        </div>
        <div>
          <h5 class="text-white font-bold mb-6">Tautan Cepat</h5>
          <ul class="space-y-4 text-sm">
            <li><a class="hover:text-primary transition-colors" href="/visi-misi.html">Visi &amp; Misi</a></li>
            <li><a class="hover:text-primary transition-colors" href="/akademik/kurikulum.html">Kurikulum 2024</a></li>
            <li><a class="hover:text-primary transition-colors" href="/kemahasiswaan.html">Kemahasiswaan</a></li>
            <li><a class="hover:text-primary transition-colors" href="/blog.html">Berita</a></li>
          </ul>
        </div>
        <div>
          <h5 class="text-white font-bold mb-6">Hubungi Kami</h5>
          <ul class="space-y-4 text-sm">
            <li class="flex gap-3"><span class="material-symbols-outlined text-primary">location_on</span>Jl. Teknologi Modern No. 45, Kawasan Akademik, Jakarta</li>
            <li class="flex gap-3"><span class="material-symbols-outlined text-primary">call</span>+62 (21) 555-0123</li>
            <li class="flex gap-3"><span class="material-symbols-outlined text-primary">mail</span>info@informatika.ac.id</li>
          </ul>
        </div>
        <div>
          <h5 class="text-white font-bold mb-6">Lokasi Kampus</h5>
          <div class="rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all">
            <img class="w-full h-32 object-cover" alt="Map view of university campus location" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJBSbwWpqRA-wvYwGN4S7rtbg0_6RXmZ3NEOvXtvZ_2ud1uX9FWtyoXcg8TC_wz8F9v7lImuvMn8R90loC74E_3MjNdGq3I-yRpIamh5BFxtwSK65dd9GJMP9_NpT1dtoj8Hq7taVpFB775bUMF-ARY7IKs2JZRmot9lhA7yZGR3SiKiC-FHF_c-RH-7K_l0Y54LzU3nMiFtLCFSfLrS1vkETOY1MPHDijIKVn-uT_BbzA6pECvGNB1f68NSe0wVbN9NSOrC7-NvOF" />
          </div>
        </div>
      </div>
      <div class="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
        <p>© 2024 Departemen Informatika. All rights reserved.</p>
      </div>
    </div>
  </footer>`;

function injectNavbar() {
  const nav = document.getElementById('site-navbar');
  if (!nav) return;
  nav.innerHTML = `
    <header class="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          ${BRAND_HTML}
          <nav class="hidden md:flex space-x-6 items-center">${NAV_LINKS}</nav>
          <div class="flex items-center gap-4">
            <button class="md:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-90" id="mobile-menu-btn">
              <span class="material-symbols-outlined select-none">menu</span>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 px-4 py-4 space-y-1 max-h-[85vh] overflow-y-auto">
        ${MOBILE_NAV_LINKS}
      </div>
    </header>`;

  // Dropdown toggle logic
  const dropdownButtons = nav.querySelectorAll('.dropdown > button, .dropdown-submenu > button');
  dropdownButtons.forEach(button => {
    const menu = button.nextElementSibling;
    
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Close siblings
      const parentLi = button.parentElement;
      const siblings = Array.from(parentLi.parentElement.children);
      siblings.forEach(sibling => {
        if (sibling !== parentLi) {
          const siblingMenu = sibling.querySelector('.dropdown-menu');
          if (siblingMenu) siblingMenu.classList.remove('show');
          // Also close nested ones in siblings
          const nestedMenus = sibling.querySelectorAll('.dropdown-menu');
          nestedMenus.forEach(m => m.classList.remove('show'));
        }
      });

      menu.classList.toggle('show');
    });
  });

  // Close all dropdowns when clicking outside
  document.addEventListener('click', () => {
    nav.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
  });

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileIcon = mobileMenuBtn?.querySelector('.material-symbols-outlined');

  mobileMenuBtn?.addEventListener('click', () => {
    const isHidden = mobileMenu?.classList.toggle('hidden');
    if (mobileIcon) {
      mobileIcon.textContent = isHidden ? 'menu' : 'close';
    }
  });
}

function injectFooter() {
  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = FOOTER_HTML;
}

document.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
  injectFooter();
});
