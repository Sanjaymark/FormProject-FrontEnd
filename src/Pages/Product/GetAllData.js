import React, { useState, useEffect } from "react";
import { getAllData } from "../../Services/form";
import { Link, useNavigate } from "react-router-dom";

export const DataList = () => {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const Navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => 
    {
        const response = await getAllData();

        if (response.success) {
            setData(response.data);
            setErrorMessage("");
        } else {
            setData([]);
            setErrorMessage(response.message);
        }
    };

    return (
        <div className="h-full w-full m-2">
  {data.length > 0 ? (
    <table className="table-auto">
      <thead>
        <tr className="italic text-2xl bg-neutral dark">
          <th className="border  p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border  p-2">Contact</th>
          <th className="border  p-2">Education</th>
          <th className="border  p-2">Age</th>
          <th className="border  p-2">Gender</th>
          <th className="border  p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id} className="italic text-lg">
            <td className="border border-neutral p-2 w-80">{item.name}</td>
            <td className="border border-neutral p-2 w-80">{item.email}</td>
            <td className="border border-neutral p-2 w-64">{item.contact}</td>
            <td className="border border-neutral p-2 w-40">{item.education}</td>
            <td className="border border-neutral p-2 w-32">{item.age}</td>
            <td className="border border-neutral p-2 w-40">{item.gender}</td>
            <td className="border border-neutral p-2 w-40">
              <Link to={`/form/${item._id}`} className="btn bg-neutral btn-info btn-outline dark">
                View
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>{errorMessage}</p>
  )}
</div>

    );
};
