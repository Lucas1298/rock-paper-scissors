import React from "react";
import CircleChoose from "./component/circle-choose/circle-option.component"
import OPTION_DATA from "./option.data"
import "./app.scss"

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      select: undefined
    }
  }


  render() {
    const { select } = this.state;
    return (
      <div className="App">

        {
          OPTION_DATA.map(({ id, option }) => (
            <div key={id} className={`select ${select === undefined ? "pending" : select === option ? "on" : "off"}`}
              onClick={() => {
                this.setState({ select:  option  });
              }}
            >
              <CircleChoose props={option} />
            </div>
          ))
        }

      </div>
    );
  }
}

export default App;
