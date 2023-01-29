function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector(".profile-image")
  html.classList.toggle("light")


  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/img/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/img/avatar.png")
  }
}
