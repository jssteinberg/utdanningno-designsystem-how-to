import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import { useRef } from 'react';
import {
  customTheme,
  DropdownIndicator,
  Option,
  customStyles,
  activeClassName,
} from './lib';
import styles from '@utdanningno/designsystem-styles/select.module.css';

export const Select = ({ options, value, onMouseDown, onMouseUp, onChange, className, ...rest }) => {
  const classes = [
    styles['select'],
    className
  ].join(` `);
  const selectRef = useRef(null);

  /**
   * onMouseDown decorator
   * adds styling class
   * @param event
   */
  const handleMouseDown = (event) => {
    selectRef?.current.classList.add(activeClassName);
    onMouseDown(event);
  };

  /**
   * onMouseUp decorator
   * removes styling class
   * @param event
   */
  const handleMouseUp = (event) => {
    selectRef?.current.classList.remove(activeClassName);
    onMouseUp(event);
  };

  return (
    <div
      className={classes}
      tabIndex="0"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      ref={selectRef}
    >
      <ReactSelect
        value={value}
        classNamePrefix="dropdown"
        options={options}
        theme={customTheme}
        styles={customStyles}
        components={{ DropdownIndicator, Option }}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Select.defaultProps = {
  options: [
    { label: 'Option 1', value: 'option_1' },
    { label: 'Option 2', value: 'option_2' },
    { label: 'Option 3', value: 'option_3' },
  ],
  onMouseDown: () => {},
  onMouseUp: () => {},
  onChange: () => {},
};

export default Select;
