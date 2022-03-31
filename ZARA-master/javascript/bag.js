function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }








    var cartArr=JSON.parse(localStorage.getItem("cart"))||[];
    var getbag=JSON.parse(localStorage.getItem("bag"));
    var images=document.createElement("img");
    images.src=getbag.imageUrl;
    document.querySelector("#img_js").append(images);
    document.querySelector("#add_btn>button").addEventListener("click",function(){
      cartArr.push(getbag);
      localStorage.setItem("cart",JSON.stringify(cartArr));
      window.location.href="cart.html";
    })
  

   console.log(cartArr)