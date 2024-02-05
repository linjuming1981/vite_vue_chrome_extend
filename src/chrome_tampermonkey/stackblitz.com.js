const Stack = {
  bindKeys(){
    document.addEventListener('keyup', e => {
      console.log(e.keyCode)

    })
  }
}

Stack.bindKeys()
console.log(111111111)