//Handle displaying and "undisplaying specified elements"
window.display = (element, option = 'yes') => {
  if (option === 'yes'){
    element.classList.remove('js-display-element')
  }
  else if (option === 'no') {
    element.classList.add('js-display-element')
  }
}

//Handle scrolling screen to different points
window.scrollPageTo = (scrollDestination) => {
  switch (scrollDestination) {
    case "top":
      console.log("ATTENTION: Set up scroll page to: TOP case")
      break;
    case "about-me":
      window.scrollTo(0, 9);
      break;
  }
}

//Handle animation to delay display of page contents
window.slowlyReveal = (content, time = 0.6) => {
  content.style.animation = `subtleDisplay ${time}s ease-in-out 0s 1 normal forwards`
}