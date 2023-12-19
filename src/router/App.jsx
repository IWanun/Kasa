// Importation des modules nécessaires depuis React et react-router-dom
import React from 'react';
import Home from "../Pages/Home/Home";
import About from '../Pages/About/About';
import ErrorPageNotFound from '../Pages/ErrorPageNotFound/ErrorPageNotFound';
import Apartment from '../Pages/Accomodations/ApartmentPage';
import Navbar from '../Components/Navbar';
import Footer from '../layout/Footer';
import Main from '../layout/Main';
import "./App.scss"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// Composant HeaderFooterLayout pour le rendu du Navbar, du Main, et du Footer
const HeaderFooterLayout = () => (
  <>
    {/* Navbar affiché en haut de la page */}
    <Navbar />
    {/* Contenu principal (Main) avec l'Outlet pour le rendu dynamique des pages enfants */}
    <Main>
      <Outlet />
    </Main>
    {/* Footer affiché en bas de la page */}
    <Footer/>
  </>
);

// Configuration de la navigation avec createBrowserRouter
const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound />,
    children: [
      // Configuration des routes et de leurs composants associés
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/About',
        element:<About/>
      },
      {
        path: "/Apartment",
        element: <Apartment/>
      },
      {
        path: '/Error',
        element: <ErrorPageNotFound />
      },
  
    ],
  },
]);

// Définition du composant principal App
function App() {
  return (
    <>
      {/* Fourniture du router à l'ensemble de l'application avec RouterProvider */}
      <RouterProvider router={router}/>
    </>
  );
}

// Exportation du composant App pour pouvoir l'utiliser ailleurs
export default App;
