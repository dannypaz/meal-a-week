const React = require('react');
const ReactDOMServer = require('react-dom/server');
const DOM = React.DOM;
const body = DOM.body;
const div = DOM.div;
const script = DOM.script;

let data = [
  {title: "Stuff", detail: "lol"},
  {title: "Stuff", detail: "lol"}
];

app.use('/', function(req,res) {
  const initialData = JSON.stringify(data);
  const markup = ReactDOMServer.renderToString(React.createElement(TodoBox, {data: data}));
  res.set('Content-type', 'text/html');
  const html = ReactDOMServer.renderToStaticMarkup(
    body(null,
      div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
      script({
        id: 'initial-data',
        type: 'text/plain',
        'data-json': initialData
      }),
      script({src: '/bundle.js'})
    )
  );
  res.end(html);
})
