import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Auth from "./Auth"

function App() {
  return (
    <div className="App">
      <Auth /> {/* Render the authentication component */}
    </div>
  )
}

export default App