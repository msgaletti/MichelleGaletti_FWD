import React, {Component} from 'react';
import GroceryList from './GroceryList';

class NewItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			names: [],
			index: 0,
		};

		this.handleChange= this.handleChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleChange(e){
		const newGrocery ={
			key: this.state.index,
			name: this.textInput.value
		}

		this.state.names.push(newGrocery);

		this.setState({
			names: this.state.names,
			index: this.state.index +1,
		});

		e.preventDefault();
	}

	//Referenced: https://stackoverflow.com/questions/43230622/reactjs-how-to-delete-item-from-list
	handleDelete(e){
		this.setState(prevState => ({names: prevState.names.filter(el => el != e)}));
		this.setState({index: this.state.index -1});
	}

	render(){
		var headerStyle = {
			fontFamily: "sans-serif",
			align: "center",
			textAlign: "center",
			fontSize: 48,
			color: "#00003f"
		}
		var groceryListStyle = {
			align: "center",
			textAlign: "center",
			fontSize: 22,
			color: "#00003f"
		}
		var formStyle = {
			align: "center",
			textAlign: "center",
			marginBottom: "3%"
		}
		var buttonStyle = {
    		align: "right",
      		textAlign: "right",
      		color: "#00003f",
      		backgroundColor: "#e0ffff",
      		borderRadius: "8px",
      		fontSize: 14
    	}
		return(
			<div>
        		<div className = "groceryListMain">
        			<div className = "header">
          				<h1 style={headerStyle}> Grocery List </h1>
        			</div>
        			<div>
        				<h2 style={groceryListStyle}> Number of items: {this.state.index}</h2>
        			</div>
        			<form style={formStyle}> 
          				<label style={groceryListStyle}> Grocery Item:
            				<input type="text" ref={input => this.textInput = input}></input>
          				</label>
          				<button style={buttonStyle} onClick={this.handleChange}> Submit </button>
        			</form>
        				<GroceryList delete={this.handleDelete} foods={this.state.names} />
        		</div>
        	</div>
		);
	}
}
export default NewItem;