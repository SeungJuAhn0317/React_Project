import React, { useState } from 'react';
import Form from '../components/Form';
import Patient from '../components/Patient';

const Patients = () => {
    const [patients, setPatients] = useState([]);
    const removePatient = (id) => {
        setPatients(patients.filter(patient => {
          return patient.id !== id;
        }));
      };
    const renderPatients = patients.length ? patients.map(patient => {
        return (
          <Patient 
            patient={patient} 
            key={patient.id}
            removePatient={removePatient}
          />
        );
      }) : '입원한 환자가 없습니다';
      const addPatient = (patient) => {
        setPatients([
          ...patients,
          patient
        ]);
      };

    return (
        <>
            <h1>환자 목록</h1>
            <Form addPatient={addPatient} />
            {renderPatients}
        </>
    );
};

export default Patients;