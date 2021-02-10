// React
import React, { useState } from "react";

// Assets
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

// Components
import TextAreaComponent from "../common/TextAreaComponent";

const SortableItem = SortableElement(({ value }: { value: any }) => (
  // eslint-disable-next-line
  <a className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{value}</h5>
      <small>3 days ago</small>
    </div>
    <p className="mb-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
      risus varius blandit.
    </p>
    <small>Donec id elit non mi porta.</small>
  </a>
));

const SortableList = SortableContainer(({ items }: { items: Array<any> }) => {
  return (
    <div className="list-group">
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </div>
  );
});

const TodoComponent = () => {
  const [todoList] = useState([
    {
      title: "Todo 1",
      description: "Stop wasting money!",
    },
    {
      title: "Resume the Korean course",
      description: "Continue with the udemy korean course",
    },
  ]);

  const [items, setItems] = useState(todoList.map((todo) => todo.title));

  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: any;
    newIndex: any;
  }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div className="row">
      <div className="col-4">
        <SortableList items={items} onSortEnd={onSortEnd} />
      </div>
      <div className="col-8">
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            aria-labelledby="list-home-list"
          >
            <TextAreaComponent rows={10} placeholder="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
