import React,{useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import '../App.css'
export const Estadisticas = () => {
    const [estadisticas,setEstadisticas]=useState({
        "numberEncuestas": 0,
        "socialNetworkLove": "",
        "socialNetworkDislike": "",
        "groupOneSocialNetworkLoved": "",
        "groupTwoSocialNetworkLoved": "",
        "groupThreeSocialNetworkLoved": "",
        "groupFourSocialNetworkLoved": "",
        "time_average_tiktok": 0,
        "time_average_twitter": 0,
        "time_average_whatsapp": 0,
        "time_average_instagram": 0,
        "time_average_facebook": 0
    })

    useEffect(()=>{
        async function getEstadisticas(){
           let {data} = await  axios.get('http://127.0.0.1:8000/api/estadisticas')
            setEstadisticas(data)
        }
        getEstadisticas()
    },[])
    console.log(estadisticas)
    return (
        <Container   >
    
            <Row className="mt-3 ">
                <Col>
                    <h1 className='text-center'>Estadistica de las redes sociales </h1>
                </Col>
            </Row>

            <Row className="mt-3 ">
                <Col xs={12} className="justify-content-center" >
                    <h4 className='text-center'>Cantidad de encuestas </h4>
                    <div className='text-center estadistica_font_size'>{estadisticas.numberEncuestas}</div>
                </Col>
                <Col xs={12} sm={6} className="mt-4">
                    <h4 className='text-center'> Red social mas amada </h4>
                    <div className='text-center estadistica_font_size'>{estadisticas.socialNetworkLove}</div>
                </Col>
                <Col xs={12} sm={6} className="mt-4">
                    <h4 className='text-center'>Red social menos querida </h4>
                    <div className='text-center estadistica_font_size'>{estadisticas.socialNetworkDislike}</div>
                </Col>
                <Col xs={12} sm={6} className="mt-4">
                    <h4 className='text-center'>Red social mas usada de 18-25 </h4>
                    <div className='text-center estadistica_font_size'>{estadisticas.groupOneSocialNetworkLoved}</div>
                </Col>
                <Col xs={12} sm={6} className="mt-4">
                    <h4 className='text-center'> Red social más usada de 26-33 </h4>
                    <div className='text-center estadistica_font_size'>{estadisticas.groupTwoSocialNetworkLoved}</div>
                </Col>
                <Col xs={12} sm={6} className="mt-4">
                    <h4 className='text-center'>Red social más usada de 34-40 </h4>
                    <div className='text-center estadistica_font_size'>{estadisticas.groupThreeSocialNetworkLoved}</div>
                </Col>
                <Col xs={12} sm={6} className="mt-4">
                    <h4 className='text-center'>Red social más usada de 40+ </h4>
                    <div className='text-center estadistica_font_size'>{estadisticas.groupFourSocialNetworkLoved}</div>
                </Col>
                <Col xs={12} sm={6} className="mt-4">
                    <h4 className='text-center'>Tiempo promedio para tiktok en horas </h4>
                    <div className='text-center estadistica_font_size'>{estadisticas.time_average_tiktok}</div>
                </Col>
                <Col xs={12} sm={6} className="mt-4">
                    <h4 className='text-center'>Tiempo promedio en twitter en horas </h4>
                    <div className='text-center estadistica_font_size'>{estadisticas.time_average_twitter}</div>
                </Col>
                <Col xs={12} sm={6} className="mt-4">
                    <h4 className='text-center'>Tiempo promedio para whatsapp en horas </h4>
                    <div className='text-center estadistica_font_size'>{estadisticas.time_average_whatsapp}</div>
                </Col>
                <Col xs={12} sm={6} className="mt-4">
                    <h4 className='text-center'>Tiempo promedio en instragram en horas </h4>
                    <div className='text-center estadistica_font_size'>{estadisticas.time_average_instagram}</div>
                </Col>
                <Col xs={12} sm={6} className="mt-4">
                    <h4 className='text-center'>Tiempo promedio en facebook en horas </h4>
                    <div className='text-center estadistica_font_size'>{estadisticas.time_average_facebook}</div>
                </Col>
            </Row>

       
        </Container>
        
      )
}
