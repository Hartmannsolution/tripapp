import {useState, useEffect} from 'react';
import facade from '../apiFacade'

const TestApi = () => {
    const [data, setData] = useState([{}]);
    const [updated, setUpdated] = useState(false);
    useEffect(()=>{
        facade.fetchAny('trips', setData, (error)=>console.log(error) , 'GET', null , true).then(()=>console.log('got it'));
    }, [updated]);
    useEffect(()=>console.log('Data was updated:::::::',data), [data]);

    const populateTable = (data) => {
        return (<>
        <table>
            <thead>
            {Object.keys(data[0]).map(key=><th>{key}</th>)}
            </thead>
            <tbody>
                {/* Map through the object properties. Guide is itself an object so just print the firstname */}
                {data.map(obj => <tr>{Object.values(obj).map(val => <td>{typeof val === 'string'?val:val.firstname}</td>)}</tr>)}
            </tbody>
        </table>
        </>);

    }
    
    return (<>
       {/* { Array.isArray(data)?'is array':typeof data === 'object'?'is object':'not object'} */}
       {Array.isArray(data) && populateTable(data)}
    </>);

}
export default TestApi;