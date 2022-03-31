function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
    var women=[
    {
         id:1, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2496/912/250/2/w/423/2496912250_2_1_1.jpg?ts=1648124021285",
        "brandName": "DOUBLE-BREASTED LACE BLAZER LONG SLEEVE BLAZER WITH A LAPEL COLLAR. FEATURING SIDE VENTS AT THE HEM AND DOUBLE-BREASTED FASTENING WITH MATCHING BUTTONS.",
        "priceOf": "8990.00"
    },
    {
        id:2, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2189/393/712/2/w/429/2189393712_6_1_1.jpg?ts=1642084858868",
        "brandName": "BLAZER WITH ROLLED-UP SLEEVES +3",
        "priceOf": "4490.00"
    },
    {
        id:3, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2657/575/513/2/w/314/2657575513_2_3_1.jpg?ts=1644585963203",
        "brandName": "DOUBLE-BREASTED BLAZER DRESS",
        "priceOf": "8990.00"
    },
    {
        id:4, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2827/522/600/2/w/314/2827522600_1_1_1.jpg?ts=1644585963485",
        "brandName": "DRAPED BLAZER DRESS",
        "priceOf": "7990.00"
    },
    {
        id:5,"imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2566/815/035/2/w/429/2566815035_1_1_1.jpg?ts=1644497781479",
        "brandName": "FLOWING ANIMAL PRINT BLAZER",
        "priceOf": "5990.00"
    },
    {
        id:6, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2189/393/712/4/w/314/2189393712_2_1_1.jpg?ts=1645189839305",
        "brandName": "BLAZER WITH ROLLED-UP SLEEVES +3",
        "priceOf": "4490.00"
    },
    {
        id:7, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2189/760/800/7/w/314/2189760800_1_1_1.jpg?ts=1645189969659",
        "brandName": "BLAZER WITH ROLLED-UP SLEEVE",
        "priceOf": "4490.00"
    },
    {
        id:8, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2189/666/420/2/w/314/2189666420_6_1_1.jpg?ts=1642077960772",
        "brandName": "BLAZER WITH ROLLED-UP SLEE",
        "priceOf": "4490.00"
    },
    {
        id:9, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2180/940/500/2/w/314/2180940500_6_1_1.jpg?ts=1642520397228",
        "brandName": "BLAZER WITH ROLLED-UP SLEEVES+3",
        "priceOf": "4490.00"
    },
    {
        id:10, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2189/393/712/2/w/314/2189393712_6_1_1.jpg?ts=1642084858868",
        "brandName": "BLAZER WITH ROLLED-UP SLEEVES",
        "priceOf": "4490.00"
    },
    {
        id:11, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/4938/008/420/2/w/429/4938008420_1_1_1.jpg?ts=1647861471878",
         "brandName": "BLAZER WITH ROLLED-UP SLEE",
        "priceOf": "4490.00"
    },
    {
        id:12,"imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2972/710/305/2/w/672/2972710305_2_1_1.jpg?ts=1646929037865",
        "brandName": "LINEN BLAZER WITH PATCH POCKETS",
        "priceOf": "6990.00"
    },
    {
        id:13,
        "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/4661/715/050/2/w/672/4661715050_1_1_1.jpg?ts=1641994972832",
        "brandName": "TEXTURED CROPPED BLAZER",
        "priceOf": "4990.00"
    },
    {
        id:14, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2331/940/500/2/w/672/2331940500_1_1_1.jpg?ts=1647951579730",
        "brandName": "LONG DOUBLE BREASTED WAISTCOAT",
        "priceOf": "4990.00"
    },
    {
        id:15, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2373/523/251/2/w/312/2373523251_2_1_1.jpg?ts=1647951561254",
        "brandName": "STRAIGHT FIT BLAZER WITH SEAM DETAIL",
        "priceOf": "6990.00"
    },
    {
        id:16, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2373/523/251/2/w/312/2373523251_6_1_1.jpg?ts=1647514290456",
        "brandName": "STRAIGHT FIT BLAZER WITH SEAM DETAIL",
        "priceOf": "6990.00"
    },
    {
        id:17, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/4661/722/321/2/w/672/4661722321_2_1_1.jpg?ts=1647597500483",
        "brandName": "TEXTURED CROPPED JACKET",
        "priceOf": "3990.00"
    },
    {
        id:18, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2010/705/570/2/w/672/2010705570_1_1_1.jpg?ts=1648049861578",
        "brandName": "STRAIGHT CUT BLAZER",
        "priceOf": "5990.00"
    },
    {
        id:19, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2010/702/603/2/w/312/2010702603_1_1_1.jpg?ts=1647969861321",
        "brandName": "STRAIGHT FIT BLAZER WITH BELT",
        "priceOf": "6990.00"
    },
    {
        id:20,"imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/7969/046/600/2/w/314/7969046600_1_1_1.jpg?ts=1644586912739",
        "brandName": "STRAIGHT CUT BLAZER +1",
        "priceOf": "5990.00"
    },
    {
        id:21, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2010/771/251/2/w/672/2010771251_2_1_1.jpg?ts=1647597487691",
        "brandName": "TEXTURED CROPPED BLAZER",
        "priceOf": "4990.00"
    },
    {
        id:22,  "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2010/774/643/2/w/672/2010774643_2_1_1.jpg?ts=1645718909765",
        "brandName": "CROPPED BLAZER WITH TIED DETAIL",
        "priceOf": "4990.00"
    },
    {
        id:23, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2180/701/630/2/w/312/2180701630_2_1_1.jpg?ts=1646990428814",
        "brandName": "LONG BLAZER WITH INVERTED LAPEL COLLAR",
        "priceOf": "4990.00"
    },
    {
        id:24,  "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2771/701/420/2/w/314/2771701420_1_1_1.jpg?ts=1646990491723",
        "brandName": " ₹ 4,990.00 LONG BLAZER WITH INVERTED LAPEL COLLAR",
        "priceOf": "4990.00"
    },
    {
        id:25, "imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2180/701/712/2/w/672/2180701712_2_1_1.jpg?ts=1643813564446",
        "brandName": "LONG BLAZER WITH INVERTED LAPEL COLLAR",
        "priceOf": "4990.00"
    },
    {
        id:26,"imageUrl": "https://static.zara.net/photos///2022/V/0/1/p/2198/789/300/2/w/312/2198789300_6_1_1.jpg?ts=1643110451427",
        "brandName": "LONG BLAZER WITH INVERTED LAPEL COLLAR",
        "priceOf": "4990.00",
    }
]


women.map(function(elem){
    var box = document.createElement("div");
    box.addEventListener("click",function(){
        addTobag(elem);
    })
  var image= document.createElement("img");
  image.src=elem.imageUrl;
  image.setAttribute("class","img")

  var para = document.createElement("p");
  para.innerText=elem.brandName;
  para.setAttribute("class","p")

  var price = document.createElement("p");
  price.innerText=elem.priceOf;
  price.setAttribute("class","rs")
  console.log(image,para,price)

  box.append(image,para,price);
  document.querySelector("#container").append(box);
})
function addTobag(elem){
    console.log(elem);
 localStorage.setItem("bag",JSON.stringify(elem));
 window.location.href="bag.html"
}
    // women.map(function(elem){
    //     var box = document.createElement("div");
    //   var image= document.createElement("img");
    //   image.src=elem.imageUrl;
    //   image.setAttribute("class","img")

    //   var para = document.createElement("p");
    //   para.innerText=elem.brandName;
    //   para.setAttribute("class","p")

    //   var price = document.createElement("p");
    //   price.innerText=elem.priceOf;
    //   price.setAttribute("class","rs")
    //   console.log(image,para,price)

    //   box.append(image,para,price);
    //   document.querySelector("#container").append(box);
    // })