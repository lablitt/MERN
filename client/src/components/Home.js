import React, { useEffect, useState } from "react";
import { getAllPatientRecords } from "../services/patientRecords.js";
import Patients from "./Patients";
import SearchBar from "./SearchBar";


const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [patients, setPatients] = useState([]);
  const [searchValue, setSearchValue] = useState(null);

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

   const handleSearchValue = (searchValue) => {
     setSearchValue(searchValue);
   }

   const NoPatientsList = <div>No patients found!</div>;


  return (
    <div>
      Hello I am here in the Home component
      <SearchBar handleSearchValue={handleSearchValue}/>
      {isLoading ? (console.log("isLoading.")) : patients ? <Patients patients={patients} searchValue={searchValue} /> :  NoPatientsList}
    </div>
  );
}

export default Home;
