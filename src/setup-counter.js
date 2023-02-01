function setupCounter(element) {
  let counter = 0
  const setCounter = count => {
    counter = count
    element.innerHTML = `1Piece is $${counter}`
  }

  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}

export { setupCounter }
