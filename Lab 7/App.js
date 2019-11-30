import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NewItem from './NewItem';
import GroceryList from './GroceryList';

class App extends Component{
  render(){
    return (
      <div>
        <NewItem />
      </div>
    );
  }
    // var listStyle = {
    //   width: "60%",
    //   margin: "0",
    //   paddingLeft: "0",
    //   listStyle: "none"
    // }
    // return(
    //   <div>
    //     <div className = "groceryListMain">
    //     <div className = "header">
    //       <h1> Grocery List </h1>
    //     </div>
    //     <div style={listStyle}>
    //       <Grocery name='Oat Milk' bgcolor='#AE99FF' />
    //       <Grocery name='Eggs' bgcolor='#FFD52E' />
    //       <Grocery name='Strawberries' bgcolor="#ffc0cb" />
    //       <NewItem/>
    //     </div>
    //   </div>
    //   </div>
    // );
}

export default App;
