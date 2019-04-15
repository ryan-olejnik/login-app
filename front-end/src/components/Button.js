import React from 'react';
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  color: white;
  border-radius: 4px;
  border: none;
  padding: 0.25em 1em;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;

  background-color: #1b80e1;
  ${props => props.disabled && css`
    color: #f2f3f5;
    background-color: #a2c7ea;
    cursor: default;
  `}
`

const Button = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </StyledButton>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;