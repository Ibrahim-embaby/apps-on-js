// start accordion
let head = document.getElementsByClassName('accordion');
    
    for(var i=0 ; i < head.length ; i++)
    {
        head[i].addEventListener('click',function(){
            var div = this.nextElementSibling;
            this.classList.toggle("active");
            if(div.style.height){
                div.style.height = null;
            }
            else{
                div.style.height = div.scrollHeight + "px";
            }
        })
    }
// end accordion

/*-------------------------------------- */

// start slide show
// array contain all images
var slidephotos = ["photos/photo-1.jpg","photos/photo-9.jpg","photos/photo-19.jpg","photos/photo-4.jpg","photos/photo-8.jpg"];
var x = 0;
// function slide show
function slidShow (){
    document.slideShow.src = slidephotos[x];

    if(x < slidephotos.length - 1)
    {
        x++;
    }else{
        x = 0;
    }
     setTimeout("slidShow()" , 2000);
}
slidShow();
// end slide show

/*-------------------------------------- */

// start modal
var image = document.getElementById('the-img'),
    modal = document.getElementById('the-modal'),
    close = document.querySelector('.close'),
    modalImage = document.getElementById('img'),
    caption = document.getElementById('caption');

image.onclick = function(){
    modal.style.display = 'block';
    modalImage.src = this.src ;
    caption.textContent = this.alt;
}

close.onclick = function(){
    modal.style.display = 'none';
}

document.onkeyup = function(ev){
    if(ev.keyCode == "27")
    {
        modal.style.display = 'none';
    }
}
// end modal

// start App 1 
// var heading = document.getElementById('head-content'),
//     unOrderList = document.getElementById('uno-list'),
//     list = document.querySelectorAll('.uno-list li'),
//     add = document.getElementById('add');

// for(var i=0;i<list.length;i++)
// {
//     list[i].onclick = function(){
//         heading.textContent = this.textContent;
//         for(var x=0;x<list.length;x++){
//             list[x].classList.remove('activate');
//         }
//         this.classList.add('activate');
//     }
// }
// add.onclick = function(){
//     // var createdElement = document.createElement("li");
//     // var appendingList = unOrderList.appendChild(createdElement);
//     // appendingList.textContent = "new item";
//     unOrderList.innerHTML += "<li>new item</li>"
// }
// end App 1 

 //start appear effect 
function scrollAppearEffect(){
    var par = document.querySelector('.appear'),
        parPosition = par.getBoundingClientRect().top,
        winPosition = window.innerHeight/1.5;
    if(parPosition < winPosition)
    {
        par.classList.add('appear_active');
    }
}

window.addEventListener('scroll',scrollAppearEffect);
 //end appear effect

// start showing code 
var showingAccordion = document.querySelectorAll('.show-button');

for(var i=0; i<showingAccordion.length ; i++){
 showingAccordion[i].onclick = function(){
    var codeView = this.nextElementSibling;
    if(codeView.style.display){
        codeView.style.display = null;
        this.textContent = "show code"
    }else{
        codeView.style.display = "block";
        this.textContent = "hide code"
    }
 }
}
// end showing code 

//  start type writer
var myParagraph = document.getElementById('text'),
    myButton = document.getElementById('button'),
    myText = "hello world from javascript";
    var j = 0;

    myButton.onclick = function (){
        var typeWriter = setInterval(function (){
            myParagraph.textContent += myText[j];
            j++;
            if(j > myText.length-1){
                clearInterval(typeWriter);
            }
    }, 100)};

// end type writer
