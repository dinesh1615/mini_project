import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Cookies from "js-cookie";

const Queries = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await fetch(
          "https://node-js-ten-delta.vercel.app/queries"
        ); // Adjust the URL to match your backend endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQueries(data);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };

    fetchQueries();
  }, []);

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return (
      <div className="w-100 flex items-center">
        <h1 className="text-center mt-5 mb-5">
          You are Not Authorized as an Employee
        </h1>
      </div>
    );
  }

  return (
    <div className="w-100 flex items-center">
      <Table responsive="sm" className="w-75 m-auto mt-5 mb-5">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.subject}</td>
              <td>{item.message}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Queries;
