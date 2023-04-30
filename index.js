//navbar-toggle
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


//card carousel 
document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
} 



//card-content 

/*-------------- plan 1 --------------------- */
function changeText1() {
    var element = document.getElementById("tab1")
    element.style.display="none";

    var des=document.getElementById("describe1")
    des.style.display="block";
   
    var blur = document.getElementById("blur1")
     blur.style.backdropFilter = "blur(5px)";
     blur.style.webkitBackdropFilter = "blur(5px)";
     
}

function price1()
{   
    var des=document.getElementById("describe1")
    des.style.display="none";

    var price = document.getElementById("tab1")
    price.style.display="block";

    // var blur = document.getElementById("blur1")
    // blur.style.backdropFilter = "blur(5px)";
    // blur.style.webkitBackdropFilter = "blur(5px)";

}


  /*-----------plan 2 ------------------------- */

function changeText2() {
    var element = document.getElementById("tab2")
    element.style.display="none";

    var des=document.getElementById("describe2")
    des.style.display="block";

    var blur = document.getElementById("blur2")
    blur.style.backdropFilter = "blur(5px)";
    blur.style.webkitBackdropFilter = "blur(5px)";
}

function price2()
{   
    var des=document.getElementById("describe2")
    des.style.display="none";

    var price = document.getElementById("tab2")
    price.style.display="block";

    // var blur = document.getElementById("blur2")
    // blur.style.backdropFilter = "none";
    // blur.style.webkitBackdropFilter = "none";


}

/*------plan 3 ------------- */
function changeText3() {
    var element = document.getElementById("tab3")
    element.style.display="none";

    var des=document.getElementById("describe3")
    des.style.display="block";

    var blur = document.getElementById("blur3")
    blur.style.backdropFilter = "blur(5px)";
    blur.style.webkitBackdropFilter = "blur(5px)";
}

function price3()
{   
    var des=document.getElementById("describe3")
    des.style.display="none";

    var price = document.getElementById("tab3")
    price.style.display="block";

//     var blur = document.getElementById("blur3")
//     blur.style.backdropFilter = "none";
//     blur.style.webkitBackdropFilter = "none";
 }

/*------plan 4------------- */
function changeText4() {
    var element = document.getElementById("tab4")
    element.style.display="none";

    var des=document.getElementById("describe4")
    des.style.display="block";

    var blur = document.getElementById("blur4")
    blur.style.backdropFilter = "blur(5px)";
    blur.style.webkitBackdropFilter = "blur(5px)";
}

function price4()
{   
    var des=document.getElementById("describe4")
    des.style.display="none";

    var price = document.getElementById("tab4")
    price.style.display="block";

    // var blur = document.getElementById("blur4")
    // blur.style.backdropFilter = "none";
    // blur.style.webkitBackdropFilter = "none";

}

/*------plan 5------------- */
function changeText5() {
    var element = document.getElementById("tab5")
    element.style.display="none";

    var des=document.getElementById("describe5")
    des.style.display="block";

    var blur = document.getElementById("blur5")
    blur.style.backdropFilter = "blur(5px)";
    blur.style.webkitBackdropFilter = "blur(5px)";
}

function price5()
{   
    var des=document.getElementById("describe5")
    des.style.display="none";

    var price = document.getElementById("tab5")
    price.style.display="block";

    // var blur = document.getElementById("blur5")
    // blur.style.backdropFilter = "none";
    // blur.style.webkitBackdropFilter = "none";

}
 /* open booking form */
 function bookForm(){
    /*window.open("../../Booking form/index.html")*/
    window.location.href="booking.html"
 }
