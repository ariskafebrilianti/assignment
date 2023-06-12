import { useState } from "react";
/*import downloadJSON from './components/downloadData'*/
/*import { dataGrade } from "./components/DraftTable"*/

export default function App() {
  const [data] = useState([
    { id: 1, name: "Mahasiswa 1" },
    { id: 2, name: "Mahasiswa 2" },
    { id: 3, name: "Mahasiswa 3" },
    { id: 4, name: "Mahasiswa 4" },
    { id: 5, name: "Mahasiswa 5" },
    { id: 6, name: "Mahasiswa 6" },
    { id: 7, name: "Mahasiswa 7" },
    { id: 8, name: "Mahasiswa 8" },
    { id: 9, name: "Mahasiswa 9" },
    { id: 10, name: "Mahasiswa 10" },
  ],
  );

  return (
    <div>
      <h1>Aspek Penilaian Mahasiswa</h1>
      <table id="formGrade">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th id="grade1">Aspek Penilaian 1</th>
            <th id="grade2">Aspek Penilaian 2</th>
            <th id="grade3">Aspek Penilaian 3</th>
            <th id="grade4">Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <span className="material-symbols-outlined">
                  account_circle
                </span>
              </td>
              <td id="name">{item.name}</td>
              <td>
                <input type="number" min="1" max="10" />
              </td>
              <td>
                <input type="number" min="1" max="10" />
              </td>
              <td>
                <input type="number" min="1" max="10" />
              </td>
              <td>
                <input type="number" min="1" max="10" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit" id="submitButton" /*onClick={downloadJSON()}*/>
        Simpan
      </button>
    </div>
  );
  
}
