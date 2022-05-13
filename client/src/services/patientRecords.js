import axios from 'axios'

export const getAllPatientRecords = new Promise((resolve, reject) => {
  console.log("getAllPatientRecords called...");
  try {
    //could make this a const and import
    axios.get("http://localhost:3001/records")
      .then((res) => {
        console.log("getAllPatientRecords > axios res=", res);
        resolve(res.data);
      }).catch((err) => {
        console.log("getAllPatientRecords > axios err=", err);
        reject("Error in getAllPatientRecords axios!");
        reject("error");
      });


  } catch(error) {
    console.error("in patientRecords > getAllPatientRecords, error===", error);
    reject("SYSTEM_ERROR");
  }
})
