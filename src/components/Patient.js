import React from 'react';

const Patient = ({ patient, removePatient }) => {
    return (
        <div className="patient">
            <div className="patient-name">
                {patient.name}
                <span className="patient-date">
                    ({patient.date})
                </span>
            </div>
            <div>
                <button onClick={() => removePatient(patient.id)}  class="btn btn-secondary btn-lg">
                    퇴원
                </button>
            </div>
        </div>
    );
};

export default Patient;