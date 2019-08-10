import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    // Grabs input from form
    const storeName = this.myInput.current.valuegit a;
    console.log(storeName);
    //updates URL
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store &rarr;</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
