import React, { useState } from 'react';
import Popup from './Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
    <p>Initial page description</p>
    {isOpen && <Popup
      content={<>
        <b>Popup message</b>
        <p>Some error message here</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default App;