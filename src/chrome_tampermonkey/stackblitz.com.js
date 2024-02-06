const Stack = {
  bindKeys(){
    document.addEventListener('keyup', event => {
      if (event.ctrlKey && event.key === 's') {
        setTimeout(() => {
          $('.has-changes').click()
        }, 200)
      }
    })
  }
}

Stack.bindKeys()