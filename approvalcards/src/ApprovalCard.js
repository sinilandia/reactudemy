import React from 'react';

const ApprovalCard = props => {
    return (
        <div className="ui card">
            <div className="content">{props.author}</div>
            <div className="extra content">
                <div>{props.comment}</div>
                <div className="ui two buttons">
                    <div className="ui green button">Approve</div>
                    <div className="ui red button">Reject</div>
                </div>
            </div>
        
        
        </div>
    )
}

export default ApprovalCard;