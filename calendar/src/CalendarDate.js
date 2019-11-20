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
        <span style={{display:'block',position: 'absolute', top: '0px'}}>
          <time dateTime={this.state.year+"-"+this.state.month+"-"+dateNumber}>{this.state.date}</time>
        </span>
        <span style={{backgroundColor:"red", display:'block', margin:'2px'}}>span1</span>
      	<span style={{backgroundColor:"blue", display:'block', margin:'2px'}}>span2</span>
      	<span style={{backgroundColor:"green", display:'block', margin:'2px'}}>span3</span>
        <span style={{backgroundColor:"pink", display:'block', margin:'2px'}}>span4</span>
      </button>
    )
  }
}
export default CalendarDate;
