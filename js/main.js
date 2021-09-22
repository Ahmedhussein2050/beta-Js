let mainColor = localStorage.getItem("color_option");
if (mainColor !== null) {
    document.documentElement.style.setProperty('--main-color', mainColor);
    
    document.querySelectorAll('.colors-list li').forEach(element => {
        element.classList.remove('active');

        if (element.dataset.color === mainColor) {
            element.classList.add('active')
        }

    })
}
let imgRandomOption = true;
let setintrvl;

let backsLocal = localStorage.getItem('backs-option');
if (backsLocal !== null) {
    if (backsLocal === 'true') {
        imgRandomOption = true;
    } else{
        imgRandomOption = false;
    }
    document.querySelectorAll('.switch-backs span').forEach(element =>{
        element.classList.remove('active');
    });
    if (backsLocal === "true") {
        document.querySelector('.switch-backs .yes').classList.add('active');
    }
    else{
        document.querySelector('.switch-backs .no').classList.add('active');
    }
}

document.querySelector('.icon-con .fa-cog').onclick = function () {
    this.classList.toggle('fa-spin')
    document.querySelector('.settings-box').classList.toggle('opened')
}
const liColors = document.querySelectorAll('.colors-list li');
liColors.forEach(li => {
    li.addEventListener('click', (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localStorage.setItem('color_option', e.target.dataset.color);
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        })
        e.target.classList.add('active');

    })
})

const backsSwitch = document.querySelectorAll('.switch-backs span');
backsSwitch.forEach(spans => {
    spans.addEventListener('click', (e) => {
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        })
        e.target.classList.add('active');

        if (e.target.dataset.backs === 'yes') {
            imgRandomOption = true;
            randomizeBacks();
            localStorage.setItem('backs-option', true)
        }
        else{
            imgRandomOption = false;
            clearInterval(setintrvl);
            localStorage.setItem('backs-option', false)
        }

    })
})




let landingPage = document.querySelector(".landing-page");
let landingImages = ["../img/1.jpg", "../img/2.jpeg", "../img/2.jpg", "../img/3.jpg", "../img/6.jpg"];



function randomizeBacks() {
    if (imgRandomOption === true) {

        setintrvl = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * landingImages.length);
            landingPage.style.backgroundImage = 'url("img/' + landingImages[randomNumber] + '")';
            landingPage.style.transition = '0.5s'
        }, 1000);
    }
}

randomizeBacks();


let ourSkills = document.querySelector('.skills');
window.onscroll = function (){ 
    let skillsOstTp = ourSkills.offsetTop;
    let skillsOtrHt = ourSkills.offsetHeight;
    let winHt = window.innerHeight;
    let winScTop = window.pageYOffset;
    if (winScTop >= (skillsOstTp + (skillsOtrHt/2) - winHt)) {
        let skillspan = document.querySelectorAll('.skill-box .skill-progress span');
        skillspan.forEach(element =>{
            element.style.width = element.dataset.prog;
        })
        let skillP = document.querySelectorAll('.skill-box .skill-progress p');
        skillP.forEach(element=>{
            element.innerHTML = element.dataset.prog;
        })
    }
}
let allImages = document.querySelectorAll('.Gallery img');
allImages.forEach(imge=>{
    imge.addEventListener('click',(e)=>{   
        let overLaypopup = document.createElement('div');
        overLaypopup.classList.add('popup-overlay')
        document.body.appendChild(overLaypopup);

        let popupBox = document.createElement('div');
        popupBox.classList.add('popup-box') 

        let popupImage = document.createElement('img');
        popupImage.src = imge.src;
        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        let closebutton = document.createElement('span');
        let closebuttontext = document.createTextNode('X');
        closebutton.appendChild(closebuttontext);
        closebutton.classList.add('close-button');
        popupBox.appendChild(closebutton);
    })
   })
        document.addEventListener('click', function(e){
    if (e.target.className == 'close-button') {
        document.querySelector('.popup-box').remove();
        document.querySelector('.popup-overlay').remove();
    }
})




















