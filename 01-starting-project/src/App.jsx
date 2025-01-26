import { Fragment } from 'react';

import Header from './components/Header.jsx';

import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  /*
  const [current state value, state updating function] = useState(initial state value);

  initial state value: stored by React
  state updating function: updates the stored values & 'tells' react to re-execute the component function in which useState() was called
  current state value: provide by React may change if the component function is executed again
  */

  return (
    /*  
    alternative way to use Fragment
    <>
    </>
    */
    <Fragment>
      {/* <Header></Header> */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
