
    let laptops = [
    {
        name: 'MacBook Air M3',
        price: 95000,
        title: 'Лёгкий и мощный ноутбук',
        img: "./imges/images (1).jpg"
    },
    {
        name: 'MacBook Pro M3',
        price:  150000,
        title: 'Профессиональная производительность',
        img: "./imges/images.jpg"
    },
    {
        name: 'Asus ROG Strix',
        price: 180000,
        title: 'Игровой ноутбук с мощной видеокартой',
        img: "./imges/Без названия (1).jpg"
    },
    {
        name: 'HP Pavilion',
        price: 75000,
        title: 'Отличный выбор для работы',
        img: "./imges/Без названия (2).jpg"
    },
    {
        name: 'Lenovo ThinkPad X1',
        price: 130000,
        title: 'Бизнес-ноутбук высокого уровня',
        img: "./imges/Без названия.jpg"
    }
]


let products = document.getElementById('products')
const render = () => {
laptops.forEach(phone=>{
//    alert(phone)  
   let div = document.createElement('div')
        div.className = "card"

        div.innerHTML = `
        <div class="img_block">
            <img src="${phone.img}" alt=""></div>
        <div class="content_block">
            <h1 id="title">${phone.name}</h1>
            <p id="price">${phone.price}</p>
             <p id="price">${phone.title}</p>
        </div>
        `
        products.append(div)
        }
    )
    }

    render()