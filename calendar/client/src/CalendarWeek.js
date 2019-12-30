import React from 'react';

class CalendarWeek extends React.Component {
  constructor(props){
    super(props);
    this.state ={

    };
  }
  render(){
    return(
      <div className="day-of-week">
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
      </div>
    )
  }
}
export default CalendarWeek;
