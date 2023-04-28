function openCartNav()
{
  if(document.getElementById("search-nav").style.opacity == "1")
  {
    closeSearchNav();
  }
  if(document.getElementById("mini-menu-container").style.transform = "translateX(-340px)")
  {
    closeMenu();
  }
  document.querySelector('.cart-footer').classList.add('cart-footer-animation');
  document.getElementById("cart-nav").style.transform = "translateX(0)";
  document.getElementById("cart-background").style.opacity ="1";
  document.getElementById("cart-background").style.zIndex="12";
  document.body.style.overflow = "hidden";
}

function openMenu()
{
  if(document.getElementById("search-nav").style.opacity == "1")
  {
    closeSearchNav();
  }
  document.getElementById("mini-menu-container").style.transform = "translateX(0)";
  document.getElementById("cart-background").style.opacity ="1";
  document.getElementById("cart-background").style.zIndex="11";
  document.body.style.overflow = "hidden";
}

function closeMenu()
{
    document.getElementById("mini-menu-container").style.transform = "translateX(-340px)";
    document.getElementById("cart-background").style.opacity ="0";
    document.getElementById("cart-background").style.zIndex="-1";
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = 'hidden';
}

function closeCartNav()
{
    document.getElementById("cart-nav").style.transform = "translateX(400px)";
    document.getElementById("cart-background").style.opacity ="0";
    document.getElementById("cart-background").style.zIndex="-1";
    document.querySelector('.cart-footer').classList.remove('cart-footer-animation');
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = 'hidden';
}

function openSearchNav()
{
  document.getElementById("search-nav").style.transform = "translateY(0)";
  document.getElementById("search-nav").style.opacity = "1";
  document.getElementById("search-nav").style.zIndex = "10";
  document.getElementById("cart-background").style.opacity = "12";
  document.getElementById("cart-background").style.zIndex = "5";
  document.body.style.overflow = "hidden";
  document.getElementById("header").style.backgroundColor = "black";
}

function closeSearchNav()
{
  document.getElementById("search-nav").style.transform = "translateY(-83px)";
  setTimeout(function() {document.getElementById("search-nav").style.opacity = "0";
    
  }, 100);
  document.getElementById("search-nav").style.zIndex = "0";
  document.getElementById("cart-background").style.opacity ="0";
  document.getElementById("cart-background").style.zIndex="-1";
  document.body.style.overflowY = "auto";
    document.body.style.overflowX = 'hidden';
  document.getElementById("header").style.backgroundColor = "";
}

function changeLayout1()
{
  document.getElementById("layout").style.gridTemplateColumns = "1fr 1fr";
  document.getElementById("block1").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block2").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block3").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block4").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block5").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block6").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block7").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block8").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block9").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block10").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block11").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block12").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block13").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById('block14').style.backgroundColor = 'rgb(85, 84, 83)';
}

function changeLayout2()
{
  document.getElementById("layout").style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
  document.getElementById("block1").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block2").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block3").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block4").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block5").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block6").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block7").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block8").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block9").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block10").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block11").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block12").style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block13").style.backgroundColor = 'rgb(229, 227, 219)';
}

function changeLayout3()
{
   document.getElementById("layout").style.gridTemplateColumns = "1fr";
  document.getElementById('block14').style.backgroundColor = 'rgb(229, 227, 219)';
  document.getElementById("block1").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block2").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block3").style.backgroundColor = 'rgb(85, 84, 83)';
  document.getElementById("block4").style.backgroundColor = 'rgb(85, 84, 83)';
}

function sortMenu()
{
  var sc = document.getElementById("sort-container");
  var check = window.getComputedStyle(sc , null).opacity.toString();
  if(check == "1")
  {
    sc.style.opacity = "0";
    sc.style.pointerEvents = "none";
    document.body.style.overflow = "auto";
  }
  else
  {
    sc.style.opacity = "1";
  sc.style.pointerEvents = "auto";
  document.body.style.overflow = "hidden";
  }
}

const cartItemEl = document.querySelector('.cart-body');
const subTotalEl = document.querySelector('.cart-footer .custom-button');
const totalItemInCartEl = document.querySelector('.menu-cart');
const productAmountTextEl = document.querySelector('.product-amount-text');

let cart = JSON.parse(localStorage.getItem('CART')) || [];
updateCart();

function testAddToCart(id)
{
  for(let i=0;i<Number(productAmountTextEl.value);i++)
    setTimeout(addToCart(id),100);
}

function addToCart(id)
{
    if(cart.some((item) => item.id === id))
  {
    changeNumberOfUnit('plus',id);
  }
  else
  {
  const item = product.find((product)=>product.id===id);
  cart.push({
    ...item,
    numberOfUnits: 1,
  });
  }
  updateCart()
  openCartNav();
}

function updateCart()
{
  renderCartItem();
  renderSubTotal();

  localStorage.setItem('CART',JSON.stringify(cart));
}

function reduceString(item)
{
  return item.slice(0,17) + ' ...';
}

function renderCartItem()
{
  cartItemEl.innerHTML='';
  cart.forEach((item) =>
  {
    cartItemEl.innerHTML += `
    <div class="cart-item-container">
          <div class="item-flexbox">
            <div>
              <img src="${item.imgSrc}" class="cart-item-image" />
            </div>
            <div class="cart-item-info">
              <div class="cart-item-name">${reduceString(item.name)}</div>
              <div class="cart-item-price">$ ${item.price}</div>
              <div class="cart-item-bottom">
                <div class="cart-change-amount">
                  <div class="cart-change-minus" onclick="changeNumberOfUnit('minus',${item.id})">-</div>
                  <div class="cart-change-input">${item.numberOfUnits}</div>
                  <div class="cart-change-plus" onclick="changeNumberOfUnit('plus',${item.id})">+</div>
                </div>
                <button class="custom-button" onclick='removeItemFromCart(${item.id})'>REMOVE</button>
              </div>
            </div>
          </div>
        </div>
    `;
  })
}

function changeNumberOfUnit(action, id)
{
  cart = cart.map((item)=>
  {
    let numberOfUnits = item.numberOfUnits;
    if(item.id===id)
    {
      if(action==='minus' && numberOfUnits > 1)
        numberOfUnits--;
      else if(action==='plus' && numberOfUnits < item.instock)
        numberOfUnits++;
    }
    return {
      ...item,
      numberOfUnits,
    }
  })

  updateCart();
}

function renderSubTotal()
{
  let totalPrice = 0;
  let totalItems = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  subTotalEl.innerHTML = `CHECKOUT &#8226; $ ${totalPrice.toFixed(2)}`;
  totalItemInCartEl.innerHTML = `CART (${totalItems})`;
}

function removeItemFromCart(id)
{
  cart = cart.filter((item)=>item.id!==id);
  updateCart()
}