const Stack = {
  bindKeys(){
    document.addEventListener('keyup', e => {
      console.log(e.keyCode)
    })
  }
}

Stack.bindKeys()