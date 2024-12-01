const data = [
    {
      "title": "Exquisite Watches",
      "subtitle1": "Gold Luxury,",
      "subtitle2": "Choose Us",
      "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style With Timeless Elegance and Precision Craftsmanship - watch",
      "price": "$499.00",
      "image": "./images/Group 4 (2).png",
      "backgroundColor": { from: "#f4a764", to: "#ffdec2" },
    },
    {
      "title": "Dainty Timepieces",
      "subtitle1": "Sliver Luxury,",
      "subtitle2": "Choose Us",
      "description": "Explore the ideal Timeplece for Any Moment and Enhance Your Style with Timeless Sophistication and impeccable Craftmanship - timepiece",
      "price": "$469.00",
      "image": "images/Watches.png",
      "backgroundColor": { from: "#adb0b0", to: "#e1e1e1" },
    },
    {
      "title": "Elegant Timepieces",
      "subtitle1": "Choose Luxury,",
      "subtitle2": "Choose Us",
      "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style With Timeless Elegance and Precision Craftsmanship - watch",
      "price": "$529.00",
      "image": "./images/Watches (1).png",
      "backgroundColor": { from: "#30a357", to: "#75e39a" },
    },
    {
      "title": "Refined Timepieces",
      "subtitle1": "Choose Luxury,",
      "subtitle2": "Choose Us",
      "description": "Explore the ideal Timeplece for Any Moment and Enhance Your Style with Timeless Sophistication and impeccable Craftmanship - timepiece",
      "price": "$599.00",
      "image": "./images/Watches (2).png",
      "backgroundColor": { from: "#f24f4f", to: "#ffa845" },
    }
  ];
  
  
  const title = document.getElementById('title');
  const subtitle1 = document.getElementById('subtitle1');
  const subtitle2 = document.getElementById('subtitle2');
  const description = document.getElementById('description');
  const price = document.getElementById('price');
  
  
  const list = document.querySelector('.splide__list');
  data.forEach(item => {
    const li = document.createElement('li');
    li.className = 'splide__slide';
    li.innerHTML =
    `<div class="watch-container">
    <img src="${item.image}" alt="${item.title}" class="watch-image">
    <img src="./images/Ellipse 4 - Copy.png" alt="shadow" class="watch-shadow">
    </div>`;
    list.appendChild(li);
  });
  
  
  const splide = new Splide('#carousel', {
    type: 'fade',
    perPage: 1,
    autoplay: false,
    interval: 3000,
    speed: 2000,   
    arrows: true,
    pagination: false,
    classes: {
      arrows: 'splide__arrows dmrishabh-arrow',
      arrow: 'splide__arrow your-class-arrow',
      prev: 'splide__arrow--prev dmrishabh-arrow-prev',
      next: 'splide__arrow--next dmrishabh-arrow-next',
  },

  });
  
  
  splide.on('move', (newIndex) => {
    const currentItem = data[newIndex % data.length];
    title.textContent = currentItem.title;
    subtitle1.textContent = currentItem.subtitle1;
    subtitle2.textContent = currentItem.subtitle2;
    description.textContent = currentItem.description;
    price.textContent = currentItem.price;
  
    
    document.body.style.background = `linear-gradient(to right, ${currentItem.backgroundColor.from}, ${currentItem.backgroundColor.to})`;
  });
  
  splide.mount();
  
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove('open');
  }
});
