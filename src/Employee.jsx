import React,{Component} from 'react';

class Employee extends Component{
    constructor(props){
        super(props);
        this.state={
            employees:[],
            isLoading: true

        }
    }
    
    componentDidMount(){
        fetch('http://localhost:3004/employees')
        .then(res => res.json())
        .then(employees => {
        this.setState({employees, isLoading: false});
        });
    }
    render(){
        return(
            this.state.employees.map(employee=>
            <div>{
                employee.isActive==true ?
                <li> <h style={{color: "green"}}> {employee.name} {employee.age} </h> </li>
                  :
                  <li> <h style={{color: "red"}}> {employee.name} {employee.age} </h> </li>
            }</div>
            )
        )
        
    }
}

export default Employee