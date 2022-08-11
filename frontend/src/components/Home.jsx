import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const Home = () => {
    let navigate = useNavigate();
    const [form,setForm] = useState({
        "email":"",
        "age":"",
        "sex":"",
        "social_media":"",
        "time_face":0,
        "time_what":1,
        "time_twit":2,
        "time_inst":1,
        "time_tik":3 
    })

    const handleInputChange = ({ target }) => {

        setForm({
            ...form,
            [ target.name ]: target.value
        });

    }
   
    const hanldeSubmit = (e)=>{
        e.preventDefault()
  
        axios.post('http://127.0.0.1:8000/api/',form)
          .then(function (response) {
            console.log(response);
            navigate("/estadisticas", { replace: true });
          })
          .catch(function (error) {
            console.log(error);
            navigate("/estadisticas", { replace: true });
          });

    }
  return (
    <Container   >

        <Row className="mt-4 ">
            <Col>
                <h1>Encuesta de redes sociales </h1>
            </Col>
        </Row>
        <Form onSubmit={hanldeSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electronico </Form.Label>
            <Form.Control type="email" onChange={handleInputChange} name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Rango de edad  </Form.Label>
        <Form.Select onChange={handleInputChange} name="age">
            <option value="">seleccione un rago de edad</option>
            <option value="0">18-25</option>
            <option value="1">26-33</option>
            <option value="2">34-40</option>
            <option value="3">40+</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Sexo  </Form.Label>
        <Form.Select onChange={handleInputChange} name="sex" >
        <option value="">seleccione un sexo</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="O">Otro</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Red social favorita </Form.Label>
            <Form.Control onChange={handleInputChange} name="social_media" type="text" placeholder="Facebook" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tiempo promedio al dia en Facebook en horas </Form.Label>
            <Form.Control onChange={handleInputChange} name="time_face" type="text" placeholder="0" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tiempo promedio al dia en Whatsapp en horas </Form.Label>
            <Form.Control onChange={handleInputChange} name="time_what" type="text" placeholder="0" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tiempo promedio al dia en Twitter en horas </Form.Label>
            <Form.Control onChange={handleInputChange} name="time_twit" type="text" placeholder="0" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tiempo promedio al dia en Instragram en horas </Form.Label>
            <Form.Control onChange={handleInputChange} name="time_inst" type="text" placeholder="0" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tiempo promedio al dia en TIktok  en horas </Form.Label>
            <Form.Control onChange={handleInputChange} name="time_tik" type="text"   placeholder="0" />
      </Form.Group>


      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
   
    </Container>
    
  )
}
