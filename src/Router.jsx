import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group"

import App from './App'
import Err404 from './routes/Err404'

import Home from './routes/Home'
import Projects from './routes/Projects'



function Router() {

    return (
        <BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="projects" element={<Projects />} />

					<Route path="*" element={<Err404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
    );
}

export default Router;