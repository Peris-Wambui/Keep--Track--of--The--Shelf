
import React from "react";
import BookContainer from "./Components/bookContainer/BookContainer";

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>Keep Track of The Shelf</h2>
      </div>
      <BookContainer />
    </div>
  );
}

export default App;
