import '../style.css'
import javascriptLogo from '../javascript.svg'

function setupCounter(element) {
  let counter = 0
  const setCounter = count => {
    counter = count
    element.innerHTML = `1Piece is $${counter}`
  }

  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://github.com/jklover1110/vite-library-strict-mode" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Halo BUG!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
        <p class="read-the-docs">
      Click on the JS logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

export { setupCounter as default, setupCounter }

