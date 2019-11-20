import React from 'react';
import CalendarMonth from './CalendarMonth';
import CalendarWeek from './CalendarWeek';
import CalendarDates from './CalendarDates';
class Frame extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      today : new Date()
    };
  }
  render(){
    return(
      <main>
        <div className="calendar">
          <CalendarMonth today = {this.state.today}/>
          <CalendarWeek today = {this.state.today}/>
          <CalendarDates today = {this.state.today}/>
        </div>
      </main>

    )
  }

}
export default Frame;
