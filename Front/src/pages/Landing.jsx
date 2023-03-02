import React, { useEffect, useState } from 'react'
import './style.css'
import comprender from '../assets/idea.png'
import prohibir from '../assets/sin-telefono-movil.png'
import reforzar from '../assets/reforzamiento.png'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Landing = () => {

  const comisarias = [
    { posicion: { lat: -26.12726445478759, lng: -58.14912951078705 } },
    { posicion: { lat: -26.1367103, lng: -58.1659567 } },
    { posicion: { lat: -26.1414004, lng: -58.1590977 } },
    { posicion: { lat: -26.1447216, lng: -58.1510205 } },
    { posicion: { lat: -26.1378744, lng: -58.1825566 } },
    { posicion: { lat: -26.1717915, lng: -58.1953689 } },
    { posicion: { lat: -26.1739924, lng: -58.1772924 } },
    { posicion: { lat: -26.1809033, lng: -58.1688459 } },
    { posicion: { lat: -26.1875473, lng: -58.1798364 } },
    { posicion: { lat: -26.18237, lng: -58.1914486 } },
    { posicion: { lat: -26.1846932, lng: -58.2046948 } },
    { posicion: { lat: -26.1955506, lng: -58.2070748 } },
    { posicion: { lat: -26.2066613, lng: -58.2391324 } }
  ]

  const initMap = () => {
    const coordenadas = { lat: -26.1851797659819, lng: -58.174258054711466 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: coordenadas
    });

    const marcador = new google.maps.Marker({
      position: coordenadas,
      map: map
    });

    let marcadores = comisarias.map(lugar => {
      return new google.maps.Marker({
        position: lugar.posicion,
        map: map
      })
    })

  }

  const [pregunta1, setPregunta1] = useState(0);
  const [notpregunta1, setNotPregunta1] = useState(0);
  const [pregunta2, setPregunta2] = useState(0);
  const [notpregunta2, setNotPregunta2] = useState(0);

  const obtenerData = async () => {
    const peticion = await fetch('http://localhost:3000/obtenerdata');

    const respuesta = await peticion.json();

    setPregunta1(respuesta.filter(e => e.pregunta1 === '2').length)
    setNotPregunta1(respuesta.filter(e => e.pregunta1 !== '2').length)
    setPregunta2(respuesta.filter(e => e.pregunta3 == '3').length)
    setNotPregunta2(respuesta.filter(e => e.pregunta3 !== '3').length)


  }


  const trace1 = {
    x: ['Saben que es el grooming', 'No Saben'],
    y: [pregunta1, notpregunta1],
    type: 'bar',
  };

  const trace2 = {
    x: ['Saben las medidas preventivas', 'No saben'],
    y: [pregunta2, notpregunta2],
    type: 'bar',
  };

  const data = [trace1, trace2];


  const layout = {
    title: 'Analisis de vistas general',
    font: { size: 13 },
    showlegend: false
  };

  const cargarGrafico = () => {
    Plotly.newPlot('grafico', data, layout, {
      margin: { t: 0 },
      displayModeBar: false,
      modeBarButtonsToRemove: ['toImage']
    });
  }

  useEffect(() => {
    obtenerData();
    initMap()
  }, [])

  useEffect(() => {
    cargarGrafico()
  }, [pregunta1])



  return (
    <>
      <Navbar />
      <div style={{ position: 'relative' }} >

        <section id='hero'>
          <h1>El cambio esta <br /> en tus<br />propias <span style={{ color: 'orange' }}>manos</span></h1>
        </section>

        <section id='consejos'>
          <div className='informacion-body'>
            <h1>Consejos para prevenir el <span className='fw-bold'>grooming</span></h1>
            <div className="row">
              <div className="col">
                <h5 style={{ color: 'white' }} className="fw-bold">Comprender</h5>
                <img src={comprender} />
                <p style={{ maxWidth: '900px', marginTop: '20px', color: 'white' }}>Que los niños y adolescentes de esta generación viven
                  en un entorno digital. Su vida está poblada de amigos y amigas virtuales que pueden
                  ser del colegio, del barrio y de las redes sociales. Los nombres de los amigos
                  y amigas suelen cambiar de una red a otra y por eso no siempre pueden identificarlos.</p>
              </div>
              <div className="col">
                <h5 style={{ color: 'white' }} className='fw-bold'>No prohibir</h5>
                <img src={prohibir} />
                <p style={{ maxWidth: '900px', marginTop: '20px', color: 'white' }}>Que los niños, niñas o adolescentes tengan amigos virtuales. Darles
                  herramientas para que reconozcan a sus amigos y amigas y comprendan los riesgos
                  que tiene compartir datos personales en la web, redes sociales, plataformas d
                  e juegos, canales de stream y servicios de mensajería instantánea.</p>
              </div>
              <div className="col">
                <h5 style={{ color: 'white' }} className='fw-bold'>Reforzar</h5>
                <img src={reforzar} />
                <p style={{ maxWidth: '900px', marginTop: '20px', color: 'white' }}>Que más allá de la confianza y la amistad que se haya generado,
                  las personas desconocidas con las que se relacionan por medio de Internet siguen
                  siendo desconocidas.</p>
              </div>
            </div>
          </div>

        </section>

        <section id='tittle-1'>
          <h1 style={{ paddingBottom: '8%' }}>Informate acerca del tema</h1>
        </section>


        <section id='informacion' className="py-15 py-xl-20 border-bottom">
          <div className="container">
            <div className="row g-4 g-xl-6">

              <div className="col-lg-6" data-aos="fade-up">
                <a href="" className="card" data-bs-toggle="modal" data-bs-target="#1card">
                  <div className="card-body">
                    <h4 className="card-title fw-light fs-4">¿Qué es el grooming?</h4>
                  </div>
                </a>
              </div>

              <div className="col-lg-6" data-aos="fade-up">
                <a href="" className="card" data-bs-toggle="modal" data-bs-target="#2card">
                  <div className="card-body">
                    <h4 className="card-title fw-light fs-4">¿Cómo detectar el grooming?</h4>
                  </div>
                </a>
              </div>


              <div className="col-lg-6" data-aos="fade-up">
                <a href="" className="card" data-bs-toggle="modal" data-bs-target="#3card">
                  <div className="card-body">
                    <h4 className="card-title fw-light fs-4">¿Qué hacer ante un caso de grooming?</h4>
                  </div>
                </a>
              </div>

              <div className="col-lg-6" data-aos="fade-up">
                <a href="" className="card" data-bs-toggle="modal" data-bs-target="#4card">
                  <div className="card-body">
                    <h4 className="card-title fw-light fs-5">¿Qué ley protege a los niñós y adolescentes del grooming?</h4>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </section>

        <div class="modal fade" id="1card" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-4">¿Qué es el grooming?</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Grooming es el acoso sexual de una persona adulta a un niño, niña o adolescente
                por medio de Internet. Las personas que realizan grooming se llaman groomers
                o acosadores.
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="2card" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-4">¿Cómo detectar el grooming?</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Se debe prestar atención a los cambios de conducta o humor del niño, niña o adolescente.
                Si presenta repentina tristeza, baja su rendimiento escolar o quiere estar mucho tiempo
                solo o sola, si se observa nerviosismo o ansiedad respecto del uso de los dispositivos.
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="3card" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-4">¿Qué hacer ante un caso de grooming?</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>
                  <span className='fw-bold'>Con el niño, niña o adolescente:</span><br />
                  <ul className='modal-list'>
                    <li>Dialogar.</li>
                    <li>Evitar avergonzarla/o o culparla/o para que pueda contar con sinceridad lo que le pasó</li>
                    <li>Evitar interrogarla/o</li>
                    <li>Acompañarla/o con afecto con el objetivo de protegerla/o</li>
                    <li>Comprender que el niño, niña o adolescente estaba siendo amenazada/o y tuvo que responder a los mensajes para proteger su privacidad</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <section id='tittle-2'>
          <h1>Encuesta sobre el grooming</h1>
          <h4 style={{ paddingBottom: '5%' }}>Completa la encuesta anonima para sumar a nuestras estadisticas.</h4>
        </section>

        <section id='estadisticas'>
          <div style={{ marginTop: '7%' }}>
            <h1 style={{ color: 'black', fontWeight: '700', fontSize: '50px' }}>Estadisticas de la encuesta</h1>
            <div id='grafico' style={{ width: '1000px', margin: '35px' }}></div>
            <Link to='/survey' className='btn btn-primary'>Realizar encuesta anonima!</Link>
          </div>
        </section>


        <section id='comisarias'>

          <div style={{ marginTop: '5%', textAlign: 'center' }}>
            <h1>Comisarias en la ciudad de Formosa</h1>
            <div id="map" style={{ marginTop: '3%', height: '70vh', width: '150vh' }}></div>
          </div>

        </section>







      </div>
    </>
  )
}

export default Landing