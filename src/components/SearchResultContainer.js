import React, { Component } from "react";
import API from "../utils/API";
import Directory from "./Directory/index";


class SearchResultContainer extends Component {
    state = {        
        employees: [],
        
    };

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.getEmployeeList()
        .then(res => this.setState({ employees: res.data.results }))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    }

    render() {
        console.log(this.state.employees)
        
        return (
            <div>
                <Directory
                    employee={this.state.employees}
                />
            </div>
        );
    }
}

export default SearchResultContainer;


