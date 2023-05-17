import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Persons() {
  const [data1, setData] = useState(["Wait"]);
  const navigate = useNavigate();
  async function f() {
    var data = [];
    await fetch("http://localhost:5000/table")
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < response.count; i++) {
          data.push(response.name[i]);
          data.push(response.surname[i]);
          data.push(response.age[i]);
          data.push(response.university[i]);
          data.push(i);
        }
        var groupData = [];

        for (let k = 0; k < data.length / 5; k++) {
          var grouping = [];
          grouping.push(data[5 * k]);
          grouping.push(data[5 * k + 1]);
          grouping.push(data[5 * k + 2]);
          grouping.push(data[5 * k + 3]);
          grouping.push(data[5 * k + 4]);
          groupData.push(grouping);
        }

        // console.log(h);
        setData(groupData);
      })
      .finally(function () {
        // console.log(data1);
      });
  }
  f();
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item) => (
            <tr key={item[4]}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
              <td>{item[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <button onClick={() => navigate("/")}>Back</button>
      </p>
    </>
  );
}
