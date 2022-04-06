let product=[
    {   
        id:0,
        img:'https://cdn.glitch.global/9e7b5ace-9aa1-48cf-b461-f5e944cdf76f/275767221_323633342988113_7760127987316923860_n.png?v=1648569941324',
        name:'Thiệp',
        price:'10,000đ'
    },
    {   
        id:2,
        img:'https://cdn.glitch.global/9e7b5ace-9aa1-48cf-b461-f5e944cdf76f/274598408_1649782705365036_7924443471012861450_n.png?v=1648569941060',
        name:'Đèn led',
        price:'10,000đ'
    },
    {   
        id:3, 
        img:'https://cdn.glitch.global/9e7b5ace-9aa1-48cf-b461-f5e944cdf76f/275552692_492675945894030_3489739980913070213_n.jpg?v=1648570070772',
        name:'Topper "Love" vàng',
        price:'10,000đ'
    },
    {   
        id:3, 
        img:'https://cdn.glitch.global/9e7b5ace-9aa1-48cf-b461-f5e944cdf76f/275430288_492675982560693_3656474275762200291_n.jpg?v=1648570070239',
        name:'Topper "Love" trắng',
        price:'10,000đ'
    },
  {   
        id:1,
        img:'https://cdn.glitch.global/9e7b5ace-9aa1-48cf-b461-f5e944cdf76f/274754511_702373091117705_125754961625964100_n.png?v=1648569939795',
        name:'Vương miện',
        price:'20,000đ'
    },
    {   
        id:4, 
        img:'https://cdn.glitch.global/9e7b5ace-9aa1-48cf-b461-f5e944cdf76f/275683945_672305060723136_345772679556211262_n.png?v=1648569940975',
        name:'Túi hoa',
        price:'20,000đ'
    },
    
]
let grid_row=document.getElementById('grid__row')
let five=document.querySelectorAll('.panel-item')
let nav_product_h2=document.querySelector('.nav__product h2')
let select_arrange=document.getElementById('select__arrange')
let options=document.querySelectorAll('option')
function lowtohigh(objProduct){
   let htmls= objProduct.sort((a,b)=>(a.price>b.price)?1:-1)
   render(htmls)
}
function hightolow(objProduct){
    let htmls= objProduct.sort((a,b)=>(a.price<b.price)?1:-1)
   render(htmls)
}
function selects(obj_select){
    select_arrange.onchange=function(){
        let giaTri = select_arrange.options[select_arrange.selectedIndex].value;
        console.log(giaTri)
        if(giaTri==1) hightolow(obj_select)
        if(giaTri==2) lowtohigh(obj_select)
    }
}
function render(productss){
    let html= productss.map(function(pr){
        return `<div class="item-product">
        <div class="detail__product">
            <div class="detail__img">
               <img src="${pr.img}" alt="" class="img-product">
            </div>
            <div class="Information">
                <div class="name">${pr.name}</div>
                <div class="price"><span>${pr.price}</span></div>
            </div>
        </div>
        </div>`
    })
    grid_row.innerHTML=html.join('')
}
five.forEach(function(five_element,index){
    five_element.addEventListener('click',function(e){
        switch(index){
            case 0: nav_product_h2.innerText='Thiệp'
            break;
            case 1: nav_product_h2.innerText='Vương miện'
            break;
            case 2: nav_product_h2.innerText='Đèn led'
            break;
            case 3: nav_product_h2.innerText='Topper'
            break;
            case 4: nav_product_h2.innerText='Túi hoa'
            break;
            
        }
        e.preventDefault()
        let products= product.filter(function(pr){
            return pr.id==index
        })
        render(products)
       selects(products)    
    })
})
render(product)
selects(product)