import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ErrorModal from "../../modals/ErrorModal";

const CustomDropdown = ({ handleSelect, records, formName }) => {
  const [value, setValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [inputError, setInputError] = useState(false);

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

  const handelSubmit = (e) => {
    setValue(e.target.value);
    handleSelect(e.target.value);
    if (!value) {
      setInputError(true);
      return;
    }
  };
  return (
    <div>
      <input
        required
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search name"
        className="form-control"
      />
      <Form.Select
        form={formName}
        className="form-control mt-2"
        onChange={handelSubmit}
      >
        <option disabled selected>
          Select name ...
        </option>
        {filteredOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
      {inputError && (
        <div className="invalid-feedback">Please enter a note.</div>
      )}
    </div>
  );
};

export default CustomDropdown;
