import React, { Component } from 'react';
import UFC from './containers/UFC/UFC';


class App extends Component {
  render() {
    return (
      <div className="apps">
        {/* <form>
          <div className="radio-group">
            <input type="radio" id="optionOne" name="selector" />
            <label htmlFor="optionOne">One</label>
            <input type="radio" id="optionTwo" name="selector" />
            <label htmlFor="optionTwo">Two</label>
            <input type="radio" id="optionThree" name="selector" />
            <label htmlFor="optionThree">Three</label>
          </div>
        </form> */}
        <UFC />
      </div>
    );
  }
}

export default App;
