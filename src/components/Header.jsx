import "react"
import "../styles/header.css"

const Header = () => {
    return (
        <>
        <header class="header">
            <div class="grid-container">
                <div class="rowHeader">
                    <div class="icon-text">
                        <img src="/laptop-code-solid.svg" alt="Vector decorativo" class="header__icon" />
                        <h2 class="header__subtitle">Proyectos Molones</h2>
                    </div>
                    <img src="/adalab.png" alt="Logo Adalab" class="header__logo" />
                </div>
                <div class="row">   
                    <span class="span1 Text-Style-3">
                        Proyectos Molones
                    </span>
                </div>
                <div class="row">
                    <span class="span2">
                        Escaparate en línea para recoger ideas a través de la tecnología.
                    </span>
                </div>
                <div class="row">
                    <div class="Rectangle-1230">
                        <span class="h4-heading">
                            VER PROYECTOS
                        </span>
                    </div>
                </div>
            </div>
        </header>
    </>
    )
}

export default Header