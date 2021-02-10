// React
import React, { useState } from "react";
import cx from "classnames";

export const TodoItemComponent = (props: any) => {
  const [value, setValue] = useState<number | undefined>();

  const { item, itemSelected, dragHandleProps } = props;
  const scale = itemSelected * 0.05 + 1;
  const shadow = itemSelected * 15 + 1;
  const dragged = itemSelected !== 0;

  const _inc = () => {
    setValue(1);
  };

  const getDragHeight = () => {
    return props.item.subtitle ? 47 : 28;
  };

  return (
    <div
      className={cx("item", { dragged })}
      style={{
        transform: `scale(${scale})`,
        boxShadow: `rgba(0, 0, 0, 0.3) 0px ${shadow}px ${2 * shadow}px 0px`,
      }}
    >
      <div className="dragHandle" {...dragHandleProps} />
      <h2>{item.name}</h2>
      {item.subtitle && (
        <div className="subtitle">
          This item has a subtitle visible while dragging
        </div>
      )}
      <div>
        some description here
        <br />
        this planet orbits the sun
        <br />
        this planet is mostly round
      </div>
      {item.subtitle && (
        <div>
          subtitled planets are better
          <br />
          and have longer descriptions
        </div>
      )}
      <div>
        State works and is retained during movement:{" "}
        <input type="button" value={value} onClick={() => _inc()} />
      </div>
    </div>
  );
};
