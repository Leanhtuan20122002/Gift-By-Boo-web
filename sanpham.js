let url=location.href
let product_image=document.querySelector('.product-image img')
let minus=document.querySelector('.minus')
let plus=document.querySelector('.plus')
let text=document.querySelector('.text')
let cate_a=document.querySelector('.cate a')
let product_information=document.querySelector('.product-information h1') 
let option__add_to_cart=document.querySelector('.option__add-to-cart')
let price=document.querySelector('.Price h2')
let product1=localStorage.getItem('product')
let product_1= JSON.parse(product1)
let product2=localStorage.getItem('product1')
let product_2= JSON.parse(product2) 
let product=product_1.concat(product_2)
product.forEach((pr,index)=>{
    if(url.includes(pr.type)){
        price.innerText=`${pr.price}`
      if(index<17) {
          cate_a.innerText='Hoa Sáp';
          cate_a.href='Wax.html'
        }
    if(index>=17) {
        cate_a.innerText='Hoa nhũ';
        cate_a.href='Emulsion.html'
      }    
        product_information.innerText=`${pr.name}`
        product_image.src=pr.img
    }
})
minus.addEventListener('click',()=>{
    if(parseInt(text.innerText)>1){
        text.innerText = parseInt(text.innerText) - 1
    }
})
plus.addEventListener('click',()=>{
        text.innerText = parseInt(text.innerText) + 1
})
function doituonggiohang(name,type,soluong){
      let itemGiohang=new Object()
      itemGiohang.name=name;
      itemGiohang.soluong=soluong
      return itemGiohang
}

