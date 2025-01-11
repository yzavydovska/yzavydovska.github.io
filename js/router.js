let pageUrls = {
    about: '/index.html?about',
    contact: '/index.html?contact',
    gallery: '/index.html?gallery'
};

function OnStartUp() {
    popStateHandler();
}

OnStartUp();

document.querySelector('#about-link').addEventListener('click', () => {
    let stateObj = { page: 'about' };
    document.title = 'About';
    history.pushState(stateObj, "about", "?about");
    RenderAboutPage();
});

document.querySelector('#contact-link').addEventListener('click', () => {
    let stateObj = { page: 'contact' };
    document.title = 'Contact';
    history.pushState(stateObj, "contact", "?contact");
    RenderContactPage();
});

document.querySelector('#gallery-link').addEventListener('click', () => {
    let stateObj = { page: 'gallery' };
    document.title = 'Gallery';
    history.pushState(stateObj, "gallery", "?gallery");
    RenderGalleryPage();
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function RenderAboutPage() {
    document.querySelector('main').innerHTML = `
        <h1 class="title">About Me</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>`;
}

function RenderContactPage() {
    document.querySelector('main').innerHTML = `
        <h1 class="title">Contact Me</h1>
        <form id="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required minlength="3" />
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" required minlength="10"></textarea>
            
            <div id="captcha-container">
                <label for="captcha">Captcha: What is 5 + 3?</label>
                <input type="text" id="captcha" name="captcha" required />
            </div>
            
            <button type="submit">Send</button>
        </form>`;

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Simple form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const captcha = document.getElementById('captcha').value.trim();

        if (name.length < 3) {
            alert('Name must be at least 3 characters long.');
            return;
        }
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }
        if (message.length < 10) {
            alert('Message must be at least 10 characters long.');
            return;
        }
        if (captcha !== '8') { // 5 + 3 = 8
            alert('Captcha is incorrect.');
            return;
        }

        alert('Form submitted successfully!');
    });
}


function RenderGalleryPage() {
    document.querySelector('main').innerHTML = `
    <h1 class="title">Gallery</h1>
    <div class="gallery" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
        ${Array(9).fill(null).map((_, i) => `
            <img class="gallery-item lazy" 
                 data-src="./images/image${i + 1}.jpg" 
                 alt="Image ${i + 1}" 
                 style="width: 100%; cursor: pointer;" />
        `).join('')}
    </div>
    <div id="modal" class="modal hidden">
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img id="modal-image" src="" alt="Expanded Image" />
        </div>
    </div>`;


    const lazyImages = document.querySelectorAll('.lazy');
    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        rootMargin: '0px',
        threshold: 0.1
    });

    lazyImages.forEach(img => observer.observe(img));

    // Modal functionality
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = () => modal.classList.add('hidden');

    document.querySelectorAll('.gallery-item').forEach(img => {
        img.addEventListener('click', () => {
            modalImage.src = img.src;
            modal.classList.remove('hidden');
        });
    });

    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal') || event.target.classList.contains('modal-close')) {
            closeModal();
        }
    });
}


    const observer = new IntersectionObserver(lazyLoad, {
        rootMargin: '0px',
        threshold: 0.1
    });

    lazyImages.forEach(img => observer.observe(img));


function popStateHandler() {
    let loc = window.location.href.toString().split(window.location.host)[1];
    if (loc === pageUrls.about) RenderAboutPage();
    if (loc === pageUrls.contact) RenderContactPage();
    if (loc === pageUrls.gallery) RenderGalleryPage();
}

window.onpopstate = popStateHandler;
