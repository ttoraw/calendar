import React from 'react';
import './style.css';
import './style.scss';
import Frame from './Frame';
const Root = () => {
  return (
    <div>
      <h3 className="title">Hello, React</h3>
      {/*<h3 className="title_scss">Hello, React</h3>*/}
      <Frame/>
    </div>
  );
};

export default Root;
