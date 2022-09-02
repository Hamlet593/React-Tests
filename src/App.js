import { useState, useEffect } from 'react';
import './App.css';
import SaveButton from './helpers/ShowModal.js';

function App() {

  const [title, setTitle] = useState('');
  const [trueTitle, setTrueTitle] = useState(true);

  useEffect(() => {
    if (title.length === 0 || title.length > 61) {
      setTrueTitle(false);
    } else setTrueTitle(true);
  }, [title]);


  return (
    <div className="App">
      <div className="pt-7 pb-2 px-1">
        <form>
          <div className="row mb-4">
            <div className="col-4">
              <h6 className="mb-1">SEO Title</h6>
              <p className="text-xs text-muted mb-0">The title you set here will appear in search engine results, like Google Search. It will not be visible on your website or in the apps.</p>
            </div>
            <div className="col-8">
              <div className="form-field-container mb-3">
                <div className="form-field position-relative ">
                  <input id="og_title" name="og_title" type="text" autoComplete="off" required="" className=" active" value={title} onChange={evt => {
                    setTitle(evt.target.value);
                  }} />
                </div>
                <small className="form-text text-muted text-right">Characters left: {60 - title.length}</small>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-4">
              <h6 className="mb-1">SEO Description</h6>
              <p className="text-xs text-muted mb-0">This description will appear in the search engine results and will not be visible on your website or in the apps.</p>
            </div>
            <div className="col-8">
              <div className="form-field-container ">
                <div className="form-field position-relative ">
                  <textarea id="og_description" name="og_description" aria-describedby="" autoComplete="off" className=" active" maxLength="170"></textarea>
                </div>
                <small className="form-text text-muted text-right">0 / 170</small>
              </div>
            </div>
          </div>
          <div className="pt-3 text-right">
            <SaveButton
              trueTitle={trueTitle}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;