import "react"
import "../styles/headerList.css"

const HeaderList = () => {
    return (
        <>
        <header className="header-list">
            <div className="grid-contain">
                <div className="row-Header">
                    <div className="icon">
                        <img src="/laptop-code-solid.svg" alt="Vector decorativo" className="header-icon" />
                        <h2 className="header-subtitle">Proyectos Molones</h2>
                    </div>
                    <img src="/adalab.png" alt="Logo Adalab" className="header-logo" />
                </div>
                <div className="row">   
                    <h1 className=".header-list__title Text-style-3">
                        Proyectos Molones
                    </h1>
                </div>
                <div className="row-2">
                    <p className="header-list__subtitle">
                        Escaparate en línea para recoger ideas a través de la tecnología.
                    </p>
                </div>
                <div className="row-3">
                    <div className="Rectangle">
                        <span className="header-list">
                            NUEVO PROYECTO
                        </span>
                    </div>
                </div>
            </div>
        </header>
    </>
    )
}

export default HeaderList