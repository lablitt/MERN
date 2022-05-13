import React, { useEffect, useState } from "react";

const Patients = (props) => {

  let patients = props.patients;

  if(props.searchValue) {
    patients = props.searchValue && props.patients.reduce((results , patient) => {
      if(patient.name[0].given[0].slice(0, patient.name[0].given[0].length - 3).toLowerCase().includes(props.searchValue)) {
        return results.concat(patient);
      }
      return results;
    }, [])
  }

  const patientsList = patients.map((patient, index) => {
   return <li key={index.toString()}>
      <span>{patient.name[0].given[0].slice(0, patient.name[0].given[0].length - 3)}</span>
    </li>
  })


  return (
    <div>
      {patientsList}
    </div>
  )
}

export default Patients;
