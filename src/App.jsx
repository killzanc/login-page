import './App.css';
import { useState } from 'react';
import content from './assets/content';

function App() {
  const [lang, setLang] = useState('en');
  return (
      <>
            <div className="box">
            <select
              onChange={(evt) => setLang(evt.target.value)}
              defaultValue={lang}
          >
              <option value="ru">Русский</option>
              <option value="en">English</option>
          </select>
              <h1 className="title">{content[lang].title}</h1>
              <label> 
                {content[lang].label}
              </label>
              <input  className="textInp" type="text" placeholder={content[lang].text } />
              <label>
              {content[lang].labelPass}
              </label>
              <input placeholder={content[lang].pass} className="passInp" type="password" />
            </div>
      </>
    );
  }
  export default App;