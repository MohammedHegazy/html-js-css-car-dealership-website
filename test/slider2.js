var spide1 = document.querySelectorAll('.slider');
    var be1 = document.querySelectorAll('.bt');
    let current = 1;

    // Javascript for image sliderr manual navigation
    var manualNav = function(manual){
      spide1.forEach((slider) => {
        slider.classList.remove('activ');

        be1.forEach((bt) => {
          bt.classList.remove('activ');
        });
      });

      spide1[manual].classList.add('activ');
      be1[manual].classList.add('activ');
    }

    be1.forEach((bt, i) => {
      bt.addEventListener("click", () => {
        manualNav(i);
        current = i;
      });
    });

    // Javascript for image sliderr autoplay navigation
    var repeat = function(activClass){
      let activ = document.getElementsByClassName('activ');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...activ].forEach((activslider) => {
            activslider.classList.remove('activ');
          });

        spide1[i].classList.add('activ');
        be1[i].classList.add('activ');
        i++;

        if(spide1.length == i){
          i = 0;
        }
        if(i >= spide1.length){
          return;
        }
        repeater();
      }, 5000);
      }
      repeater();
    }
    repeat();