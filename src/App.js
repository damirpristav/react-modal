import React, { useState, Fragment } from 'react';
import './App.css';

import Modal from './Modal';

const App = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isModalOpened2, setIsModalOpened2] = useState(false);

  return (
    <Fragment>
      <header className="header">
        <h1>React Modal</h1>
      </header>
      <div className="container">
        <button className="btn" onClick={() => setIsModalOpened(true)}>Open modal 1</button>
        <button className="btn" onClick={() => setIsModalOpened2(true)}>Open modal 2</button>
      </div>

      {isModalOpened &&
        <Modal title="Modal title" duration={500} onClose={() => setIsModalOpened(false)} showCloseBtn>
          <p>Lorem ipsum dolor sit amet.</p>
        </Modal>
      }
      {isModalOpened2 &&
        <Modal title="Modal title 2" duration={400} onClose={() => setIsModalOpened2(false)}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt deserunt temporibus doloribus eveniet nostrum reprehenderit sequi? Deserunt, eos voluptatibus laboriosam quo, expedita facere amet maxime magnam soluta ab molestias dolorum dolorem beatae nisi incidunt! Veniam minus nihil vitae molestias mollitia, nemo magnam earum impedit odit, animi provident blanditiis repudiandae corrupti.</p>
        </Modal>
      }
    </Fragment>
  );
}

export default App;
