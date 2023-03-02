import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Encuesta = () => {


    const navigate = useNavigate();

    const [respuestas, setRespuestas] = useState({});

    const handleChange = ({target})=>{
        setRespuestas({
            ...respuestas,
            [target.name]: target.value
        })
    }

    const enviar = async(e)=>{
        
        e.preventDefault();

        const peticion = await fetch("http://localhost:3000/enviarencuesta",{
            method: 'POST',
            body: JSON.stringify(respuestas),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(peticion.ok){
            alert('Guardado');
            return navigate('/home')
        } else return alert('Error al enviar')

    }
    
    return (
        <section id='body'>
            <div className='container'>
                <div className='tittle'>
                    <h1>Encuesta acerca del grooming.</h1>
                    <hr />
                </div>
                <div className='body-form'>
                    <form onSubmit={enviar}>
                        <h5>¿Qué es el grooming?</h5>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta1" value="1" onChange={handleChange}/>
                            <label class="form-check-label" for="exampleRadios1">
                                Un método de peinado.
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta1" value="2" onChange={handleChange}/>
                            <label class="form-check-label" for="exampleRadios1">
                                El hecho de que un adulto manipule a un niño para ganarse su confianza antes de abusar sexualmente de él.
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta1" value="3" onChange={handleChange}/>
                            <label class="form-check-label" for="exampleRadios1">
                                Un videojuego muy conocido.
                            </label>
                        </div>

                        <hr />

                        <h5>¿Quiénes pueden convertirse en víctimas del grooming?</h5>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta2" value="1" onChange={handleChange}/>
                            <label class="form-check-label" for="exampleRadios1">
                                Sólo niños pequeños.
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta2" value="2" onChange={handleChange}/>
                            <label class="form-check-label" for="exampleRadios1">
                                Cualquier persona física, independientemente de su edad o género.
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta2" value="3" onChange={handleChange}/>
                            <label class="form-check-label" for="exampleRadios1">
                                Sólo chicas adolescentes.
                            </label>
                        </div>

                        <hr />

                        <h5>¿Qué medidas preventivas hay?</h5>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta3" value="1" onChange={handleChange}/>
                            <label class="form-check-label" for="exampleRadios1">
                                No se recomienda la divulgación en línea de información personal.
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta3" value="2" onChange={handleChange}/>
                            <label class="form-check-label" for="exampleRadios1">
                                Proteger su privacidad en las redes sociales.
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta3" value="3" onChange={handleChange}/>
                            <label class="form-check-label" for="exampleRadios1">
                                Cada una de las posibilidades anteriores.
                            </label>
                        </div>

                        <hr />

                        <h5>¿Qué deben hacer los niños si reciben un contacto perturbador en línea?</h5>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta4" value="1" onChange={handleChange}/>
                            <label class="form-check-label" for="exampleRadios1">
                                Ignorar al remitente.
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta4" value="2" onChange={handleChange}/>
                            <label class="form-check-label" for="exampleRadios1">
                                Dar una respuesta cortés, pero impasible.
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta4" value="3" onChange={handleChange}/>
                            <label class="form-check-label" for="exampleRadios1">
                                Informar inmediatamente a un adulto responsable.
                            </label>
                        </div>

                        <hr />

                        <h5>¿Cómo pueden intervenir los padres y otros adultos para detener el grooming?</h5>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta5" value="1" onChange={handleChange}/>
                            <label class="form-check-label" for="exampleRadios1">
                                Vigile las actividades en línea de sus hijos.
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta5" value="2" onChange={handleChange}/>
                            <label class="form-check-label" for="exampleRadios1">
                                Deshabilitar el acceso a sitios web o programas particulares.
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pregunta5" value="3" onChange={handleChange}/>
                            <label class="form-check-label" for="exampleRadios1">
                                Enfatizar a los niños el valor de la seguridad en línea.
                            </label>
                        </div>

                        <button type="submit" className='btn btn-primary'>Enviar encuesta</button>
                    
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Encuesta