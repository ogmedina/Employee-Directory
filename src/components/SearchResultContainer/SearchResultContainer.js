import React, { Component } from "react";
import API from "../../utils/API";
import Directory from "../Directory/index";
import "./style.css";

class SearchResultContainer extends Component {
    //Sets state for arrays to be filled 
    state = {        
        employees: [],
        search: "",
        filterResult: [],        
    };

    //At start of load, run function searchEmployees() to populate arrays
    componentDidMount() {
        this.searchEmployees();
    }

    //Function to load employees from API into the employees and filterResult arrays, and catch errors and log them into the console
    searchEmployees = () => {
        API.getEmployeeList()
        .then(res => this.setState({ employees: res.data.results, filterResult: res.data.results }))        
        .catch(err => console.log(err));
    };

    //Search function to search through the employees array and set filterResult based on the filtered response entered
    activeSearch = (e) => {
        this.setState({ search: e.target.value }, () => {
            this.setState({ filterResult: this.state.employees.filter(
                res => res.name.first.toLowerCase().includes(this.state.search.toLowerCase()))
        });
     }); 
    };

    //Function to sort first names by first names
    comparison = (a, b) => {
        const sortA = a.name.first.toLowerCase();
        const sortB = b.name.first.toLowerCase();

        let comparison = 0;
        if (sortA > sortB){
            comparison = 1;
        }else if (sortA < sortB) {
            comparison = -1;
            }
        return comparison;
    }
    
    //Function to change state based on the first name comparison function
    sortUsers = () => {
        this.setState({filterResult: this.state.filterResult.sort(this.comparison)});   
    }

    //Function to sort last names by comparing last names to each other
    reversedComparison = (a, b) => {
        const sortA = a.name.last.toLowerCase();
        const sortB = b.name.last.toLowerCase();

        let comparison = 0;
        if (sortA > sortB){
            comparison = 1;
        }else if (sortA < sortB) {
            comparison = -1;
        }
        return comparison
    }

    //Function to change state based on the last name reversedComparison function
    sortUsersReversed = () => {
        this.setState({filterResult: this.state.filterResult.sort(this.reversedComparison)});        
    }

    render() {        
        return (
            <div>                
                <div className = "searchBar">
                Search:<input type="text" placeholder="First Name" value={this.state.search} onChange={this.activeSearch}></input>              
                </div>
                <Directory
                    sortAlphaUsers={this.sortUsers}
                    sortReversedAlphaUsers={this.sortUsersReversed}
                    employee={this.state.filterResult}
                />        
            </div>
        );
    }
}

export default SearchResultContainer;


