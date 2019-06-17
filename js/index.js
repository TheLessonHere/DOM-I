const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent["nav"]["img-src"])

let newAppend = document.createElement('a');
let newPrepend = document.createElement('a');

newAppend.href = '#';
newAppend.textContent = 'Appended';

newPrepend.href = '#';
newPrepend.textContent = 'Prepended';

let headerNav = document.querySelector('nav');

headerNav.appendChild(newAppend);
headerNav.prepend(newPrepend);

let navLinks = document.querySelectorAll("nav a");
navLinks[1].textContent = siteContent['nav']['nav-item-1'];
navLinks[2].textContent = siteContent['nav']['nav-item-2'];
navLinks[3].textContent = siteContent['nav']['nav-item-3'];
navLinks[4].textContent = siteContent['nav']['nav-item-4'];
navLinks[5].textContent = siteContent['nav']['nav-item-5'];
navLinks[6].textContent = siteContent['nav']['nav-item-6'];
navLinks.forEach(function(currentValue) {
  currentValue.style.color = 'green';
});

let firstHeadline = document.querySelector('.cta-text h1');
firstHeadline.textContent = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent['cta']['img-src'];

let mainContentAllH4 = document.querySelectorAll('.main-content h4');
mainContentAllH4[0].textContent = siteContent['main-content']['features-h4'];
mainContentAllH4[1].textContent = siteContent['main-content']['about-h4'];
mainContentAllH4[2].textContent = siteContent['main-content']['services-h4'];
mainContentAllH4[3].textContent = siteContent['main-content']['product-h4'];
mainContentAllH4[4].textContent = siteContent['main-content']['vision-h4'];

let mainTextContent = document.querySelectorAll('.main-content p');
mainTextContent[0].textContent = siteContent['main-content']['features-content'];
mainTextContent[1].textContent = siteContent['main-content']['about-content'];
mainTextContent[2].textContent = siteContent['main-content']['services-content'];
mainTextContent[3].textContent = siteContent['main-content']['product-content'];
mainTextContent[4].textContent = siteContent['main-content']['vision-content'];

let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

let contactAllText = document.querySelectorAll('.contact p');
contactAllText[0].textContent = siteContent['contact']['address'];
contactAllText[1].textContent = siteContent['contact']['phone'];
contactAllText[2].textContent = siteContent['contact']['email'];

let footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];