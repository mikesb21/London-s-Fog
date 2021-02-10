import React from "react";

const TextAreaComponent = ({
  rows,
  placeholder,
}: {
  rows: number;
  placeholder: string;
}) => {
  return (
    <div className="form-group">
      <textarea
        className="form-control"
        rows={rows}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextAreaComponent;
