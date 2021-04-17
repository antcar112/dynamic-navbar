const nav = document.querySelector('nav')

const setStuck = (isStuck) => {
  nav.classList[isStuck ? 'add' : 'remove']('stuck')
}

const observer = new IntersectionObserver(
  ([{ intersectionRatio }]) => setStuck(intersectionRatio < 1),
  { threshold: [1] }
)

observer.observe(nav)
