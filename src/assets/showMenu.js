window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop; // Получаем положение скролла
    var navbar = document.getElementById("menu").classList;
    console.log(navbar)
    console.log(scrolled)
    if(scrolled == 0){
        navbar.remove("black")
    }
    else{
      // Если нет, то делаем его полностью видимым
        navbar.add("black")
    };
  };
  