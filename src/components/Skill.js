import React from 'react';

function Skill(props) {

    const name = props.skillName;

    return (
        <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="tile">
                <div className="icon">
                </div>
                {name}
            </div>
        </div>
    );
}

export default Skill;