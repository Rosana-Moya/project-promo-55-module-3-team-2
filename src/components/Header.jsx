import "react"
import "../styles/header.css"

const Header = () => {
    return (
        <>
        <header className="header">
            <div className="grid-container">
                <div className="rowHeader">
                    <div className="icon-text">
                        <img src="/laptop-code-solid.svg" alt="Vector decorativo" className="header__icon" />
                        <h2 className="header__subtitle">Proyectos Molones</h2>
                    </div>
                    <img src="/adalab.png" alt="Logo Adalab" class="header__logo" />
                </div>
                <div className="row">   
                    <span className="span1 Text-Style-3">
                        Proyectos Molones
                    </span>
                </div>
                <div className="row">
                    <span className="span2">
                        Escaparate en línea para recoger ideas a través de la tecnología.
                    </span>
                </div>
                <div className="row">
                    <div className="Rectangle-1230">
                        <span className="h4-heading">
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