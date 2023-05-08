(function(){
    const sliders = [...document.querySelectorAll('.slider__body')];
    const circles = [...document.querySelectorAll('.position__circle')];
    const arrowbefore = document.querySelector('#antes');
    const arrownext = document.querySelector('#despues');
    const botones = document.querySelectorAll(".position__circle");
    var active;
    var control;

    let value;

    iniciar();

    function iniciar(){
        active = 1
        control = setInterval(() => {
            changePosition(1);
        }, 5000);
    }

    function parar () {
        active = 0;
        clearInterval(control);
    }

    arrownext.addEventListener('click', ()=>changePosition(1));
    arrowbefore.addEventListener('click', ()=>changePosition(-1));

    botones.forEach(boton => {
        boton.addEventListener("click", function(){
            let id = this.dataset.id;
            changePositionSelect(id);
        });
    });

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id); 
        value = currentElement;
        value+=change;

        if(value===0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('slider__body--show');
        sliders[value-1].classList.toggle('slider__body--show');

        circles[currentElement-1].classList.toggle('circle--active');
        circles[value-1].classList.toggle('circle--active');
        
        if(active==false){
            iniciar();
        }
        
    }

    function changePositionSelect(index){
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id); 
        value = index;

        sliders[currentElement-1].classList.toggle('slider__body--show');
        sliders[value-1].classList.toggle('slider__body--show');

        circles[currentElement-1].classList.toggle('circle--active');
        circles[value-1].classList.toggle('circle--active');

        parar();

    }

})()