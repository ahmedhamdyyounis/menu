//items
const menuArray = [
    {
    id:1,
        img: "item-1.jpeg",
    itemName: "Buttermilk Pancakes",
    price: 15.99,
    cat: "breakfast",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
},
{
    id:2,
    img: "item-2.jpeg",
    itemName: "Diner Double",
    price: 13.99,
    cat: "breakfast",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
},
{
    id:3,
    img: "item-3.jpeg",
    itemName: "Godzilla Milkshake",
    price: 6.99,
    cat: "breakfast",
    desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
},
{
    id:4,
    img: "item-4.jpeg",
    itemName: "Country Delight",
    price: 20.99,
    cat: "lunch",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"
},
{
    id:5,
    img: "item-5.jpeg",
    itemName: "Egg Attack",
    price: 22.99,
    cat: "lunch",
    desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
},
{
    id:6,
    img: "item-6.jpeg",
    itemName: "Oreo Dream",
    price: 18.99,
    cat: "dinner",
    desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
},
{
    id:7,
    img: "item-7.jpeg",
    itemName: "Bacon Overflow",
    price: 8.99,
    cat: "shakes",
    desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
},
{
    id:8,
    img: "item-8.jpeg",
    itemName: "American Classic",
    price: 12.99,
    cat: "shakes",
    desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
},
{
    id:9,
    img: "item-9.jpeg",
    itemName: "Quarantine Buddy",
    price: 16.99,
    cat: "dinner",
    desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
},
{
    id:10,
    img: "item-10.jpeg",
    itemName: "Steak Dinner",
    price: 39.99,
    cat: "shakes",
    desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
},
{
    id:11,
    img: "item-10.jpeg",
    itemName: "Steak Dinner",
    price: 20.99,
    cat: "Manga",
    desc: " taste goood."
}
]

let menuItems = document.querySelector('.menu-items')

let btnsSection = document.querySelector('.btns-wrapper')

//load items
window.addEventListener('DOMContentLoaded', function () {
    menuItemsDisplay(menuArray)
    
    const categories = menuArray.map(function (element) {
        return element.cat
    })
    
    const finalCategories = categories.filter(function (element, index) {
        return categories.indexOf(element) === index
        
    })
    finalCategories.unshift('all')
    console.log(finalCategories)
    for (let i = 0; i< finalCategories.length; i++) {
        btnsSection.innerHTML += `<div class="filter-btn" data-filter="${finalCategories[i]}">${finalCategories[i]}</div>`
    }
    let filterBtns = document.querySelectorAll('.filter-btn')
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.dataset.filter
            const menuItemsd = menuArray.filter(function (e) {
                if ( category === e.cat) {
                
                    return e
                }
                
            })
            if (category === "all") {
                menuItemsDisplay(menuArray)
            } else {
                menuItemsDisplay(menuItemsd)
            }
        })
    })
    
})







function menuItemsDisplay(menu) {
    let displayMenu =  menu.map(function(element) {
        
        return `                
        <div class="item">
        <div class="img-wrapper">
            <img src="./images/${element.img}" alt="">
            </div>
            <div class="content">
            <header>
            <h4>${element.itemName}</h4>
            <p>$${element.price}</p>
            </header>
            <p>${element.desc}</p>
            </div>
            </div>
            `
        })
        displayMenu = displayMenu.join('')

        menuItems.innerHTML = displayMenu
}

// my way
// for (let i = 0; i<menuArray.length; i++) {
//     let displayItems = `<div class="item">
//             <div class="img-wrapper">
//                 <img src="./images/${menuArray[i].img}" alt="">
//                 </div>
//                 <div class="content">
//                 <header>
//                 <h4>${menuArray[i].itemName}</h4>
//                 <p>$${menuArray[i].price}</p>
//                 </header>
//                 <p>${menuArray[i].desc}</p>
//             </div>
//             </div>`

//             menuItems.innerHTML += displayItems
//         }

