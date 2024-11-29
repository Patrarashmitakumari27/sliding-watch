const data = [
    {
      "title": "Refined Timepieces",
      "subtitle": "Choose Luxury, Choose Us",
      "description": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
      "price": "$599.00",
      "image": "./images/Group 4 (2).png",
      "backgroundColor": { from: "#f4a764", to: "#ffdec2" },
    },
    {
      "title": "Elite Watches",
      "subtitle": "Exude Confidence",
      "description": "Timeless sophistication for every occasion, crafted to perfection to complement your lifestyle.",
      "price": "$699.00",
      "image": "images/Watches.png",
      "backgroundColor": { from: "#adb0b0", to: "#e1e1e1" },
    },
    {
      "title": "Luxury Timepieces",
      "subtitle": "Own the Moment",
      "description": "Designed with precision, each watch embodies unmatched craftsmanship and elegance.",
      "price": "$799.00",
      "image": "./images/Group 6.png",
      "backgroundColor": { from: "#30a357", to: "#75e39a" },
    },
    {
      "title": "Classic Watches",
      "subtitle": "Timeless Style",
      "description": "Elevate your everyday look with classic designs and impeccable functionality.",
      "price": "$899.00",
      "image": "images/Group 7.png",
      "backgroundColor": { from: "#f24f4f", to: "#ffa845" },
    }
  ];
  
  
  const title = document.getElementById('title');
  const subtitle = document.getElementById('subtitle');
  const description = document.getElementById('description');
  const price = document.getElementById('price');
  
  
  const list = document.querySelector('.splide__list');
  data.forEach(item => {
    const li = document.createElement('li');
    li.className = 'splide__slide';
    li.innerHTML = `<img src="${item.image}" alt="${item.title}">`;
    list.appendChild(li);
  });
  
  
  const splide = new Splide('#carousel', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: false,
  });
  
  
  splide.on('move', (newIndex) => {
    const currentItem = data[newIndex % data.length];
    title.textContent = currentItem.title;
    subtitle.textContent = currentItem.subtitle;
    description.textContent = currentItem.description;
    price.textContent = currentItem.price;
  
    
    document.body.style.background = `linear-gradient(to right, ${currentItem.backgroundColor.from}, ${currentItem.backgroundColor.to})`;
  });
  
  splide.mount();
  