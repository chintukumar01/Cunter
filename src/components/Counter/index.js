import './index.css'
import {Component} from 'react'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevSate => {
      console.log(`previous state value ${prevSate.count}`)
      return {count: prevSate.count + 1}
    })
  }
  onDecrement = () => {
    this.setState(prevSate => {
      console.log(`previous state value ${prevSate.count}`)
      return {count: prevSate.count - 1}
    })
  }
  reset = () => {
    this.setState(prevSate => {
      // console.log(`previous state value ${prevSate.count}`)
      return {count: 0}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
          <button className="button" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
