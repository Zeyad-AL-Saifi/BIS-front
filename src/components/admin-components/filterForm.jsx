import React from "react";

const FilterForm = ({handelInput}) => {
  return (
    <div>
      <div className="container p-3">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search By Name..."  onInput={handelInput}/>
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
