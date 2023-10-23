const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuOption = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

function toggleDesktopMenu() {
  const isAsideOpen = !aside.classList.contains("inactive");

  if (isAsideOpen) {
    //si está apareciendo (si NO tiene el inactive entonces)
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function togglemobileMenu() {
  const isAsideOpen = !aside.classList.contains("inactive");

  if (isAsideOpen) {
    //si está apareciendo (si NO contiene el inactive entonces)
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function togglemenuCarritoIcon() {
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
  const isDesktopMenuClose = desktopMenu.classList.contains("inactive");

  if (isMobileMenuOpen) {
    //si está apareciendo (si NO contiene el inactive entonces )
    mobileMenu.classList.add("inactive");
  }

  if (!isDesktopMenuClose) {
    desktopMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}

menuEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuOption.addEventListener("click", togglemobileMenu);
menuCarritoIcon.addEventListener("click", togglemenuCarritoIcon);

const productList = [];
productList.push({
  nombre: "NanamiN",
  precio: 120,
  img: "https://i.pinimg.com/564x/b6/15/14/b615141019ed5ed2e1c05d8e0cedcfe1.jpg",
});
productList.push({
  nombre: "Toji",
  precio: 120,
  img: "https://i.pinimg.com/564x/cc/68/61/cc686119fdc49e789c4fd5154c0d8e71.jpg",
});
productList.push({
  nombre: "Gojo",
  precio: 120,
  img: "https://i.pinimg.com/564x/0e/c2/75/0ec275c025ad3c34ba81a10122a906fd.jpg",
});
productList.push({
  nombre: "Geto",
  precio: 120,
  img: "https://i.pinimg.com/564x/14/60/52/146052b3da9d5615b9a8633c56e9f76a.jpg",
});
productList.push({
  nombre: "Maki",
  precio: 120,
  img: "https://i.pinimg.com/564x/e3/4f/d5/e34fd553dc10859c15ede139124924dd.jpg",
});
productList.push({
  nombre: "Sukuna",
  precio: 120,
  img: "https://i.pinimg.com/564x/2b/ba/a1/2bbaa1dbab2a9e21b1f5708ae9a68043.jpg",
});
productList.push({
  nombre: "Choso",
  precio: 120,
  img: "https://i.pinimg.com/564x/bf/15/28/bf15288e770855e752bdd33191af30d7.jpg",
});
productList.push({
  nombre: "Miwa",
  precio: 120,
  img: "https://i.pinimg.com/564x/c3/f7/53/c3f75397a518f216992e798b10b813d1.jpg",
});
productList.push({
  nombre: "Inumaki",
  precio: 120,
  img: "https://i.pinimg.com/564x/50/53/4f/50534f619861c35b6b3e0aec9f80abed.jpg",
});
productList.push({
  nombre: "Panda",
  precio: 120,
  img: "https://i.pinimg.com/564x/f3/3a/44/f33a443b7f13794338fc5903eab7c20e.jpg",
});
productList.push({
  nombre: "Yuii",
  precio: 120,
  img: "https://i.pinimg.com/564x/77/30/ee/7730eedf4de9e2d891fec67ef9b0001f.jpg",
});
productList.push({
  nombre: "Megumi",
  precio: 120,
  img: "https://i.pinimg.com/564x/dc/d4/2f/dcd42f597e669d4c9fda5873fd57c78e.jpg",
});
productList.push({
  nombre: "Nobara",
  precio: 120,
  img: "https://i.pinimg.com/564x/68/9d/90/689d90227f73a976a263efaf5502ed37.jpg",
});
productList.push({
  nombre: "Yuta",
  precio: 120,
  img: "https://i.pinimg.com/564x/a8/dd/a4/a8dda49937b9d0a1cdf29ff40eccb178.jpg",
});
productList.push({
  nombre: "Shoko",
  precio: 120,
  img: "https://i.pinimg.com/564x/a3/28/f4/a328f416b088d1043b3ef90901a30659.jpg",
});
productList.push({
  nombre: "Momo",
  precio: 120,
  img: "https://i.pinimg.com/564x/f5/81/cf/f581cf41450ad8a4daa64d0926b4f630.jpg",
});
productList.push({
  nombre: "Mai",
  precio: 120,
  img: "https://i.pinimg.com/564x/09/73/1b/09731b23fdb0bebb0945fd0afcf63fba.jpg",
});
productList.push({
  nombre: "Kamo",
  precio: 120,
  img: "https://i.pinimg.com/564x/9b/c8/77/9bc87755f024a745f016dde1891c6f62.jpg",
});
/* chainsaw */
productList.push({
  nombre: "Kobeni",
  precio: 120,
  img: "https://i.pinimg.com/564x/0a/34/af/0a34af37bca7773566321f3e79175a64.jpg",
});
productList.push({
  nombre: "Makima",
  precio: 120,
  img: "https://i.pinimg.com/564x/34/3b/cc/343bccfedce2e7a87f21e607a15e6545.jpg",
});
productList.push({
  nombre: "Power",
  precio: 120,
  img: "https://i.pinimg.com/564x/8f/e3/93/8fe393bddf99f66fb7216db865b0d472.jpg",
});
productList.push({
  nombre: "Denji",
  precio: 120,
  img: "https://i.pinimg.com/564x/4a/4d/4c/4a4d4cd827bab88c5c94e52b08c023ee.jpg",
});
productList.push({
  nombre: "Aki",
  precio: 120,
  img: "https://i.pinimg.com/564x/9a/3f/2f/9a3f2f92bb3f1372faae33b9b430657d.jpg",
});
productList.push({
  nombre: "Reze",
  precio: 120,
  img: "https://i.pinimg.com/564x/fc/6f/80/fc6f80ce94009c5c6e08dd61db293639.jpg",
});

/* <div class="product-card">
          <img
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
          <div class="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <img src="./icons/bt_add_to_cart.svg" alt="" />
            </figure>
          </div>
        </div> */

function renderProducts(arr) {
  for (product of arr) {
    /* por cada producto del array hace: */
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.img);
    /* product = {name, price, image} -> product.image */

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const price = document.createElement("p");
    price.innerText = "$" + product.precio;

    const name = document.createElement("p");
    name.innerText = product.nombre;

    const productInfoFigure = document.createElement("figure");

    productInfoDiv.appendChild(price);
    productInfoDiv.appendChild(name);

    const imglogo = document.createElement("img");
    imglogo.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(imglogo);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
