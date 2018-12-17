import serialize from 'serialize-javascript';
import{ Helmet } from 'react-helmet';
import clientScriptNames from 'bundleAssets';

//Just to maintain, this is just a function not a functional component
export default (htmlConent, store) => {
    
  const helmet = Helmet.renderStatic();
  
  return `<!DOCTYPE html>
        <html>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}

            <!-- Custom Css -->
            ${cssOutput()}
            
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">
            
            <!-- BootStrap -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
            

        </head>
        <body>
            <div id="root" class="container">${htmlConent}</div>
            <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            ${scriptOutput()}
        </body>
        </html>`
}


const scriptOutput = () => {
    const mappedNames = {
      'vendors~bundle.js': 1,
      'bundle.js': 2,
    };
    const allowedNames = [
      'bundle.js', 'vendors~bundle.js'
    ];
    return Object.entries(clientScriptNames).filter(obj => allowedNames.includes(obj[0]))
      .sort((first, second) => {
        if (mappedNames[first[0]] < mappedNames[second[0]]) return -1;
        else if (mappedNames[first[0]] === mappedNames[second[0]]) return 0;
        return 1;
      })
      .reduce((accumulatorString, currentItem) => {
        accumulatorString += `<script src='/${currentItem[1]}'></script>`;
        return accumulatorString;
      }, '');
  };

  const cssOutput = () => {
    try {
      const cssFileName = Object.entries(clientScriptNames).filter(obj => obj[0] === 'bundle.css')[0][1];
      return `<link rel="stylesheet" type="text/css" href='/${cssFileName}' />`;
    } catch (err) {
      return '';
    }
  };
