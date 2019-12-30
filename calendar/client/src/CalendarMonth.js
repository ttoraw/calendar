import React from 'react';
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
class CalendarMonth extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      year: new Date(this.props.today).getFullYear(),
      monthNum: new Date(this.props.today).getMonth()+1,
      monthEn: monthNames[new Date(this.props.today).getMonth()],
    };
  }
  render(){
    let dateTime = this.state.year+"-"+this.state.monthNum
    return(
      <div className="month-indicator">
        <time dateTime={dateTime}> {this.state.year} {this.state.monthEn}</time>
      </div>
    )
  }
}
export default CalendarMonth;
