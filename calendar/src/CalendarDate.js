import React from 'react';

class CalendarDate extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      year: this.props.year,
      month: this.props.month,
      date: this.props.date
    };
  }
  componentDidMount(){

  }
  render(){
    let dateNumber = this.state.date<10?"0"+this.state.date : this.state.date
    return(
      <button>
        <time dateTime={this.state.year+"-"+this.state.month+"-"+dateNumber}>{this.state.date}</time>
      </button>
    )
  }
}
export default CalendarDate;
