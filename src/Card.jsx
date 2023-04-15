import React from "react";
import styled from 'styled-components';

const CardStyle = styled.div`
  width: 250px;
  height: 100px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  text-align: center;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin: 0 20px 20px;
  }
  button {
    padding: 10px 20px;
    cursor: pointer;
    border: none;
  }
`;

function CardToExport(props) {
    const {title, text, button} = props;

    return (
        <CardStyle>
            {title && <h2>{title}</h2>}
            {text && <p>{text}</p>}
            {button && <button>{button}</button>}
        </CardStyle>
    );
}

CardToExport.propTypes = {};
export const Card = React.memo(CardToExport)
