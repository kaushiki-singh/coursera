import React from 'react';
import './SpecialSelection.css';
import CloseIcon from '@material-ui/icons/Close';

function SpecialSelection() {
    return (
        <div className="special">
            <div><p className="content"><span>Free learning resources 
            <span> <a href="" className="select"><strong>For Universities</strong></a> </span>and 
            <span> <a href="" className="select"><strong>For College Students</strong></a></span></span></p></div>
            <a href="" title="close" className="close"><CloseIcon /></a>
        </div>
    )
}

export default SpecialSelection
