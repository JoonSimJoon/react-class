import React, { Component } from 'react';
import styled, { css } from 'styled-components';
const Btt = styled.button`
  color:white;
  background-color:black;
`


class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      show: true,
    };
  }

  onClickChange = e => {
    const change = prompt('수정');
    this.setState({ value: change });
  };
  onClickDelete = e => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div style={{ display: this.state.show ? 'block' : 'none' }}>
        <span>{this.state.value}</span>
        <Btt onClick={this.onClickChange}>수정</Btt>
        <Btt onClick={this.onClickDelete}>삭제</Btt>
      </div>
    );
  }
}

export default TodoItem;