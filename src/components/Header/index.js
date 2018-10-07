import React, { Component } from 'react';

let testimonio = "2343"
let persona_testimonio = "2343"
let otra_persona = "2343"
let tantas_donaciones = "2343"
let tanto_dinero = "2343"
let tal_hora = "2343"


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
            de lo que uno creería. Gracias a <span className="big">{tantas_donaciones}</span> se 
            junto poco más de <span className="big">{tanto_dinero}</span>
            </p>
        </div>
        
        <div className="contentBody white Montserrat">
            <p>
            Cualquier horario es bueno para donar! Pero al parecer las
            personas amaron donar a las <span className="big">{tal_hora}</span>
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