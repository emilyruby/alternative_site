const w = window.innerWidth
const p = document.querySelector('p')

const getPercentX  = (x) => Math.round(x / w * 360)
const setStyleProp = document.documentElement.style.setProperty.bind(
  document.documentElement.style
)
document.addEventListener('mousemove', (e) => {
  const percentX  = getPercentX(e.clientX)
  const gradStart = `hsl(${percentX}, 100%, 75%)`
  const gradEnd   = `hsl(${(percentX + 120) % 360}, 100%, 50%)`

  setStyleProp('--grad-start', gradStart)
  setStyleProp('--grad-end', gradEnd)
  p.setAttribute('data-gradStart', gradStart)
  p.setAttribute('data-gradEnd', gradEnd)
})
