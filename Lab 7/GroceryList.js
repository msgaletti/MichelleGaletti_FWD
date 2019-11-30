import React, {Component} from 'react';
import NewItem from './NewItem';

class GroceryList extends React.Component{
	delete(id){
       this.props.delete(id);
   	}
	render(){
		var listStyle = {
  			width: "20%",
  			marginTop: "2%",
  			paddingLeft: "5%",
  			margin: "0 auto",
  			listStyle: "none"
    	}
    	var itemStyle = {
    		margin: "0",
    		color: "#00003f",
      		backgroundColor: "#ffe9ec",
      		fontFamily: "sans-serif",
      		padding: "2%",
      		marginBottom: "5%",
      		borderRadius: "5px",
      		fontSize: 18
    	}
    	var buttonStyle = {
    		float: "right",
      		marginLeft: "30%",
      		color: "#00003f",
      		backgroundColor: "#e0ffff",
      		borderRadius: "8px",
      		fontSize: 14
    	}
    	return(
    		<div>
        		<ul style={listStyle}> {this.props.foods.map(item => <li style={itemStyle} key={item.key}>{item.name}<button style={buttonStyle} onClick={this.delete.bind(this, item)}> Remove </button></li>)}</ul>
        	</div>
    	);
	}
}

export default GroceryList;