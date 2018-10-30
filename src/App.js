import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";

const API_KEY = "a6fa2d4513b2118e543ef7b684a8de4d";



class App extends Component {
  state={
    recipes:[]
  }
  /* 
  getRecipe(){
    console.log("working!!!");
  }
  */
  getRecipe = async (e) =>{
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault(); // prevent refreshing
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=5`);
    //console.log(recipeName);

    const data = await api_call.json();
    //console.log(data.recipes[0].recipe_id);
    this.setState({recipes:data.recipes});
    console.log(this.state.recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}

export default App;
