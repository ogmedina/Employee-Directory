import React from "react";
import Table from "react-bootstrap/Table";
import "./style.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function Directory(props) {
    return (
        <div>
            {/* Table for directory */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th><DropdownButton variant="success" id="dropdown-basic-button" title="Name">
                            <Dropdown.Item onClick={props.sortAlphaUsers}>First Name</Dropdown.Item>
                            <Dropdown.Item onClick={props.sortReversedAlphaUsers}>Last Name</Dropdown.Item>                                         
                            </DropdownButton></th>
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