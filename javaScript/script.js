//! Menu list json fav 

const menu = [
    {
      id: 1,
      title: "Cola",
      category: "Drink",
      price: 10.99,
      img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg",
      desc: `Best of Cola`,
    },
    {
      id: 2,
      title: "Royal Drink",
      category: "Drink",
      price: 7.99,
      img: "https://images.absolutdrinks.com/drink-images/Raw/Absolut/72e8f521-50cf-45bf-80ec-1abf3baec30a.jpg?imwidth=500",
      desc: `Best of Royal Drink `,
    },
    {
      id: 3,
      title: "RedBull",
      category: "Drink",
      price: 8.99,
      img: "https://www.liquor.com/thmb/rSyY6wEkafEpbuX-DMEO9w3URww=/720x720/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__liquor__2016__12__22114511__vodka-red-bull-720x720-recipe-b16a667ca354445799610e39be61e40a.jpg",
      desc: `Best `,
    },
    {
      id: 4,
      title: "Yaprak Sarma",
      category: "Turkfood",
      price: 5.99,
      img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200401171739-06-best-turkish-foods-yaprak-dolma.jpg",
      desc: `Best Turk Food  `,
    },
    {
      id: 5,
      title: "Mantı",
      category: "Turkfood",
      price: 12.99,
      img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200401172027-12-best-turkish-foods-manti.jpg",
      desc: `Best best food `,
    },
    {
      id: 6,
      title: "Lahmacun",
      category: "Turkfood",
      price: 9.99,
      img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200402101927-18-best-turkish-foods-lahmacun.jpg",
      desc: `Best of best foood`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Japan",
      price: 15.99,
      img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "Japan",
      price: 12.99,
      img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];
  
  const btnContainer = document.querySelector(".btn-container");
  const menuList = document.querySelector(".section-center");
  
 //! Create Buton 
  const createButtons = () => {
    let allButtons = `
      <button id="all" class="btn btn-outline-dark btn-item" type="button">All</button>
      <button id="drink" class="btn btn-outline-dark btn-item" type="button">Drink</button>
      <button id="turkfood" class="btn btn-outline-dark btn-item" type="button">Turk Food</button>
      <button id="japan" class="btn btn-outline-dark btn-item" type="button">Japan</button>
      `;
    btnContainer.innerHTML = allButtons;
  };
  
  createButtons();
  
 //! Create foods img title 
  const createFoods = (food) => {
    let menuDOM = `
      <div class="menu-items col-lg-6 col-sm-12">
        <img class="photo" src="${food.img}" alt="${food.title}">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${food.title}</h4>
            <h4 class="price">${food.price}</h4>
          </div>
          <div class="menu-text">${food.desc}</div>
        </div>
      </div>  
    `;
    return menuDOM;
  };
  
  //! All list 
  const listAllFoods = () => {
    let allFoods = "";
  
    menu.map((item) => {
      allFoods += createFoods(item);
    });
    menuList.innerHTML = allFoods;
  };
  document.addEventListener("DOMContentLoaded", listAllFoods);
  
  //! Drik List 
  const listOfDrinkFoods = () => {
    let drinkFoods = "";
  
    menu.map((item) => {
      if (item.category === "Drink") {
        drinkFoods += createFoods(item);
      }
    });
    menuList.innerHTML = drinkFoods;
  };
  
//! Japan menu list
  const listOfJapanFoods = () => {
    let japanFoods = "";
  
    menu.map((food) => {
      if (food.category === "Japan") {
        japanFoods += createFoods(food);
      }
    });
    menuList.innerHTML = japanFoods;
  };
  
//! Turk menu List
  const listOfChineseFoods = () => {
    let chinesefoods = "";
  
    menu.map((food) => {
      if (food.category === "Turkfood") {
        chinesefoods += createFoods(food);
      }
    });
    menuList.innerHTML = chinesefoods;
  };
  
  //! All food buttons
  const btnAllFoods = document.querySelector("#all");
  const btnDrinkFoods = document.querySelector("#drink");
  const btnJapanFoods = document.querySelector("#japan");
  const btnTurkFoods = document.querySelector("#turkfood");
  
  btnAllFoods.addEventListener("click", listAllFoods);
  btnDrinkFoods.addEventListener("click", listOfDrinkFoods);
  btnJapanFoods.addEventListener("click", listOfJapanFoods);
  btnTurkFoods.addEventListener("click", listOfChineseFoods);