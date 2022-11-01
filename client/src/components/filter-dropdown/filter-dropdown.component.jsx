import React, { useState } from "react";
import Select from "react-select";
import "./filter-dropdown.styles.scss";

const FilterDropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 20,
    }),

    control: (_, { selectProps: { width } }) => ({
      width: width,
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <div className="FilterDropdown-Container">
      <Select
        defaultValue={selectedOption}
        width="200px"
        menuColor="red"
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
};

export default FilterDropdown;
