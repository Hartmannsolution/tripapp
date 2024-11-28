import React, { useState } from 'react';
import styled from 'styled-components';

const DownArrow = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid ${(props)=>props.theme.grey}; /* Arrow color */
  margin-bottom: 4px; /* Optional margin */
`;

const DropdownContainer = styled.div`
  width: 200px;
  position: relative;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.grey};
  margin: 0 auto;
  border-radius: 4px;
  background-color: #87CEFA; /* Light rose color */
`;

const SelectedOption = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  border-bottom-left-radius: ${(props) => (props.isOpen ? '0' : '4px')};
  border-bottom-right-radius: ${(props) => (props.isOpen ? '0' : '4px')};
`;

const OptionsList = styled.ul`
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: #87CEFA; /* Light rose color */
  border: 1px solid #ccc;
  border-top: none;
  max-height: 250px;
  overflow-y: scroll; /* Always show scrollbar */
  z-index: 1000;
`;

const OptionItem = styled.li`
  padding: 10px;
  list-style: none; /* This removes the bullet point */
  color: ${(props) => props.theme.darkGrey}; /* Dark blue color */
  &:hover {
    background-color: #00BFFF; /* Slightly darker rose */
  }
`;

const CustomDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Choose category');

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleOptionClick = (option, event) => {
    event.stopPropagation(); // Prevent the dropdown from toggling when clicking an option
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <DropdownContainer onClick={handleToggle} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
      <OptionItem>{selectedOption}</OptionItem>
      {isOpen && (
        <OptionsList>
          {options.map((option, index) => (
            <OptionItem key={index} onClick={(e) => handleOptionClick(option, e)}>
              {option}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </DropdownContainer>
  );
};

export default CustomDropdown;
