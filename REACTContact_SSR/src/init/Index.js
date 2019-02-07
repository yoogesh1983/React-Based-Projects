import serialize from 'serialize-javascript';
import{ Helmet } from 'react-helmet';
import clientScriptNames from 'bundleAssets';

//Just to maintain, this is just a function not a functional component
export default (htmlConent, store, req) => {
    
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

            <!-- Analytics tag. Type below url to DISABLE this tag:  http://localhost:3000?disableDtm=true -->
            ${addAnalyticsLink(req)}   

            <!-- NewRelic -->
            ${newRelicjs()}

            ${forter('HomePage')}
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

  const addAnalyticsLink = (req) => {
    if (req.query.disableDtm !== 'true') {
      return `<script src="//assets.adobedtm.com/yoogesh/satelliteLib-123-staging'.js"></script>`;
    }
    return '';
  };

  const newRelicjs = () => {
    return `<script type="text/javascript">
                !function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");
                return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",
                n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,
                selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);
                return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function()
                {return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?
                [this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,
                j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&
                (n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).
                replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&
                a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;
                if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)     
            </script> 
      `;
  };

  const forter = (currentPate) => {
    return `
    <script>
          //This script needs to be executed everywhere in the site
          //This is a forter script, which collects mouse movements, mouse clicks, page views etc.
            (function() {
                console.log('Page you are currently viewing is ${currentPate}');
            })();
    </script>
    `;
  };