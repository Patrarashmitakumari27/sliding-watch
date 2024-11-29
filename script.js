const sectionData = {
    perPage: 1,
    blocks: [
        {
            heading: "Exuisite Watches",
            preheading1: "Gold Luxury,",
            preheading2:"Choose Us",
            description:
                "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
            productPrice: "$499.00",
            productUrl: "images/Group 4 (2).png",
            ambientColor: { from: "#f4a764", to: "#ffdec2" },
        },
        {
            heading: "Dainty Timepieces",
            preheading1: "Sliver Luxury,",
            preheading2:"Choose Us",
            description:
                "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
            productPrice: "$469.00",
            productUrl: "images/Watches.png",
            ambientColor: { from: "#adb0b0", to: "#e1e1e1" },
        },
        {
            heading: "Elegant Timepieces",
            preheading1: "Choose Luxury,",
            preheading2:"Choose Us",
            description:
                "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
            productPrice: "$529.00",
            productUrl: "images/Group 6.png",
            ambientColor: { from: "#30a357", to: "#75e39a" },
        },
        {
            heading: "Refined Timepieces",
            preheading1: "Choose Luxury,",
            preheading2:"Choose Us",
            description:"Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
            productPrice: "$599.00",
            productUrl: "images/Group 7.png",
            ambientColor: { from: "#f24f4f", to: "#ffa845" },
        },
    ],
};

let splideMarkup = "";
sectionData.blocks.forEach((block) => {
    splideMarkup += `
        <li class="splide__slide" data-color-from="${block.ambientColor.from}" data-color-to="${block.ambientColor.to}">
            <div class="content_wrapper">
                    <div class="content_wrapper__text">
                        <h1 class="heading">${block.heading}</h1>
                        <h3 class="preheading">${block.preheading1} <span>${block.preheading2}</span></h3>
                        <p class="description">${block.description}</p>
                        <h1 class="price">${block.productPrice}</h1>
                        <img class="share-icon" src="images/Frame 6.png" alt="logo-share"/>
                    </div>
                    <div class="image_wrapper">
                        <img src="${block.productUrl}" alt="${block.heading} class="image_div">
                    </div>
            </div>
        </li>`;
});

const splideList = document.querySelector("ul.splide__list");
const pageBackDrop = document.querySelector("body");

if (splideList) {
    splideList.innerHTML = splideMarkup;

    const splide = new Splide(".splide", {
        type: "fade",

        perPage: sectionData.perPage,
    });

    splide.on("move", (index) => {
        const currentSlide = splideList.children[index];
        const colorFrom = currentSlide.getAttribute("data-color-from");
        const colorTo = currentSlide.getAttribute("data-color-to");
        if (colorFrom && colorTo) {
            pageBackDrop.style.background = `linear-gradient(to right, ${colorFrom}, ${colorTo})`;
        }
    });

    
    const initialSlide = splideList.children[0];
    const initialColorFrom = initialSlide.getAttribute("data-color-from");
    const initialColorTo = initialSlide.getAttribute("data-color-to");
    pageBackDrop.style.background = `linear-gradient(to right, ${initialColorFrom}, ${initialColorTo})`;

    splide.mount();
} else {
    console.error('Element with class "splide__list" not found.');
}
