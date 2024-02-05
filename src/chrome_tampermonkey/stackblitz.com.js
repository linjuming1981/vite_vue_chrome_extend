const Stack = {
  bindKeys(){
    document.addEventListener('keyup', event => {
      if (event.ctrlKey && event.key === 's') {
        setTimeout(() => {
          $('.has-changes').click()
        }, 1000)
      }
    })
  }
}

Stack.bindKeys()

console.log(222)