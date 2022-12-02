import { useState, useEffect } from 'react'
import { useOutlet, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { SwitchTransition, CSSTransition } from "react-transition-group"

import Header from './components/layout/Header/Header'
import MobileNavigation from './components/layout/MobileNavigation/MobileNavigation'

function App({ routes }) {
	// Escuchar cambios de tamaño de pantalla
    const breakpoint = 700
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint)

    const handleResize = () => setIsMobile(window.innerWidth < breakpoint)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

	const location = useLocation()
	const currentOutlet = useOutlet()
	const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}

	return (
		<>
			<Header isMobile={isMobile} />

			<main>
				<HelmetProvider>
					<SwitchTransition>
						<CSSTransition
							key={location.pathname}
							nodeRef={nodeRef}
							classNames="fade"
							timeout={200}
							unmountOnExit
						>
							{(state) => (
								<div ref={nodeRef}>
									{currentOutlet}
								</div>
							)}
						</CSSTransition>
					</SwitchTransition>
				</HelmetProvider>
			</main>

			{
				isMobile && <MobileNavigation />
			}
		</>
	)
}

export default App
