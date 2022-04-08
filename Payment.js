let cart_items = document.getElementById("cart_items");
let ListCart = JSON.parse(localStorage.getItem("ListCart"));

console.log(ListCart);

ListCart.forEach(function(pr) {
    console.log(pr);
    console.log(pr.soluong)
    let html = `<li class="cart_items_list">
    <div class="li_name">
        <p>${pr.name}</p>
    </div>
    <div class="li_soluong">
        <button><i class="fa-solid fa-minus"></i></button>
        <p>${pr.soluong}</p>
        <button><i class="fa-solid fa-plus"></i></button>
    </div>
    <div class="li_delete">
        <button><i class="fa-solid fa-trash-can"></i></button>
    </div>
    </li>`
    cart_items.insertAdjacentHTML("beforeend", html);
})
