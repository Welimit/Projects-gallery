
const toggle = document.getElementById('toggle');
const slidebar = document.getElementById('slidebar');
const para = document.getElementById('para');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    slidebar.classList.toggle('active')
}

togle.onclick = function(){
    para.classList.toggle('active')
}



// paragraph using javascript

const closedHead = document.querySelector('.h1')
const openPara = document.querySelector('.p1')

//Add Event Listener

closedHead.addEventListener('click', () => {
    if(openPara.classList.contains('p1')) {
        openPara.classList.add('active');
        closedHead.classList.remove('active');
    }
});
openPara.addEventListener('click', () => {
    if(closedHead.classList.contains('h1')) {
        closedHead.classList.add('active');
        openPara.classList.remove('active');
    }
});
