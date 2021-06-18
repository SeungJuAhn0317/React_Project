import React, { useState } from 'react';
import InputField from './InputField';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          date: '입원날짜 : ' + patientDate,
        });
        resetErrors();
        resetForm();
      }
    };
    
    return (
    <form onSubmit={onSubmit}>
      <form>
        <div class = "row g-2">
          <div class = "col-md">
            <div class="form-floating">
            <InputField 
              type="text"
              value={patientName}
              placeholder="환자이름"
              onChange={e => setPatientName(e.target.value)}
              errorMessage={nameError}
            />
            <label for="floatingInputGrid">환자 이름</label>
            </div>
          </div>
          <div class = "col-md">
            <div class="form-floating">
            <InputField 
          type="date"
          value={patientDate}
          placeholder="입원일 ex)210617"
          onChange={e => setPatientDate(e.target.value)}
          errorMessage={dateError}
        />
        <label for="floatingInputGrid">입원일 ex)210617</label>
            </div>
          </div>
        </div>
      </form>
      <div class="d-grid gap-2 col-6 mx-auto" >
        <button type="submit" class="btn btn-primary btn-lg" name="add">환자추가</button>
      </div>
    </form>
    
    );
};

export default Form;