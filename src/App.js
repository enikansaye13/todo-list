import React,{Component} from 'react';
import TodoInput from './component/TodoInput';
import TodoList from "./component/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
//import uuid from "uuid";

class App extends Component {
  state = {
    items:[],
    id: 1,
    item: "",
    editItem: false
  };
  handleChange = e => {
    console.log(e.target, '...value')
    this.setState({
      item: e.target.value
    });
    
  };
    handleSubmit = (e) =>{
e.preventDefault();
console.log(this.state.item, '...item')
const newItem={
  id:this.state.id,
  title:this.state.item
};
console.log(newItem)
  const updatedItems =[...this.state.items,newItem];
  this.setState({
    items:updatedItems,
    item:'',
    id: 0,
    editItem:false
  });
    };
  
  render() {
   return (
     <div className="container">
       <div className="row">
         <div className="col-10 mx-auto col-md-8 mt-4">
           <h3 className="text-capitalize  text-center">todo input</h3>
           <TodoInput 
           item={this.state.item}
           handlechange={this.handleChange}
           handleSubmit={this.handleSubmit}/>
           <TodoList items={this.state.items}/>
      </div>
       </div>
     </div>
      
  );
}
}

export default App;
