import React, { Component } from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
        <TrelloList title="test"/>
    </div>
  );
}

const mapStateToProps = state => ({
    lists : state.lists
})

export default App;
