import React from 'react';
import CalendarDate from './CalendarDate';
import moment from 'moment';
import TodoEdit from './TodoEdit';

class CalendarDates extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      year: new Date(this.props.today).getFullYear(),
      monthNum: new Date(this.props.today).getMonth()+1,
      date: new Date(this.props.today).getDate(),
      lastDateofTheMonth : new Date(new Date(this.props.today).getFullYear(),12,0 ).getDate(),
      books:"",

      layerPopup: false,
      todoEdit:{}
    };
  }
  componentDidMount(){
    this.callApi()
        .then(res=>{
          //.sort((a, b)=>{ a.order - b.order})
          
          this.setState({todoEdit: res})
        })
        .catch(err => console.log(err))    
  }
  callApi=async()=>{//비동기
    // const response = await fetch('/api/books/bookList');    
    const response = await fetch('/api/todos/todoList');    
    // console.log("!!!!!A!!!!!!!",response, response.json())
    const body = await response.json();
    const groupBy = (xs, key) => {
      return xs.reduce((rv, x) => {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };
    // let dateArr = body.map(el=>{
    //   el.published_date = moment(el.published_date).format("YYYY-MM-DD")
    //   return el
    // })
    // dateArr = groupBy(dateArr, 'published_date')

    let dateArr = body.map(el=>{
      console.log(el)
      el.date = moment(el.date).format("YYYY-MM-DD")
      return el
    })
    dateArr = groupBy(dateArr, 'date');
    
    console.log("!!!!!!V!!!!!!",dateArr)
    // return await response.json();
    // const response = await fetch('/api/books');
    // const response = await fetch('/api');
    // const body = await response.json();
    return dateArr;
  }
  render(){
    let dateTime = this.state.year+"-"+this.state.monthNum+"-"+this.state.date
    // console.log(dateTime)
    return(
      <div className="date-grid">
      {this.dateList(this.state.year, this.state.monthNum, this.state.date, this.state.todoEdit)}
      {this.state.layerPopup ? <TodoEdit layerPopup={this.state.layerPopup} clickTodoEdit={this.clickTodoEdit} todoEdit={this.state.todoEdit}/> : '' }
      </div>

    )
  }

  dateList(year, monthNum, date, todoArr){
    let dataList = []
    
    for(let first = 1; first <= this.state.lastDateofTheMonth ; first++){
      let dateTime = year+"-"+monthNum+"-"+first
      // console.log(todoArr[dateTime])
      dataList.push(
        <CalendarDate year={year} month={monthNum} date={first} key={first} todos={todoArr[dateTime]} clickTodoEdit={this.clickTodoEdit}/>
      )
    }

    return dataList;
  }

  clickTodoEdit=(dateTime, todoArr)=>{
    console.log("clickTodoEdit",dateTime)
    let todoEdit = { dateTime : dateTime , todoArr : todoArr }
    this.setState({layerPopup:!this.state.layerPopup, todoEdit:todoEdit})

  }
  
  // editTodos=(dateNumber)=>{
    
  // }
}
export default CalendarDates;
