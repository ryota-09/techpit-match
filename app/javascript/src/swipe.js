if(location.pathname == "/users") {
  $(function(){
    let allCards = document.querySelectorAll('.swipe--card');

    let swipeContainer = document.querySelector('.swipe');

    function initCards(){
      allCards.forEach(function(card, index){
        card.style.zindex = allCards.length - index;
        card.style.transform = 'scale(' + (20 - index)/ 20 + ')translateY(-' + 30*index + 'px)';
        card.style.opacity = (10 - index)/ 10;
      });
    }

    initCards()

    allCards.forEach(function(el){
      let hammertime = new Hanmmer(el);

      hammertime.on('pan', function(event){
        if(event.deltaX === 0)return;
        if(event.center.x === 0 && event.center.y === 0)return;

        el.classList.add('moving');

        swipeContainer.classList.toggle('swipe_like', event.deltaX > 0);
        swipeContainer.classList.toggle('swipe_dislike', event.deltaX < 0);

        let xMulti = event.deltaX*0.03;
        let yMulti = event.deltaY/80;
        let rotate = xMulti*yMukti;

        event.target.style.transform = 'translate(' + event.deltaX + 'px,' + event.deltaY + 'px)rotate(' + rotete + 'deg)';
      })
    })
  });

}