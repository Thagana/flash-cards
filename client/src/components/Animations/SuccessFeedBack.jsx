import React, { Fragment } from 'react';
import './styles/success-feedback.css';


function SuccessAnimate() {
  return (
    <Fragment>
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
    </Fragment>
  );
}

export default SuccessAnimate;