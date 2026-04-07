import { useState } from "react" // 👈 ¡No olvides importar esto!

function ComingSoon() {
  // Estado para controlar si mostramos el mensaje o no
  const [showMessage, setShowMessage] = useState(false)

  // Función que se ejecuta al hacer clic
  const handleButtonClick = () => {
    setShowMessage(true)
    
    // Hacemos que el mensaje desaparezca después de 3 segundos (3000 ms)
    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  return (
    <div style={styles.container}>

      {/* 🎥 VIDEO DE FONDO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={styles.video}
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* 🌑 CAPA OSCURA */}
      <div style={styles.overlay}>

        <div style={styles.box}>
          <p style={styles.badge}>MUY PRONTO</p>
          <h1 style={styles.title}>En la Esquina</h1>
          
          <h2 style={styles.subtitle}>
            ¿Sabes todo lo que tu barrio tiene para ofrecer?
          </h2>
          
          <p style={styles.text}>
            La primera red para descubrir, comprar y apoyar a los emprendedores que están a pasos de tu casa. Sin intermediarios, frente a frente.
          </p>
          
          {/* Contenedor del Botón y el Mensaje */}
          <div style={styles.actionContainer}>
            <button style={styles.button} onClick={handleButtonClick}>
              Quiero ser de los primeros 👀
            </button>
            
            {/* Mensaje que aparece solo si showMessage es true */}
            {showMessage && (
              <span style={styles.toastMessage}>
                ¡Ya casi! 🚀 Te avisaremos pronto.
              </span>
            )}
          </div>
          
          <span style={styles.subtext}>
            Faltan pocos días para abrir inscripciones.
          </span>
        </div>

      </div>

      {/* 🎬 ANIMACIÓN Y EFECTOS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes popIn {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>

    </div>
  )
}

const styles = {
  container: {
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    fontFamily: "system-ui, -apple-system, sans-serif"
  },
  video: {
    position: "absolute",
    top: "50%",
    left: "50%",
    minWidth: "100%",
    minHeight: "100%",
    transform: "translate(-50%, -50%)",
    objectFit: "cover"
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8))",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px"
  },
  box: {
    animation: "fadeIn 1.2s ease-out",
    color: "white",
    maxWidth: "500px"
  },
  badge: {
    display: "inline-block",
    background: "#ff4757",
    color: "white",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "2px",
    marginBottom: "15px"
  },
  title: {
    fontSize: "52px",
    fontWeight: "900",
    margin: "0 0 10px 0",
    letterSpacing: "-1px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
  },
  subtitle: {
    fontSize: "24px",
    fontWeight: "600",
    margin: "0 0 20px 0",
    color: "#f1f2f6"
  },
  text: {
    fontSize: "17px",
    lineHeight: "1.5",
    marginBottom: "30px",
    color: "#dfe4ea"
  },
  actionContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "90px" // Da espacio fijo para que el texto no empuje lo de abajo bruscamente
  },
  button: {
    background: "white",
    color: "black",
    border: "none",
    padding: "15px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "30px",
    cursor: "pointer",
    animation: "pulse 2s infinite",
    boxShadow: "0 4px 15px rgba(255,255,255,0.2)",
    marginBottom: "10px"
  },
  toastMessage: {
    background: "#2ed573", // Un color verde brillante para confirmar
    color: "white",
    padding: "6px 14px",
    borderRadius: "15px",
    fontSize: "14px",
    fontWeight: "bold",
    animation: "popIn 0.3s ease-out",
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
  },
  subtext: {
    display: "block",
    fontSize: "13px",
    opacity: 0.7
  }
}

export default ComingSoon