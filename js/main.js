document.addEventListener('DOMContentLoaded', () => {
  const newsCarouselTrack = document.getElementById('news-carousel-track');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');

  if (!newsCarouselTrack) return;

  let currentSlide = 0;
  let itemsPerView = getItemsPerView();
  let totalItems = 0;

  function getItemsPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  // Fetch News Data
  fetch('data/news.json')
    .then(response => response.json())
    .then(data => {
      totalItems = data.length;
      renderNews(data);
      updateCarousel();
    })
    .catch(error => console.error('Error fetching news:', error));

  function renderNews(newsList) {
    newsCarouselTrack.innerHTML = '';
    newsList.forEach(news => {
      const articleHTML = `
        <div class="carousel-slide">
          <article class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 group h-full flex flex-col">
            <a href="blog-post.html?id=${news.id}" class="aspect-video overflow-hidden shrink-0 block">
              <img
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="${news.alt}"
                src="${news.image}"
              />
            </a>
            <div class="p-6 flex flex-col flex-grow">
              <div class="flex gap-2 mb-3 shrink-0">
                <span class="text-xs font-black text-primary uppercase tracking-wider">${news.category}</span>
                <span class="text-xs text-slate-400 font-medium">• ${news.date}</span>
              </div>
              <h4 class="text-xl font-black mb-3 line-clamp-2 leading-snug group-hover:text-primary transition-colors shrink-0">${news.title}</h4>
              <p class="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-5 flex-grow leading-relaxed">${news.excerpt}</p>
              <a class="inline-flex items-center gap-2 text-primary text-sm font-black mt-auto hover:gap-3 transition-all shrink-0" href="blog-post.html?id=${news.id}">
                Baca Selengkapnya
                <span class="material-symbols-outlined text-[18px]">arrow_right_alt</span>
              </a>
            </div>
          </article>
        </div>
      `;
      newsCarouselTrack.insertAdjacentHTML('beforeend', articleHTML);
    });
  }

  function updateCarousel() {
    itemsPerView = getItemsPerView();
    // Prevent scrolling past the end
    const maxSlide = Math.max(0, totalItems - itemsPerView);
    if (currentSlide > maxSlide) {
      currentSlide = maxSlide;
    }
    
    const slidePercentage = 100 / itemsPerView;
    newsCarouselTrack.style.transform = `translateX(-${currentSlide * slidePercentage}%)`;
    
    // Update button states
    btnPrev.disabled = currentSlide === 0;
    btnNext.disabled = currentSlide >= maxSlide;
    
    if (btnPrev.disabled) {
        btnPrev.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        btnPrev.classList.remove('opacity-50', 'cursor-not-allowed');
    }

    if (btnNext.disabled) {
        btnNext.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        btnNext.classList.remove('opacity-50', 'cursor-not-allowed');
    }
  }

  btnPrev.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  });

  btnNext.addEventListener('click', () => {
    const maxSlide = Math.max(0, totalItems - itemsPerView);
    if (currentSlide < maxSlide) {
      currentSlide++;
      updateCarousel();
    }
  });

  window.addEventListener('resize', () => {
      // Re-evaluate slide position on resize
      updateCarousel();
  });
});
