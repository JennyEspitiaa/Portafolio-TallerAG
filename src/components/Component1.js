import React, {Component} from 'react';
import {Stylesperfil, MainFlex, ImagePerfil, TitlePerfil, TitleProfesion, Ubicacion, Redes, Lista, Enlace, Imagen, AboutMe, Estudios, TitleCajas, Institucion, EstudioLetras, ListaHabilidades, StyleUl, SpanStyle} from '../../styles/styles.js';



export default class Component1 extends Component{
    render(){

        return(
            <MainFlex>
                <Stylesperfil>
                    <ImagePerfil src="https://res.cloudinary.com/dg29vcpk7/image/upload/v1653403373/fotoJenny_dxi7kh.jpg"></ImagePerfil>
                    <TitlePerfil>Estudiante</TitlePerfil>
                    <TitleProfesion>DISEÑADORA GRÁFICA Y<br></br> DESARROLLADORA WEB JUNIOR</TitleProfesion>
                    <Ubicacion>Bogotá,Colombia</Ubicacion>
                <Redes>
                    <Lista><Enlace href="https://github.com/JennyEspitiaa"><Imagen src="https://res.cloudinary.com/dg29vcpk7/image/upload/v1653403686/linkedin_slxpon.png"></Imagen></Enlace></Lista>
                    <Lista><Enlace href="www.linkedin.com/in/jenny-espitiaa"><Imagen src="https://res.cloudinary.com/dg29vcpk7/image/upload/v1653403686/github_p6b7s0.png"></Imagen></Enlace></Lista>
                </Redes>
                </Stylesperfil>
                <AboutMe>
                    <Estudios>
                    <TitleCajas>Mis estudios</TitleCajas>
                    <Institucion>La Salle College-LCI Bogotá - 2017</Institucion>
                    <EstudioLetras>Técnico Profesional en Maquillaje Artístico</EstudioLetras>

                    <Institucion>Universidad Jorge Tadeo Lozano - 2022</Institucion>
                    <EstudioLetras>Profesional en Diseño Gráfico</EstudioLetras>

                    <Institucion>Academia Geek - Actualidad</Institucion>
                    <EstudioLetras>Desarrolladora Web Junior</EstudioLetras>
                    </Estudios>

                    <Estudios>
                    <TitleCajas>Experiencia</TitleCajas>    
                    <Institucion>Federación Nacional de Cultivadores de Palma de Aceite FEDEPALMA - 2021</Institucion>
                    <EstudioLetras>Diseñador Gráfico, implementación de piezas gráficas digitales para los diferentes canales de comunicaciones de la Federación - Prácticas</EstudioLetras>
                    </Estudios> 

                    <Estudios>
                        <TitleCajas>Habilidades</TitleCajas>
                        <StyleUl>
                            <ListaHabilidades>Adobe Illustrator</ListaHabilidades>
                            <ListaHabilidades>Adobe Photoshop</ListaHabilidades>
                            <ListaHabilidades>Adobe InDesign</ListaHabilidades>
                            <ListaHabilidades>Visual Studio Code</ListaHabilidades>
                            <ListaHabilidades>Figma</ListaHabilidades>
                        </StyleUl>
                    </Estudios>

                </AboutMe>
            </MainFlex>
        )
    }
}