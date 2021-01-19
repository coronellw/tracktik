import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from 'react-device-detect';
import PropTypes from 'prop-types';
import './Dropdown.scss';

function Dropdown({
  options = [],
  defaultOption = {
    label: '-- Please choose --',
    value: undefined
  },
  label,
  disabled = false,
  multiple = false,
  selectedValue = undefined,
  onSelectionChange = () => { },
}) {
  const [_options, set_options] = useState([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    setSelected(selectedValue || defaultOption.label)
  }, [selectedValue, defaultOption]);

  useEffect(() => {
    const mergedOptions = [defaultOption, ...options];
    set_options(mergedOptions);
  }, [defaultOption, options]);

  const handleClick = () => {
    if(!isMobile) {
      alert('is not mobile');
    } else {
      const selector = document.querySelector('#wins-select-item');
      alert(`is mobile and selector ${selector ? '':'not '} found`);
      selector.click();
    }
  }

  const optionsElement = _options.map((opt, idx) => (
    <option
      key={opt.value + '' + idx}
      value={opt.value}
      disabled={disabled}
    >
      {opt.label}
    </option>
  ));

  return (
    <span className="dropdown">
      {label && <label htmlFor="wins-select-item">{label}</label>}
      <select
        id="wins-select-item"
        name="wins-select-item"
        disabled={disabled}
        multiple={multiple}
        defaultValue={selectedValue}
      >
        {optionsElement}
      </select>
      <span className="selected-value" onClick={handleClick}>
        <span className="selected-value__label">
          {selected}
        </span>
        <Icon icon={faChevronDown} className="selected-value__icon" />
      </span>
    </span>
  );
}

Dropdown.propTypes = {
  options: PropTypes.array,
  defaultOption: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    disabled: PropTypes.bool
  }),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  selectedValue: PropTypes.any,
  onSelectionChange: PropTypes.func,
}

export default Dropdown;
