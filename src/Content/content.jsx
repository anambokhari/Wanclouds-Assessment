// import React from 'react'
// import { useSelector } from "react-redux";
// import './content.css';

// const Content = () => {

//   const formData = useSelector((state) => state.formData);

//   return (
//     <div className='displayData'>
//       <h2>Saved Form Data</h2>
//       {formData.length === 0 ? (
//         <p>No data saved yet.</p>
//       ) : (
//         <ul>
//           console.log(formData);
//           {formData.map((data, index) => (
//             <li key={index}>
//               <strong>{data.firstName} {data.lastName}</strong> <br />
//               Address: {data.address} <br />
//               Company: {data.company} <br />
//               Phone: {data.phone}
//             </li>
//           ))}
//         </ul>
//       )}
     
//     </div>
//   );
// };

// export default Content;

// Content.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFormData } from "../Redux/store";
import './content.css';

const Content = () => {
  const dispatch = useDispatch();

  // Get the form data from Redux store
  const formData = useSelector((state) => state.formData);

  const handleDelete = (index) => {
    dispatch(deleteFormData(index));
  };

  return (
    <div className="content-wrap">
      <div className="content">
        <h2>Saved Form Data</h2>
        {formData.length === 0 ? (
          <p>No data saved yet.</p>
        ) : (
          <div className='table-wrapper'>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>Company</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {formData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.address}</td>
                    <td>{data.company}</td>
                    <td>{data.phone}</td>
                    <td>
                      <button onClick={() => handleDelete(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;

