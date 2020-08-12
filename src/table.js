import React, { Component } from 'react'

class Table extends Component {
  render() {
    const name = "于克健";
    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Job</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>李狗蛋</td>
            <td>程序猿</td>
          </tr>
          <tr>
            <td>{name}</td>
            <td>123</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
export default Table
