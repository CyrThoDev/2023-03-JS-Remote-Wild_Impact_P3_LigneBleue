import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./pages/Layout/UserLayout";
import TutorialsList from "./pages/Users/TutorialsList";
import AdminLayout from "./pages/Layout/AdminLayout";
import TutoAdmin from "./pages/Admin/TutoAdmin";
import Footer from "./components/Footer";
import Connexion from "./pages/Connexion";
import Home from "./pages/Users/Home";
import Advancement from "./pages/Users/Advancement";
import TutoAdvancement from "./pages/Users/TutoAdvancement";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import Erreur from "./pages/Erreur";

import "./App.css";
import Tutoriel from "./components/Tutoriel";
import Signin from "./pages/Inscription";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Breadcrumbs />
        <div className="App">
          <Routes>
            <Route path="/" element={<UserLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="formations/:id" element={<TutorialsList />} />
              <Route path="tutoriel" element={<Tutoriel />} />
              <Route path="auth/connexion" element={<Connexion />} />
              <Route path="auth/inscription" element={<Signin />} />
              <Route path="/parcours" element={<Advancement />} />
              <Route
                path="/parcours/avancement"
                element={<TutoAdvancement />}
              />
              <Route path="/*" element={<Erreur />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="tuto" element={<TutoAdmin />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
