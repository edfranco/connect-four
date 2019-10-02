import React from 'react';

const Row = ({ columns, makeLayout, coordinate }) => {
    return (
        <div className="row">
            <div className="columns">
                {makeLayout('columns', columns, coordinate)}
            </div>
        </div>
    );
};

export default Row;
