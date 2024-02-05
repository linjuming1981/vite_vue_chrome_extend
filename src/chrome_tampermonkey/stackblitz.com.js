const Stack = {
  bindKeys(){
    document.addEventListener('keyup', event => {
      if (event.ctrlKey && event.key === 's') {
        $('.has-changes').click()
      }
    })
  }
}

Stack.bindKeys()

console.log(333)