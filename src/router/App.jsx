import React from 'react'
import Home from "../Pages/Home/Home";
import About from '../Pages/About/About'
import ErrorPageNotFound from '../Pages/ErrorPageNotFound/ErrorPageNotFound'
import Apartment from '../Pages/Apartment/ApartmentPage';
import Navbar from '../Components/Navbar';
import Footer from '../layout/Footer';
import Main from '../layout/Main';
import "./App.scss"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const HeaderFooterLayout = () => (
  <>
    <Navbar />
	<Main>
    <Outlet />
	</Main>
	<Footer/>
  </>
);

const router = createBrowserRouter([
	{
	  element: <HeaderFooterLayout />,
	  errorElement: <ErrorPageNotFound />,
	  children: [
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

	  ],
	},
  ]);



function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;

//Corriger le probleme sur l'animation de la description/equipment//