function zero(x) {
  if (x < 10) {
    x = "0" + x
  }
  return x
}

setInterval(() => {
  const currentTime = new Date()
  const h = currentTime.getHours()
  const m = currentTime.getMinutes()
  const s = currentTime.getSeconds()

  document.querySelector("#time-h").textContent = `${zero(h)}`
  document.querySelector("#time-m").textContent = `${zero(m)}`
  document.querySelector("#time-s").textContent = `${zero(s)}`


  if (h < 12) {
    document.querySelector("#am-pm").textContent = `${"am"}`  
  }

}, 1000)