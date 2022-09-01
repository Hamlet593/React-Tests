import './App.css';

function App() {

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
                  <input id="og_title" name="og_title" type="text" autoComplete="off" required="" className=" active" maxLength="60" value="" />
                </div>
                <small className="form-text text-muted text-right">0 / 60</small>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-4">
              <h6 className="mb-1">URL Handle</h6>
              <p className="text-xs text-muted mb-0">Set the permalink to your video page.</p>
            </div>
            <div className="col-8">
              <div className="form-field-container mb-3">
                <div className="form-field position-relative ">
                  <input id="og_url" name="og_url" type="text" autoComplete="off" required="" className=" active" value="" /></div>
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
            <button type="submit" className="btn btn-sm btn-outline-primary mnw-100 py-1 text-uppercase weight-400 fz-12">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;