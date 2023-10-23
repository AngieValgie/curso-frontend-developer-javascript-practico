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
  nombre: "Gojo",
  precio: 120,
  img: "https://i.pinimg.com/736x/f6/c1/3d/f6c13db0c499f4397f2b919f59eeb6a1.jpg",
});
productList.push({
  nombre: "Toji",
  precio: 120,
  img: "https://i.pinimg.com/564x/89/bc/34/89bc34d2ac73db938955dbc72b01df35.jpg",
});
productList.push({
  nombre: "Geto",
  precio: 120,
  img: "https://i.pinimg.com/564x/86/bc/57/86bc5772ac109ecc9fd1c382bd82d437.jpg",
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
