import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';


const App = (props) => {
    return (
        <div className="ui container comments">
            <ApprovalCard author="Sam" comment="Cool beans." />
            <ApprovalCard author="Elise" comment="Even cooler edamames." />
            <ApprovalCard author="Jane" comment="Most coolest haricots." />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
