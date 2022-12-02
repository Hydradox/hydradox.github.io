import { Helmet } from 'react-helmet-async'

function Err404() {
    return (
        <div>
            <Helmet>
                <title>Page not found | Portfolio</title>
            </Helmet>

            <h1>Error 404</h1>
        </div>
    );
}

export default Err404;