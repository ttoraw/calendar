import React, { Component } from 'react';

class TodoEdit extends Component{
  state ={
  }
  componentDidMount(){
   
  }

  render(){
      console.log(this.props.todoEdit)
      return(
        <div className="dim-layer">
            <div className="dimBg" onClick={this.props.clickTodoEdit}></div>
            <div id="layer2" className="pop-layer">
                <div class="topnav">
                
                <form action="/action_page.php">
                    New Todo!
                    <input type="text" name="firstname" defaultValue="Mickey"/>  <a href="#" >✍</a>
                </form> 
                </div>

                <div class="content">
                <p>A topnav, content and a footer.</p>
                <p>A topnav, content and a footer.</p>
                <p>A topnav, content and a footer.</p>
                </div>

                <div class="footer">
                <a href="#" className="btn-layerClose">Close</a>
                </div>
            </div>
        </div>
      );
   }
}
export default TodoEdit;
