import React, { createRef } from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";

import './i18n'
import './index.scss'

import App from './App'
import Err404 from './routes/Err404'

import Home from './routes/Home'
import Projects from './routes/Projects'

const routes = [
	{ path: '/', element: <Home />, nodeRef: createRef() },
	{ path: '/projects', element: <Projects />, nodeRef: createRef() },
	{ path: '*', element: <Err404 />, nodeRef: createRef() }
]

const router = createBrowserRouter([{
	path: '/',
	element: <App routes={routes} />,
	children: routes.map(route => ({
		index: route.path === '/',
		path: route.path === '/' ? undefined : route.path,
		element: route.element
	}))
}])

function Index() {
	return (
		<Routes location={location}>
			<Route path="/" element={<App />}>
				<Route index element={<Home />} />
				<Route path="projects" element={<Projects />} />

				<Route path="*" element={<Err404 />} />
			</Route>
		</Routes>
	)
}

const Root = () => (
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)


ReactDOM.createRoot(document.getElementById('root')).render(<Root />)