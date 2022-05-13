import React, { useEffect, useState } from "react";
import { getAllPatientRecords } from "../services/patientRecords.js";



const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getAllPatientRecords
     .then((res) => {
       console.log("Home > getAllPatientRecords > res=", res);
       setPatients(res);
       setIsLoading(false);
     })
     .catch((err) => {
       console.log("axios err=", err);
       setPatients([]);
       setIsLoading(false);
     });

   return () => {
     console.log("axios cleanup.");
   };
 }, []);

   const patientsList = patients.map((patient, index) => {
    return <li key={index.toString()}>
       <span>{patient.gender}</span>
     </li>
   })

   const NoPatientsList = <div>No patients found!</div>;


  return (
    <div>
      Hello I am here in the Home component
      {isLoading ? (console.log("isLoading.")) : patients ? patientsList :  NoPatientsList}
    </div>
  );
}

export default Home;
