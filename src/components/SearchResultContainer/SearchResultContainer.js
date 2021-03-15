import React, { Component } from "react";
import API from "../../utils/API";
import Directory from "../Directory/index";


class SearchResultContainer extends Component {
    state = {        
        employees: [],
        search: "",
        filterResult: [],
        results: []    
    };

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.getEmployeeList()
        .then(res => this.setState({ employees: res.data.results, filterResult: res.data.results }))        
        .catch(err => console.log(err));
    };

    activeSearch = (e) => {
        this.setState({ search: e.target.value }, () => {
            this.setState({ filterResult: this.state.employees.filter(
                res => res.name.first.toLowerCase().includes(this.state.search.toLowerCase()))
        });
     });
     console.log(this.state.search);
    };

    
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
    

    sortUsers = () => {
        this.setState({filterResult: this.state.filterResult.sort(this.comparison)});   
    }

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

    sortUsersReversed = () => {
        this.setState({filterResult: this.state.filterResult.sort(this.reversedComparison)});        
    }

    render() {        
        return (
            <div>
                <br />
                Search:<input className="searchBar" type="text" value={this.state.search} onChange={this.activeSearch}></input>              
              
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


