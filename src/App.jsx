import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home";
import DashboarPage from "./pages/dashboard";
import FormPage from "./pages/form/form";

function App() {
  const subdomain = location.hostname.split(".")[0];

  return (
    <div className={`App w-full h-screen ${(subdomain === 'admin') ? 'grid grid-cols-12' : 'flex flex-col'}`}>
      { subdomain === 'admin' ? (
          <nav className="col-span-3">
            barre de navigation admin
          </nav>
        ) : (
          <nav>
            barre de navigation clients
          </nav>
        )
      }
      <main className={`${(subdomain === 'admin') ? 'col-span-9': 'flex-1'} [&>*]:w-full [&>*]:h-full`}>
        <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<HomePage/>} />
              <Route path={"/login"} element={<FormPage/>} />
              { (subdomain === "admin") && (
                <>
                  <Route path={"/dashboard"} element={<DashboarPage/>}/>
                </>
              )}   
            
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App
