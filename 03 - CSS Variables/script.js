(function () {
  let controls = document.querySelectorAll('input')
  function update () {
    let unity = this.dataset.sizing || ''
    console.log(unity)
    if (this.name === 'blur') {
      document.documentElement.style.setProperty('--' + this.name, this.name + '(' + this.value + unity + ')')
    } else {
      document.documentElement.style.setProperty('--' + this.name, this.value + unity)
    }
    console.log(this.name, this.value)
  }
  controls.forEach((item) => item.addEventListener('change', update))
})()
