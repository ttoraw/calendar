import React from 'react';
import CalendarDate from './CalendarDate';

class CalendarDates extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      year: new Date(this.props.today).getFullYear(),
      monthNum: new Date(this.props.today).getMonth()+1,
      date: new Date(this.props.today).getDate(),
      lastDateofTheMonth : new Date(new Date(this.props.today).getFullYear(),12,0 ).getDate()
    };
  }
  componentDidMount(){
    console.log( this.state.year)
    console.log(this.state.lastDateofTheMonth)
  }
  render(){
    let dateTime = this.state.year+"-"+this.state.monthNum+"-"+this.state.date
    console.log(dateTime)
    return(
      <div className="date-grid">
      {this.dateList(this.state.year, this.state.monthNum, this.state.date)}
      </div>

    )
  }

  dateList(year, monthNum, date){
    let dataList = []
    for(let first = 1; first <= this.state.lastDateofTheMonth ; first++){
      dataList.push(
        <CalendarDate year={year} month={monthNum} date={first} key={first}/>
      )
    }

    return dataList;
  }
}
export default CalendarDates;
