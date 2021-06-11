import React from 'react';
import './AccountPreview.css';

function AccountPreview(props) {

    // React.useEffect(() => { console.log(props); }, []);

    return (
        <div className="userCard">
            <div className="card-title" style={{margin: "0rem"}}>
                <h3>Account</h3>
            </div>
            <hr />
            <div className="card-body">
                <p>Some account Info</p>
            </div>
        </div>
    );
}

export default AccountPreview;