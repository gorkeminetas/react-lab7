import React,{Component} from 'react';
import './App.css'

class App extends Component{

  constructor(props){

      super(props);
      this.state={
          employees:[],
          isLoading: true
      };
  }
  componentDidMount(){
      fetch('http://localhost:3004/employees')
          .then(response=>response.json())
          .then(data=>this.setState({employees:data,isLoading:false}));
  }

  render(){
      return(
          <div>
              {this.state.employees.map(employee=>
              <li className={employee.isActive==true ? "active" : "inactive" } key={employee.id}>{employee.name} {employee.age}</li>)}
          </div>



      )



  }



}

export default App;