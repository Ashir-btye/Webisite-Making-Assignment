let humburger = document.querySelector(".bars")
humburger.addEventListener("click", (e) => {
    console.log("Humburger");
    let ulist = document.querySelector("ul")
    ulist.classList.toggle("toggle")

})




var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
    }
};

var carousel = document.querySelector('[data-carousel]');
var slides = document.getElementsByClassName('carousel-cell');
var flkty = new Flickity(carousel, options);

flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
        var image = slides[i];
        var x = (slide.target + flkty.x) * -1 / 3;
        image.style.backgroundPosition = x + 'px';
    });
});



let submitmsg = document.querySelector("#submitmsg")
submitmsg.addEventListener("click", (e) => {
    let mail = document.querySelector("#exampleFormControlInput1").value
    let msg = document.querySelector("#exampleFormControlTextarea1").value
    if (mail == "" || msg == "" || mail == " " || msg == " ") {
        alert("Please Fill The from")
        console.log("Hi");
    }
    else {
        alert("Thanks For Feed Back")
        submitmsg.textContent = "Send"
    }
})


let dataObj = [
    {
        title: "WEBISTE",
        desc: "lLorem ipsum dolor sit amet consectetur.orem",
        image: "https://img.freepik.com/premium-photo/anime-character-with-yellow-background-yellow-background-generative-ai_958192-36049.jpg"
    },
    {
        title: "WEB API",
        desc: "lLorem ipsum dolor sit amet consectetur.orem",
        image: "https://img.freepik.com/free-photo/portrait-anime-character-with-stars_23-2151556430.jpg"
    },
    {
        title: "SEO",
        desc: "lLorem ipsum dolor sit amet consectetur.orem",
        image: "https://img.freepik.com/premium-photo/anime-boy-with-blonde-hair-yellow-shirt-holding-up-peace-sign-generative-ai_958192-36064.jpg"
    }
]

let sectionCard = document.querySelector(".sectioncard")

dataObj.forEach(element => {
    sectionCard.innerHTML += `
    <div class="col-lg-4 my-3 cards">
        <div class="card" style="width: 18rem;">
          <img src="${element.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.desc}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    </div>
    `
});