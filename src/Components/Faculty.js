import React from 'react'

const Faculty = () => {
  return (
    <div>
        <h2>faculty details</h2>
        <table border="1px" width="80%" align="center">
        <thead>
            <tr>
                <th>Faculty ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1029</td>
                <td>Dr V. Murali Mohan</td>
                <td>Professor</td>
                <td>CSE</td>
            </tr>
            <tr>
                <td>1036</td>
                <td>Dr NVK Ramesh</td>
                <td>Professor</td>
                <td>ECE</td>
            </tr>
            <tr>
                <td>1049</td>
                <td>Dr Sai Sandeep </td>
                <td>Professor</td>
                <td>CSE</td>
            </tr>
        </tbody>
        </table>

    </div>
  )
}

export default Faculty