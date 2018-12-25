import serialize from 'serialize-javascript';
import{ Helmet } from 'react-helmet';


//Just to maintain, this is just a function not a functional component
export default (htmlConent, store) => {
    
  const helmet = Helmet.renderStatic();
  
  return `<!DOCTYPE html>
        <html>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ"
            crossorigin="anonymous">
        </head>
        <body>
            <div id="root" class="container">${htmlConent}</div>
            <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
			<script src="bundle.js"></script>
        </body>
        </html>`
}
