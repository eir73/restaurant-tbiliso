const headerToggler = document.getElementById('navbar__toggler')
const togglerIcon = headerToggler.querySelector('.material-icons')
const navbarMenu = document.getElementById('navbar__menu')

const scrollbarWidth = window.innerWidth - document.body.clientWidth;

headerToggler.addEventListener('click', () => {
  navbarMenu.classList.toggle('open')
  if (navbarMenu.classList.contains('open')) {
    togglerIcon.innerHTML = 'close'
    document.body.style.position = 'fixed'
    document.body.style.paddingRight = scrollbarWidth + 'px'
  } else {
    togglerIcon.innerHTML = 'menu'
    document.body.style.position = 'unset'
    document.body.style.paddingRight = '0'
  }
})

if (window.innerWidth <= 992) {
  const swiper = new Swiper('.hall__items', {
    slideClass: 'hall__item',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    }
  })

  const swiperEvents = new Swiper('.event__items', {
    slideClass: 'event__item',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    }
  })
}

const bookForm = document.getElementById('book-form')
const deliveryForm = document.getElementById('delivery-form')

bookForm.onsubmit = e => {
  e.preventDefault()
  const name = bookForm.querySelector('#name').value
  const phone = bookForm.querySelector('#b-phone').value
  const date = bookForm.querySelector('#book-date').value
  const data = { name, phone, date }
  console.log(data)
}

deliveryForm.onsubmit = e => {
  e.preventDefault()
  const name = deliveryForm.querySelector('#name').value
  const phone = deliveryForm.querySelector('#d-phone').value
  const date = deliveryForm.querySelector('#delivery-date').value
  const address = deliveryForm.querySelector('#address').value
  const data = { name, phone, date, address }
  console.log(data)
}
  
// pop-up
const bookLinks = [...document.querySelectorAll('a[href="./book.html"]')]
const deliveryLinks = [...document.querySelectorAll('a[href="./delivery.html"]')]
const bookBlock = document.querySelector('.book__form-wr')
const bookWrap = document.querySelector('.book')
const bookClose = document.getElementById('book-close')
const deliveryBlock = document.querySelector('.delivery__form-wr')
const deliveryWrap = document.querySelector('.delivery')
const deliveryClose = document.getElementById('delivery-close')

bookWrap.addEventListener('click', (e) => {
  if (!bookBlock.contains(e.target) || e.target === bookClose) {
    bookWrap.classList.remove('open')
    bookWrap.classList.remove('no-transition')
  }
})

bookLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    bookWrap.classList.add('open')
    setTimeout(() => {
      bookWrap.classList.add('no-transition')
    }, 1000)
  })
})

deliveryWrap.addEventListener('click', (e) => {
  if (!deliveryBlock.contains(e.target) || e.target == deliveryClose) {
    deliveryWrap.classList.remove('no-transition')
    deliveryWrap.classList.remove('open')
  }
})

deliveryLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    deliveryWrap.classList.add('open')
    setTimeout(() => {
      deliveryWrap.classList.add('no-transition')
    }, 1000)
  })
})


function initMap() {
  const tbilisoPosition = { lat: 48.74148810491459, lng: 37.58627156950326 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: tbilisoPosition,
    zoom: 16,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
    ]
  })
  const marker = new google.maps.Marker({
    position: tbilisoPosition,
    map: map,
  });
}
//# sourceMappingURL=main.js.map
