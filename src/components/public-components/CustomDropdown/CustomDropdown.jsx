import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const CustomDropdown = ({ handleSelect, records }) => {
  const [value, setValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const Names = records.map((student) => student.full_name);

  const filterOptions = (inputValue) => {
    const inputValueLowerCase = inputValue.toLowerCase();
    return Names.filter((name) =>
      name.toLowerCase().includes(inputValueLowerCase)
    );
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setFilteredOptions(filterOptions(value));
  }, [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search student name"
        className="form-control"
      />
      <Form.Select className="form-control mt-2" onChange={handleSelect}>
        {filteredOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default CustomDropdown;
