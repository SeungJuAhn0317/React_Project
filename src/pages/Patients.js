import React, { useState } from 'react';
import Form from '../components/Form';
import Patient from '../components/Patient';
import Header from '../components/Header';
import { text } from 'dom-helpers';



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
      }) :
      <div class="alert alert-danger" role="alert">
        입원한 환자가 없습니다!
      </div>
      const addPatient = (patient) => {
        setPatients([
          ...patients,
          patient
        ]);
      };

    return (
        <>
          <Header/>
            <h1>환자 관리 시스템</h1>
            <Form addPatient={addPatient} /><br /> <hr></hr>
            <h1>환자 목록</h1>
            {renderPatients}
        </>
    );
};

export default Patients;