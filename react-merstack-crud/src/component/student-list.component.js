import React,{Component} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Container from "react-bootstrap/esm/Container";
//import Clinica from './Imagenes/clinica.png'

export default class StudentList extends Component {
    render(){
        return (
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant='' src='../Imagenes/clinica.png' />
                
                <Card.Body>
                    
                        <Card.Title>Resultados de laboratorio</Card.Title>
                        <Card.Text>
                            Paso a paso para descargar los resultados de tus examenes medicos.
                        </Card.Text>
                        <iframe width="250" height="250" src="https://www.youtube.com/embed/7WiSvQ9NFms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <Button variant="primary" href="http://localhost:3000/create-student">Descargar Examenes</Button>
                        <br/>
                        <br/>

                        <Button variant="primary" href="http://localhost:3000/edit-student" center >Ingresar Funcionarios</Button>
                </Card.Body>
            </Card>

          
        );
    }
}