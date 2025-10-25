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
                    <span className="span-1 Text-style-3">
                        Proyectos Molones
                    </span>
                </div>
                <div className="row-2">
                    <span className="span-2">
                        Escaparate en línea para recoger ideas a través de la tecnología.
                    </span>
                </div>
                <div className="row-3">
                    <div className="Rectangle">
                        <span className="heading">
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