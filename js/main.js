function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
document.body.onscroll = function() {
  texts = document.getElementsByClassName('text')
  for (var i in texts) {
    if (isScrolledIntoView(texts[i])) {
      texts[i].style.opacity = 0.75
    }
  }
}
texts = document.getElementsByClassName('text')
for (var i in texts) {
  if (isScrolledIntoView(texts[i])) {
    texts[i].style.opacity = 0.8
  }
}
