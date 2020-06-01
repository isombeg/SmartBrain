import React from 'react';

const ErrorMessage = ({errorState}) => {
    if(!errorState) return null;
        
    else if(errorState === 1){
        return (
            <div className="lh-copy mt1">
                <p href="#0" className="f6 dark-red db err-msg">No field should be left empty</p>
            </div>
        )
    }

    else if(errorState === 2){
        return (
            <div className="lh-copy mt1">
                <p href="#0" className="f6 dark-red db err-msg">Email address and password do not match</p>
            </div>
        )
    }

    else return (
        <div className="lh-copy mt1">
            <p href="#0" className="f6 dark-red db err-msg">Error logging in. Try again</p>
        </div>
    )
}

export default ErrorMessage;