import React, { useEffect, useState } from 'react'
import './style.css'

const Navbar = () => {

    const [color, setColor] = useState(true);
    const [active, setActive] = useState('incio');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 230) {
            setColor(false);
        } else setColor(true);
    })


    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if(e.isIntersecting){
                    console.log(e.target.id)
                    setActive(e.target.id)
                }
            });
        }, {
            threshold: "0.9"
        })
        sections.forEach(section => {
            observer.observe(section)
        })
    }, [])

    return (
        <header id='header'>
            <nav className={`navbar navbar-dark fixed-top navbar-expand-lg navbar-top ${(color) ? 'hide p-md-4' : 'show p-md-1'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ fontWeight: '600', fontSize: '25px' }}>EduGrooming</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link ${(active==='hero')?'active':''}`} aria-current="page" href="#hero">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${(active==='consejos')?'active':''}`} aria-current="page" href="#consejos">Consejos</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${(active==='informacion' || active==='tittle-1')?'active':''}`} aria-current="page" href="#tittle-1">Información</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${(active==='estadisticas' || active==='tittle-2')?'active':''}`} aria-current="page" href="#tittle-2">Estadisticas</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${(active==='comisarias')?'active':''}`} aria-current="page" href="#comisarias">Comisarias</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className={`nav-link ${(active==='')?'active':''}`} aria-current="page" href="#">Sobre nosotros</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar