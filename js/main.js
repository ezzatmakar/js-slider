let slideImages = Array.from(document.querySelectorAll('.slider-container img'));

let slidesCount = slideImages.length;
console.log(slidesCount)
let nextBtn = document.getElementById('next');

let prevBtn = document.getElementById('prev');


nextBtn.onclick = nextSlide;

prevBtn.onclick = prevSlide;


let paginationUl = document.createElement('ul');

paginationUl.setAttribute('id', 'pagination-ul');

for (let i = 0; i < slidesCount; i++) {

    let paginationLi = document.createElement('li');
    paginationLi.setAttribute('data-index', i);

    paginationLi.appendChild(document.createTextNode(i + 1));
    paginationUl.appendChild(paginationLi);
}


document.getElementById('indicators').appendChild(paginationUl);

let currentSlideNumber = document.getElementById('slide-number');

let paginationCreatedUl = document.getElementById('pagination-ul');

let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (let i = 0; i < paginationBullets.length; i++) {

    paginationBullets[i].onclick = function () {
        let currentBullet = this.getAttribute('data-index');
        currentSlide = parseInt(currentBullet);
        checker();
    }
}

function nextSlide() {
    if (nextBtn.classList.contains('disabled')) {
        console.log('last slid');
        return false;

    } else {
        currentSlide++;
        checker();
    }
}

function prevSlide() {
    if (prevBtn.classList.contains('disabled')) {
        console.log('first slid');
        return false;

    } else {
        currentSlide--;
        checker();
    }
}

let currentSlide = 0;

console.log(slidesCount)

function checker() {

    removeAllActiveClass();


    currentSlideNumber.textContent = 'Slide ' + (currentSlide + 1) + ' of ' + slidesCount;

    slideImages[currentSlide].classList.add('active');

    paginationCreatedUl.children[currentSlide].classList.add('active');

    if (currentSlide == 0) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }

    if ((currentSlide + 1) == slidesCount) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }

}

checker();

function removeAllActiveClass() {

    slideImages.forEach(function (img) {
        img.classList.remove('active');
    })

    paginationBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    })

}
