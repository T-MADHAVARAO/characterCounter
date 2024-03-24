import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {characters: [], inputVal: ''}

  changeInput = event => {
    this.setState({inputVal: event.target.value})
  }

  charactersView = () => {
    const {characters} = this.state
    return (
      <ul>
        {characters.map(each => (
          <li key={each.id}>
            <p>
              {each.name} : {each.name.length}
            </p>
          </li>
        ))}
      </ul>
    )
  }

  onAdd = () => {
    const {inputVal, characters} = this.state
    const newVal = {id: uuidv4(), name: inputVal}
    const newCharacters = [...characters, newVal]
    this.setState({
      characters: newCharacters,
      inputVal: '',
    })
  }

  render() {
    const {characters, inputVal} = this.state
    return (
      <div className="bg">
        <div className="card">
          <div className="result-cont">
            <h1 className="result-heading">
              Count the characters like a Boss...
            </h1>
            <div className="result">
              {characters.length === 0 ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="no-inputs"
                />
              ) : (
                this.charactersView()
              )}
            </div>
          </div>
          <form className="input-cont">
            <h1 className="input-head">Character Counter</h1>
            <input
              onChange={this.changeInput}
              className="input-bar"
              type="text"
              value={inputVal}
              placeholder="Enter the Characters here"
            />
            <button onClick={this.onAdd} className="add-btn" type="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default App
