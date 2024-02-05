const Stack = {
  bindKeys(){
    document.addEventListener('keyup', e => {
      console.log(e, e.key)

    })
  }
}

Stack.bindKeys()

console.log(222)