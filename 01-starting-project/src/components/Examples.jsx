import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import TabButton from './TabButton.jsx';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('components'); // React Hook functions must only be called inside of component functions or custom Hooks

  //let tabContent = 'Please click a button';

  function handleSelect(selectedButton) {
    //console.log(selectedButton);
    // tabContent = selectedButton;
    // console.log(tabContent);
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <Section id="examples" title={'Examples'}>
        <Tabs
          buttonsContainer="menu"
          buttons={
            <>
              <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>
                Components
              </TabButton>
              <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>
                JSX
              </TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>
                Props
              </TabButton>
              <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>
                State
              </TabButton>
            </>
          }
        >
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </Tabs>
      </Section>
    </>
  );
}
