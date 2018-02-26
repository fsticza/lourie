import * as smoothscroll from 'smoothscroll-polyfill'
window.__forceSmoothScrollPolyfill__ = true

smoothscroll.polyfill()

function smoothScrollTo(destination) {
  destination.scrollIntoView({
    behavior: 'smooth'
  })
}

export default smoothScrollTo;
