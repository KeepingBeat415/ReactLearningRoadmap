import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  /*
  const [current state value, state updating function] = useState(initial state value);

  initial state value: stored by React
  state updating function: updates the stored values & 'tells' react to re-execute the component function in which useState() was called
  current state value: provide by React may change if the component function is executed again
  */

  const [selectedTopic, setSelectedTopic] = useState('components'); // React Hook functions must only be called inside of component functions or custom Hooks

  //let tabContent = 'Please click a button';

  function handleSelect(selectedButton) {
    //console.log(selectedButton);
    // tabContent = selectedButton;
    // console.log(tabContent);
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      {/* <Header></Header> */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* short cut for grab object attributes from list into props */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
        </section>
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;
