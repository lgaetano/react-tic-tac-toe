import React from 'react';
import PropTypes from 'prop-types';

import './Square.css';

const Square = (props) => {
  // For Wave 1 enable this
  //  Component to alert a parent
  //  component when it's clicked on.
  // const handleClick = () => {
  //   props.onClickCallback(props.id);
  // }
  // const doSomething = () => {
  //   onClickCallback(props.id);
  //   console.log('I did something');
  // };
  return (
    // <button onClick={doSomething} className="square">
    <button
      onClick={() => {
        props.onClickCallback(props.id);
      }}
      // .then(() => {
      //   props.checkForWinner();

      className="square"
    >
      {/* this is what shows as the player on the board */}
      {props.value}
    </button>
  );
};

Square.propTypes = {
  checkForWinner: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
