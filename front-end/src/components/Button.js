import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  color: white;
  background-color: #1b80e1;
  border-radius: 4px;
  border: none;
  padding: 0.25em 1em;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`

const Button = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
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