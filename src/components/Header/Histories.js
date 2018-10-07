import React, { Component } from 'react';

let testimonio = "Los padres reconocen la discapacidad en Emiliano y han aprendido a trabajar con Emiliano"
let testimonio1 = "Agradecemos a todo el CRIT por su gran ayuda moral, emocional y sentimental por el trato tan bello y humano que nos dan y nos motivan a mantener siempre la fe, siempre estaremos muy agradecidos; me voy contenta y emocionada, siempre reciban bendiciones de Dios"
let testimonio2 = "Su Padre refiere que les ha ido bien, y satisfecho con su estancia en sistema CRIT"
let persona_testimonio = "Tiger"
let persona_testimonio1 = "Angelito"
let persona_testimonio2 = "Jazmin"
let otra_persona = "Angelito"

let soriana_donaciones = "35,500"
let soriana_tanto = "11,319,145.79"
let tal_hora = "17:30-18:30h"


export default () => (
    <div>
        <div className="heaader">
            <img src="/logo.png" />
        </div>
        
        <div className="contentBody white Titillium">
            <p>
                A veces no es tan fácil visualizar donde acaban los donaciones 
                y todo lo que <span className="big">Teletón</span> logra gracias a los donativos.
            </p>
            <p>
                Es fácil que <span className="big">{testimonio}</span> de 
                <span className="big">{persona_testimonio}</span> pase
                desapercibido. 
            </p>
            <p>
                O que el <span className="big">{testimonio}</span> de 
                <span className="big">{otra_persona}</span> no sea conocido por 
                el mundo.
            </p>
        </div>

        <div className="contentBody Charmonman">
            <p>
            Los donativos de pesitos y redondeos de Soriana representaron más 
            de lo que uno creería. Gracias a <span className="big">{soriana_donaciones}</span> se 
            junto poco más de <span className="big">${soriana_tanto} MXN</span>
            </p>
        </div>
        
        <div className="contentBody white Montserrat">
            <p>
            Cualquier horario es bueno para donar! Pero al parecer las
            personas amaron donar entre <span className="big">{tal_hora}</span>
            porque a esa hora
            tuvimos mas de <span className="big">{tantas_donaciones}</span> donaciones
            </p>
        </div>

        <div className="contentBody Indie">
        <p>
          Hoy en día, agrupamos todas las donaciones en vivo conforme
          nuestros aliados nos van reportando en este mapa: Aquí vamos
          reportando todas las transacciones y a donde van destinadas!
          Teletón somos todos.
        </p>
      </div>
    </div>
)