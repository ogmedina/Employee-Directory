import React from "react";
import Table from "react-bootstrap/Table"

function Directory(props) {
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th><button onClick={props.sortAlphaUsers}>Name (Sort by First Name)</button><button onClick={props.sortReversedAlphaUsers}>Name (Sort by Last Name)</button></th>
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
                                <td>{location.city}, {location.state} {location.postcode}</td>
                                <td>{email}</td>
                                <td>{cell}</td>
                                <td>{phone}</td>
                            </tr>
                        );                       
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default Directory;