$(".quote-carousel").each(function() {
    var carouselElements = $(this).find("li");
    carouselElements.css({display:'none'});
    var q1 = Math.floor(Math.random() * carouselElements.length);
    var q2 = Math.floor(Math.random() * carouselElements.length);
    while (q1 == q2) {
        q2 = Math.floor(Math.random() * carouselElements.length);
    }
    carouselElements.eq(q1).css({display:'list-item'});
    carouselElements.eq(q2).css({display:'list-item'});
});