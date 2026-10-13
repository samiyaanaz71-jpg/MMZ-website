

const phones = [
  {
    cat: "keypad",
    brand: "Sego",
    name: "Note80x 4/64 27500",
    price: 3700,
    img: "SEGO 1.PNG"
  },
  {
    cat: "keypad",
    brand: "Sego",
    name: "Sego S24",
    price: 29999,
    img: "SEGO 1.PNG"
  },
  {
    cat: "keypad",
    brand: "Sego",
    name: "Sego Note80",
    price: 28500,
    img: "SEGO 1.PNG"
  },
  {
    cat: "keypad",
    brand: "Vgotel",
    name: "Vgotel Note 23",
    price: 26500,
    img: "vgotel-note-23.jpg"
  },
  {
    cat: "keypad",
    brand: "Infinix",
    name: "Infinix Hot 70 Pro",
    price: 31999,
    img: "infinix-hot-70-pro.JPG"
  },
  {
    cat: "new",
    brand: "Samsung",
    name: "Galaxy A15",
    price: 44999,
    img: "samsung.jpg"
  },
  {
    cat: "new",
    brand: "Oppo",
    name: "Oppo A3",
    price: 52999,
    img: "samsung.jpg"
  },
  {
    cat: "used",
    brand: "iPhone",
    name: "iPhone 11",
    price: 65000,
    img: "vivo.PNG"
  },
];

// original mob array: naam, pp and 24 entries here.
// mobileImage mein sirf path rakhy; alt HTML mein alag hota hai.
// Aakhri "vivo" path ko apni asli image ke filename se badlein.
let mob = [
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y11d.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y31d.jpg',
    mobileName: 'Vivo Y31d',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y31d.jpg',
    mobileName: 'Vivo Y31d',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-y05.jpg',
    mobileName: 'Vivo Y05',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  },
  {
    mobileImage: 'vivo-Y05.jpg',
    mobileName: 'vivo',
    mobileDEs: '4GB / 64GB',
    mobilePrice: 'PKR 41,500'
  }
];

// HTML mein buttons aur cards ki place find kry.
let tabs = document.querySelector('#tabs');
let brands = document.querySelector('#brands');
let count = document.querySelector('#count');
let grid = document.querySelector('#grid');
let box = document.querySelector('.box');
let search = document.querySelector('#search');

// Show all phones in start.
let cat = 'all';
let brand = 'All';

// names of category button.
const cats = {
  all: 'All Mobiles',
  new: 'New Smartphones',
  used: 'Used Android Phones',
  keypad: 'Keypad Phones'
};

// Category buttons cards se upar banaye Render category tabs dynamically.
function showTabs() {
  tabs.innerHTML = '';

  for (let key in cats) {
    let active = '';

    if (key === cat) {
      active = 'on';
    }

    tabs.innerHTML += `
      <button
        type="button"
        class="${active}"
        onclick="pickCat('${key}')">
        ${cats[key]}
      </button>
    `;
  }
}

// Selected category ke brands ki list banayein.
function showBrands() {
  let list = ['All'];

  for (let phone of phones) {
    if (cat !== 'all' && cat !== phone.cat) {
      continue;
    }

    if (!list.includes(phone.brand)) {
      list.push(phone.brand);
    }
  }

  if (cat === 'all' || cat === 'new') {
    list.push('Vivo');
  }

  brands.innerHTML = '';

  for (let name of list) {
    let active = '';

    if (name === brand) {
      active = 'on';
    }

    brands.innerHTML += `
      <button
        type="button"
        class="${active}"
        onclick="pickBrand('${name}')">
        ${name}
      </button>
    `;
  }
}

// show phone cards acc to filter and search.
function showCards() {
  grid.innerHTML = '';
  box.innerHTML = '';

  let total = 0;
  let word = search.value.trim().toLowerCase();

  for (let phone of phones) {
    // Jo phone category, brand ya search se match na ho, use chhor dein.
    if (cat !== 'all' && phone.cat !== cat) {
      continue;
    }

    if (brand !== 'All' && phone.brand !== brand) {
      continue;
    }

    let text = phone.name + ' ' + phone.brand;

    if (!text.toLowerCase().includes(word)) {
      continue;
    }

    let image = '';
    let status = 'NEW';

    if (phone.img) {
      image = `
        <img
          src="${phone.img}"
          alt="${phone.name}"
          onerror="this.hidden=true">
      `;
    }

    if (phone.cat === 'used') {
      status = 'PRE-OWNED';
    }

    // make card of one phone.
    let card = `
      <div class="card">
        <div class="photo">
          <span class="badge">${status}</span>
          ${image}
        </div>
        <div class="details">
          <p>${phone.brand}</p>
          <h3>${phone.name}</h3>
          <div class="price">
            <small>PKR</small> ${phone.price.toLocaleString('en-PK')}
          </div>
        </div>
      </div>
    `;

    grid.innerHTML += card;
    total++;
  }

  // Aapke mob array ke cards; array ka data wahi hai.
  for (let m of mob) {
    if (cat !== 'all' && cat !== 'new') {
      continue;
    }

    if (brand !== 'All' && brand !== 'Vivo') {
      continue;
    }

    let text = m.mobileName + ' ' + m.mobileDEs;

    if (!text.toLowerCase().includes(word)) {
      continue;
    }

    let card = `
      <div class="card">
        <div class="photo">
          <span class="badge">NEW</span>
          <img
            src="${m.mobileImage}"
            alt="${m.mobileName}"
            onerror="this.hidden=true">
        </div>
        <div class="details">
          <p>Vivo</p>
          <h3>${m.mobileName}</h3>
          <p>${m.mobileDEs}</p>
          <div class="price">${m.mobilePrice}</div>
        </div>
      </div>
    `;

    
    // let card = `
    //   <div class="card">
    //     <img src="${m.mobileImage}">
    //     <h3>${m.mobileName}</h3>
    //     <p>${m.mobileDEs}</p>
    //     <p>${m.mobilePrice}</p>
    //   </div>
    // `;

    box.innerHTML += card;
    total++;
  }

  // counting that shows in screen
  count.textContent = total + ' phones in collection';

  if (total === 0) {
    count.textContent = 'No phones found';
  }
}

// change category and brand come to all again
function pickCat(value) {
  cat = value;
  brand = 'All';
  showTabs();
  showBrands();
  showCards();
}

// Brand change and show matching cards.
function pickBrand(value) {
  brand = value;
  showBrands();
  showCards();
}

// update cards when type something on search.
search.oninput = showCards;

// show options and cards once open the page.
showTabs();
showBrands();
showCards();