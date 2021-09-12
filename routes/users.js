import { h } from 'preact';
import Router from 'preact-router';
import { createHashHistory } from 'history';

const Main = () => (
  <Router history={createHashHistory()}>
    <Home path="/" />
    <About path="/about" />
    <Search path="/search/:query" />
  </Router>
);

render(<Main />, document.body);