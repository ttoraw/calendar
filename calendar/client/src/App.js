import React, { Component } from 'react';
import './style.css';
import './style.scss';
import Frame from './Frame';

class App extends Component{
  state ={
    books:""
  }
  componentDidMount(){
    // this.callApi()
    //     .then(res=>{this.setState({books: res})})
    //     .catch(err => console.log(err))
  }
  callApi=async()=>{//비동기
    const response = await fetch('/api/books/bookList');
    // console.log("!!!!!A!!!!!!!",response, response.json())
    const body = await response.json();
    console.log("!!!!!!V!!!!!!",body)
    // return await response.json();
    // const response = await fetch('/api/books');
    // const response = await fetch('/api');
    // const body = await response.json();
    return body;
  }
   render(){
      return(
         <div>
           {this.state.books ? this.state.books.map(
             c=>{
               return (
                 <div key={c.id}>
                   {c.author}
                   {c.name}
                   {c.published_date}
                 </div>
               )
             }
           ):''}
            <h1>으으온
            으으</h1>
          <Frame/>
         </div>
      );
   }
}
export default App;
