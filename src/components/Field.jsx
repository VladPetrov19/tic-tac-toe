import React from 'react';
import Cell from './Cell';

import "./Field.css"

const Field = (props) => {
    return (
        <div className="field">
            {
                props.cells.map((cell, i) => (
                    <Cell key={i} value={cell} onClick={() => props.click(i)} />
                ))
            }
        </div>
    );
}

export default Field;
