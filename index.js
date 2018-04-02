$(() => {
  const logoArray =['images/beefeater.gif','images/bombay_sapphire.gif','images/BRIGHTONGIN_LOGO.jpg','images/masons.jpg','images/ginmare.jpg','images/hendricks.jpg','images/Tanqueray_gin.jpg','images/ophir.jpg','images/gordons.png'];
  const globalLogos = [];

  function addAllLogo(){
    for (var i = 0; i < logoArray.length; i++) {
      const logoObj = {};
      logoObj.html = `<div id='logo${i}' class='img-div'><img src='${logoArray[i]}'></div>`;
      $('.scroller').append(logoObj.html);
      logoObj.index = i;
      logoObj.$logo = $(`#logo${i}`);
      logoObj.$logoWidth = parseInt(logoObj.$logo.css('width'));
      logoObj.$scrollerWidth = ($('.scroller').css('width'));
      logoObj.$logo.css('left',(logoObj.$logoWidth*i) - 200);
      logoObj.$logoLeft = (parseInt(logoObj.$logo.css('left')));
      globalLogos.push(logoObj);
    }
    scroll(globalLogos);
  }

  addAllLogo();


  function scroll(globalLogos){
    globalLogos = globalLogos.map((logoObj, i) => {
      logoObj.$logoLeft = logoObj.$logoWidth + logoObj.$logoLeft;
      logoObj.$logo.animate({
        left: logoObj.$logoLeft
      }, 3000, 'linear', function(){
        if(i === globalLogos.length-1){
          nextLogo(logoObj.index);
        }
      });
      return logoObj;
    });
  }

  function nextLogo(i){
    const popped = globalLogos.pop();
    popped.$logo.remove();
    globalLogos.unshift(popped);
    $('.scroller').prepend(popped.html);
    popped.$logo = $(`#logo${i}`);
    popped.$logoLeft = 0 - popped.$logoWidth;
    popped.$logo.css('left', 0 - popped.$logoWidth );
    scroll(globalLogos);
  }



});
