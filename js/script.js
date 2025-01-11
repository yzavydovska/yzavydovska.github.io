document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = () => modal.classList.add('hidden');

    // Funkcja do pobierania obrazów jako BLOB
    async function fetchImages() {
        const imageUrls = [
            './images/image1.jpg',
            './images/image2.jpg',
            './images/image3.jpg',
            './images/image4.jpg',
            './images/image5.jpg',
            './images/image6.jpg',
            './images/image7.jpg',
            './images/image8.jpg',
            './images/image9.jpg',
        ];
        

        for (let i = 0; i < imageUrls.length; i++) {
            const imgBlob = await fetch(imageUrls[i]).then(res => res.blob());
            const imgUrl = URL.createObjectURL(imgBlob);
            
            const img = document.createElement('img');
            img.className = 'lazy';
            img.dataset.src = imgUrl;
            gallery.appendChild(img);
        }

        setupLazyLoading();
    }

    // Lazy loading obrazów
    function setupLazyLoading() {
        const lazyImages = document.querySelectorAll('.lazy');

        const lazyLoad = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        };

        const observer = new IntersectionObserver(lazyLoad, {
            rootMargin: '0px',
            threshold: 0.1,
        });

        lazyImages.forEach(img => observer.observe(img));
    }

    // Modal obsługa
    gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            modalImage.src = e.target.src;
            modal.classList.remove('hidden');
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
            closeModal();
        }
    });

    // Pobierz i wyświetl obrazy
    fetchImages();
});
