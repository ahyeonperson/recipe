import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";

const API_KEY = "a6fa2d4513b2118e543ef7b684a8de4d";
//https://www.food2fork.com/about/api



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
    e.preventDefault(); // prevent refreshing : submit 버튼 누르면 auto-page-refresh 되기때문에 그거 막는거
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=5`);
    //console.log(recipeName);

    const data = await api_call.json(); //json 파일로 읽어
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
