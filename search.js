let input_search=document.querySelector('input')
let result_search=document.querySelector('#show_product-search')
let ip_search=document.querySelector('.input-search')
let search=document.querySelector('.search')
let Product1=localStorage.getItem('product')
let Product_1= JSON.parse(Product1)
let Product2=localStorage.getItem('product1')
let Product_2= JSON.parse(Product2) 
let P_roduct=Product_1.concat(Product_2)
input_search.oninput=function(){
    let value_search=input_search.value.trim()
    let Product_search;
    console.log(P_roduct)
    let html=P_roduct.filter(element => {
       return (element.name).includes(value_search)
    });
    console.log(html)
     if(input_search.value==''){
         Product_search=[]
         render1(Product_search)
     }
     else{
        Product_search=html
        console.log(Product_search)
         render1(Product_search)
     }
}

function render1(Product_search){
  let html=  Product_search.map(Ps => {
        return `<a class="search-link" href="./Sanpham.html?type=${Ps.type}">
        <div class="search-img">
        <img src="${Ps.img}" alt="">
    </div>
    <div class="price_name">
        <div class="na_me">${Ps.name}</div>
        <div class="pri_ce">${Ps.price}</div>
    </div>
        </a>`
    });
    result_search.innerHTML=html.join('')
}
input_search.onfocus=function(){
     result_search.style.display='block'
 }
window.onclick=function(e){
    if (!result_search.contains(e.target) && !input_search.contains(e.target))
    result_search.style.display = 'none';
 }