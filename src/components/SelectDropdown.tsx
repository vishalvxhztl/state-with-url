import React from "react";

//--- Type Definations
type SelectDropdownProps = {
    optionsList: {
        value: string;
        title: string;
    }[];
    selectValue: string;
    selectName: string;
    selectOptions: (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
};

const SelectDropdown = ({
    optionsList,
    selectName,
    selectOptions,
    selectValue,
}: SelectDropdownProps) => {
    return (
        <select
            name={selectName}
            value={selectValue}
            onChange={selectOptions}
            className="border rounded p-2 w-1/4"
        >
            {optionsList.map((option, index) => (
                <option key={index} value={option.value.toLowerCase()}>
                    {option.title}
                </option>
            ))}

        </select>
    );
};

export default SelectDropdown;
