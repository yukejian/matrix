import React, { Component } from 'react'

class Table extends Component {
  render() {
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
            <td>王翠花</td>
            <td>攻城狮</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
export default Table