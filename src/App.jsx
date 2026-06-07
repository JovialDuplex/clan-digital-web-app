import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home";
import DashboarPage from "./pages/dashboard";
import FormPage from "./pages/form/form";
import NavBar from "@/components/navbar/navbar";

function App() {
  const subdomain = location.hostname.split(".")[0];

  return (
    <BrowserRouter>
      <div data-theme={"dark"} className={`App w-full h-screen ${(subdomain === 'admin') ? 'grid grid-cols-12' : 'flex flex-col'}`}>
        { subdomain === 'admin' ? (
            <nav className="col-span-3">
              barre de navigation admin
            </nav>
          ) : (
            <NavBar />
          )
        }
        <main className={`${(subdomain === 'admin') ? 'col-span-9': 'flex-1'} [&>*]:w-full [&>*]:h-full`}>
            <Routes>
                <Route path={"/"} element={<HomePage/>} />
                <Route path={"/login"} element={<FormPage/>} />
                { (subdomain === "admin") && (
                  <>
                    <Route path={"/dashboard"} element={<DashboarPage/>}/>
                  </>
                )}   
              
            </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
