import React,{Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";


export default class CreateStudent extends Component {
  constructor(props) {

    super(props);
    this.onChangeStudentUsuario = this.onChangeStudentUsuario.bind(this);
    this.onChangeStudentContraseña = this.onChangeStudentContraseña.bind(this);
    
    this.state={
      usuario:"",
      contraseña:"",
      
    };
  
  } 
  
  onChangeStudentUsuario(e){
    this.setState({usuario:e.target.value});
  }
  onChangeStudentContraseña(e){
    this.setState({contraseña:e.target.value});
  }
  

  onSubmit(e){
    e.preventDefault();
    const studentObject = {
      usuario:this.state.usuario,
      email:this.state.contraseña,
      
    };
    Axios
      .post("http://localhost:4000/student-list", studentObject)
      .then((res)=> console.log(res.data));
    this.setState({usuario:"",contraseña:""});  
  }


  render(){

        return(
            <div classUsuario ="form-wrapper">
                <h1>Ingreso de usuarios </h1>
                <Form onSubmit={this.onSubmit}>

                    <Form.Group controlId="Usuario">
                      <Form.Label>Usuario</Form.Label>
                      <Form.Control 
                        type="text"
                        value={this.state.usuario}
                        onChange={this.onChangeStudentUsuario}
                      />
                    </Form.Group>

                    <Form.Group controlId="Contraseña">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control 
                        type="value"
                        value={this.state.contraseña}
                        onChange={this.onChangeStudentContraseña}
                      />
                      <br/>
                    </Form.Group>

                    <Button variant="primary" size="lg" block="block"href="http://localhost:3000/BDExamen" type="submit" classUsuario="mt-4">Ingresar </Button>
                </Form>  
            </div>
        );  
    }
}
