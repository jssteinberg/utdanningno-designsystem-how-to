import React from "react";
import styles from '@utdanningno/designsystem-styles/select.module.css';

/**
 * removes default colors from ReactSelect
 * @param theme
 * @returns {*&{colors: {}}}
 */
export const customTheme = theme => ({
  ...theme,
  colors: {}
})

/**
 * Custom Dropdown arrow
 * @returns {JSX.Element}
 * @constructor
 */
export const DropdownIndicator = () => (
  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={'select__icon'} focusable={false} aria-hidden={true}>
    <path d="M1.53223 5.14355L9.03223 12.6436L16.5322 5.14355" stroke="#333333" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Option = ({innerProps, isFocused, isSelected, isDisabled, label}) => {
  const optionClasses = [
    styles['dropdown__option'],
    isFocused ? styles['dropdown__option--is-focused'] : ``,
    isSelected ? styles['dropdown__option--is-selected'] : ``,
    isDisabled ? styles['dropdown__option--is-disabled'] : ``,
  ].join(` `);

  return (
    <button disabled={isDisabled} className={optionClasses} {...innerProps}>
      <span>{label}</span>
    </button>
  );
};

/**
 * Reset default ReactSelect styles
 */
export const customStyles = {
  menu: () => ({
    borderBottom: 'none',
    color: 'inherit',
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    padding: 0,
    boxShadow: 'none'
  }),
  control: () => ({}),
  group: () => ({}),
  groupHeading: () => ({}),

  option: (provided, state) => ({
    cursor: state.isDisabled ? 'not-allowed' : 'pointer',
    opacity: state.isDisabled ? 0.5 : 1,
  }),
}

export const activeClassName = 'select--is-active';
