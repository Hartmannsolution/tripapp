import { useState, useEffect } from "react";
import facade from "../apiFacade";
import styled from "styled-components";

const StyledGuideTable = styled.table`
    border-collapse: collapse;
    width: 80%;
    margin: 0 auto;
    th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    `;

export default function Guides() {
    const [guides, setGuides] = useState([]);
    useEffect(() => {
        facade.fetchAny("guides", setGuides, "GET", null, true);
    }, []);

  return (
    <>
      <h1>Guides</h1>
      <StyledGuideTable>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Years of Experience</th>
          </tr>
        </thead>
        <tbody>
          {guides.map((guide) => (
            <tr key={guide.id}>
              <td>{guide.firstname}</td>
              <td>{guide.lastname}</td>
              <td>{guide.email}</td>
              <td>{guide.phone}</td>
              <td>{guide.yearsOfExperience}</td>
            </tr>
          ))}
        </tbody>
      </StyledGuideTable>
    </>
  );
}
