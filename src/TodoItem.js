// TodoItem.jsx
import React from "react";

const TodoItem = props => {
  return !props.isEdit ? (
    <div className="root">
      <span className="title">{props.value}</span>
      <button className="change" onClick={props.onClickMod}>
        수정
      </button>
      <button className="remove" onClick={props.onClickDel}>
        삭제
      </button>
    </div>
  ) : (
    <div className="root">
      <input
        type="text"
        value={props.editValue}
        onChange={props.onChageValue}
      />
      <button className="change" onClick={props.onClickConfirm}>
        확인
      </button>
    </div>
  );
};

export default TodoItem;
/*// App.jsx
import React from "react";
import TodoItem from "./TodoItem";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      value: "",
      editItem: -1,
      editValue: ""
    };
  }

  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items
    });
  };

  onClickDel = idx => {
    const newItems = [...this.state.items];
    newItems.splice(idx, 1);
    this.setState({ items: newItems });
  };

  onClickMod = idx => {
    this.setState({ editItem: idx, editValue: this.state.value });
  };

  onClickConfirm = idx => {
    const newItems = [
      ...this.state.items.slice(0, idx),
      this.state.editValue,
      ...this.state.items.slice(idx + 1)
    ];
    this.setState({ items: newItems, editItem: -1 });
  };

  onChageValue = e => {
    this.setState({ editValue: e.target.value });
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="aroot">
        <div className="inputBox">
          <input type="text" onChange={this.onChange} className="input" />
          <button onClick={this.onClickAdd} className="addBtn">
            추가
          </button>
        </div>
        {this.state.items.map((value, idx) => (
          <TodoItem
            // key={Math.random() + idx}
            value={value}
            className="list"
            onClickDel={() => this.onClickDel(idx)}
            onClickMod={() => {
              this.onClickMod(idx);
            }}
            // 수정 할 때 사용하는 props
            isEdit={this.state.editItem === idx}
            editValue={this.state.editValue}
            onChageValue={this.onChageValue}
            onClickConfirm={() => {
              this.onClickConfirm(idx);
            }}
          />
        ))}
      </div>
    );
  }
}
export default App;*/