import React, { memo } from "react";

// props의 데이터가 변경 되지 않으면 컴포넌트를 업데이트 하지 않아도 될 때
// => memo (함수형) / PureComponent (클래스형)
const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();

  const handleAdd = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = "";
  };
  return (
    <form className="add-form" onSubmit={handleAdd}>
      <input type="text" className="add-input" ref={inputRef} />
      <button className="add-buttons">Add</button>
    </form>
  );
});

export default HabitAddForm;
