import React from "react";
import Table from "react-bootstrap/Table"

function Directory(props) {
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Cell Phone</th>
                        <th>Home Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employee.map(({login, name, picture, email, location, cell, phone }) => {
                        return(
                            <tr key={login.uuid}>
                                <td><img src={picture.large} alt="employee"/></td>
                                <td>{name.first} {name.last}</td>





                            </tr>
                        );                       
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default Directory;