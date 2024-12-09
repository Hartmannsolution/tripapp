import { useState, useEffect } from "react";
import {fetchAny} from "../apiFacade";

const TestApi = () => {
  const [data, setData] = useState([{}]);
  const [updated, setUpdated] = useState(false);
  useEffect(()=> {
    (async () => {
    try{
      const data = await fetchAny( "trips");
      setData(data);
    } catch (error) {
      console.error(error);
    }
  })()}, []);
//   useEffect(() => console.log("Data was updated:::::::", data), [data]);

  // Populate the table with the data depending on the type of data received (array or object)
  const populateTable = (data) => {
    return (
      <>
        <table>
          <thead>
            <tr key="0">
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody >
            {/* Map through the object properties. Guide is itself an object so just print the firstname */}
            {data.map((obj) => (
              <tr key={obj.id}>
                {Object.values(obj).map((val,idx) => (
                  <td key={idx}>{typeof val === "object" ?val.firstname+' '+val.lastname:val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <>
      {/* { Array.isArray(data)?'is array':typeof data === 'object'?'is object':'not object'} */}
      {Array.isArray(data) && populateTable(data)}
    </>
  );
};
export default TestApi;
