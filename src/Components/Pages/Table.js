// Table.js
import React from 'react';
import './Table.css';

const Table = () => {
    return (
        <div className="table-container">
            <h1 className="table-title">Table Page</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                        <th>Column 4</th>
                        <th>Column 5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                        <td>Data 5</td>
                    </tr>
                    <tr>
                        <td>Data 6</td>
                        <td>Data 7</td>
                        <td>Data 8</td>
                        <td>Data 9</td>
                        <td>Data 10</td>
                    </tr>
                    <tr>
                        <td>Data 11</td>
                        <td>Data 12</td>
                        <td>Data 13</td>
                        <td>Data 14</td>
                        <td>Data 15</td>
                    </tr>
                    <tr>
                        <td>Data 16</td>
                        <td>Data 17</td>
                        <td>Data 18</td>
                        <td>Data 19</td>
                        <td>Data 20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
