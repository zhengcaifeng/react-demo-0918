// import logo from './logo.svg'
import './App.css'

import New from './new'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}

      <New>
        {/* <div>我是父组件的新闻源</div> */}
        {() => {
          console.log('方法')
        }}
      </New>
    </div>
  )
}

export default App
