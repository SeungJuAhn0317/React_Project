import React, { useState } from 'react';
import InputField from './InputField';

const Form = ({ addPatient }) => {
    const [patientName, setPatientName] = useState('');
    const [patientDate, setPatientDate] = useState('');
    const [nameError, setNameError] = useState('');
    const [dateError, setDateError] = useState('');
  
    const resetForm = () => {
        setPatientName('');
        setPatientDate('');
    };

    const validateForm = () => {
      resetErrors();
      let validated = true;
      if (!patientName) {
        setNameError('환자이름을 입력해주세요');
        validated = false;
      }

      if (!patientDate) {
        setDateError('입원일을 입력해주세요');
        validated = false;
      }

      return validated;
    };

    const resetErrors = () => {
      setNameError('');
      setNameError('');
    };

    const onSubmit = (event) => {
      event.preventDefault();
      if (validateForm()) {
        addPatient({
          id: Date.now(),
          name: patientName,
          date: patientDate,
        });
        resetErrors();
        resetForm();
      }
    };
    return (
    <form onSubmit={onSubmit}>
        <InputField 
          type="text"
          value={patientName}
          placeholder="환자이름"
          onChange={e => setPatientName(e.target.value)}
          errorMessage={nameError}
        />
        <InputField 
          type="number"
          value={patientDate}
          placeholder="입원일 ex)210617"
          onChange={e => setPatientDate(e.target.value)}
          errorMessage={dateError}
        />
        <button type="submit">환자추가</button>
    </form>
    );
};

export default Form;