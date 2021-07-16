import React from 'react'
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
                <div>
                    <p><a href="mailto:gbldja@.com">{props.email}</a></p>
                    <p><a href="https://goo.gl/maps/S6rSkjTNkkGMwu4x7" target="_blank">{props.local}</a></p>
                    <p><a href="https://github.com/gabazevdo" target="_blank">{props.link}</a></p>
                </div>
        </div>
    )
}

export default CardPequeno;