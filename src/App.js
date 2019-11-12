import React from 'react';
import TodoItem from './TodoItem';
import { stat } from 'fs';  
import styled, { css } from 'styled-components';

const Head = styled.div`  
  
  font-size:40px;
  color:white;
  background-color:#01DF3A;
  border:3px solid black;
`

const Add = styled.button`
  justify-content:center
  background-color:white;
  color:black;
`


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      items:[],
      value :""
    };
  }
  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items,
    });
  };
  onChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <Head>10516 심준 Todolist</Head>
        </header>
        <section>
          <input type='text' onChange={this.onChange}/>
          <Add onClick={this.onClickAdd}>추가</Add>
          {this.state.items.map((value, idx) => (
            <TodoItem key={idx} value={value} />
          ))}
        </section>
        
      </React.Fragment>
    );
  }
}


export default App;