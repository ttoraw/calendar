import React, { Component } from 'react';
class App extends Component{
  state ={
    customers:""
  }
  componentDidMount(){
    this.callApi()
        .then(res=>{this.setState({customers: res})})
        .catch(err => console.log(err))
  }
  callApi=async()=>{//비동기
    // const response = await fetch('/api/customers');
    // const body = await response.json();
    // return body;
    const response = await fetch('/api/books');
    const body = await response.json();
    return body;
  }
   render(){
      return(
         <div>
           {this.state.customers ? this.state.customers.map(
             c=>{
               return (
                 <div key={c.id}>
                   {c.author}
                   {c.title}
                   {c.published_date}
                 </div>
               )
             }
           ):''}
            <h1>으으온
            으으</h1>
         </div>
      );
   }
}
export default App;
