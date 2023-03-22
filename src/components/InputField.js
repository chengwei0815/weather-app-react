import React from 'react';

function InputField(props) {
  const { label, value, onChange } = props;

  return (
    <div>
      <label>{label}</label>
      <input type='text' value={value} onChange={onChange} />
    </div>
  );
}

export default InputField;
