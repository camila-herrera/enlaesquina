import { useState } from "react"
import Welcome from "./pages/Welcome"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Detail from "./pages/Detail" // 👈 NUEVO

function App() {
  const [screen, setScreen] = useState("welcome")
  const [selectedProduct, setSelectedProduct] = useState(null) // 👈 NUEVO

  return (
    <>
      {screen === "welcome" && (
        <Welcome
          onEnter={() => setScreen("home")}
          goToLogin={() => setScreen("login")}
          goToRegister={() => setScreen("register")}
        />
      )}

      {screen === "home" && (
        <Home
          goToDetail={(product) => {   // 👈 NUEVO
            setSelectedProduct(product)
            setScreen("detail")
          }}
        />
      )}

      {screen === "detail" && (   // 👈 NUEVO
        <Detail
          product={selectedProduct}
          goBack={() => setScreen("home")}
        />
      )}

      {screen === "login" && (
        <Login
          onLogin={() => setScreen("home")}
          goToRegister={() => setScreen("register")}
        />
      )}

      {screen === "register" && (
        <Register
          goToLogin={() => setScreen("login")}
        />
      )}
    </>
  )
}

export default App