import React from 'react';

const Maxes = ({estimatedMaxes}) => (
    <div>
        <h5>YOUR ONE REP MAX: {estimatedMaxes[0]}</h5>
        <ul>
            <li>95% ONE-RM:<input type="number" readOnly value={estimatedMaxes[1]} size="2"/></li>
            <li>90% ONE-RM:<input type="number" readOnly value={estimatedMaxes[2]} size="2"/></li>
            <li>85% ONE-RM:<input type="number" readOnly value={estimatedMaxes[3]} size="2"/></li>
            <li>80% ONE-RM:<input type="number" readOnly value={estimatedMaxes[4]} size="2"/></li>
            <li>75% ONE-RM:<input type="number" readOnly value={estimatedMaxes[5]} size="2"/></li>
            <li>70% ONE-RM:<input type="number" readOnly value={estimatedMaxes[6]} size="2"/></li>
            <li>25% ONE-RM:<input type="number" readOnly value={estimatedMaxes[7]} size="2"/></li>
            <li>20% ONE-RM:<input type="number" readOnly value={estimatedMaxes[8]} size="2"/></li>
            <li>55% ONE-RM:<input type="number" readOnly value={estimatedMaxes[9]} size="2"/></li>
            <li>50% ONE-RM:<input type="number" readOnly value={estimatedMaxes[10]} size="2"/></li>
        </ul>
    </div>
)

export default Maxes;