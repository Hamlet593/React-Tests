import { useState, useEffect } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {

  // This part is for limit logics

  let [title, setTitle] = useState('');
  let [trueTitle, setTrueTitle] = useState(true);

  let [description, setDescription] = useState('');
  let [trueDescription, setTrueDescription] = useState(true);

  useEffect(() => {
    if (title.length === 0 || title.length > 60) {
      setTrueTitle(false);
    } else setTrueTitle(true);
  }, [title]);

  useEffect(() => {
    if (description.length > 170) {
      setTrueDescription(false);
    } else setTrueDescription(true);
  }, [description]);

  // This part is for alerts

  let [showResults, setShowResults] = useState(false);

  const AlertSuccess = () => (
    <div className="alert alert-success p-2 w-full items-center justify-center flex top-0 z-75 bg-green-600 text-white" role="alert" style={{
      backgroundColor: "#27b86f"
    }}>
      SEO successfully saved.
    </div>
  )

  const AlertError = () => (
    <div className="alert alert-danger p-2 w-full items-center justify-center flex top-0 z-75 bg-green-600 text-white" role="alert" style={{
      backgroundColor: "#ed0b0b"
    }}>
      You are almost done. Please resolve errors for fields highlighted in red.
    </div>
  )

  // This part is for useForm hook

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div className="App">
      <div className="pt-7 pb-2 px-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          {showResults && ((trueTitle && trueDescription) ? <AlertSuccess /> : <AlertError />)}

          {/* SEO Title */}

          <div className="row mb-4">
            <div className="col-4">
              <h6 className="mb-1">SEO Title</h6>
              <p className="text-xs text-muted mb-0">The title you set here will appear in search engine results, like Google Search. It will not be visible on your website or in the apps.</p>
            </div>
            <div className="col-8">
              <div className="form-field-container mb-3">
                <div className="form-field position-relative ">

                  <input
                    type='text'
                    {...register('title', {
                      required: `Can't be blank`,
                      maxLength: {
                        value: 60,
                        message: `Is too long (maximum is 60 characters)`
                      }
                    })}
                    onChange={evt => {
                      setTitle(evt.target.value);
                    }}
                    style={{
                      width: 400,
                    }}
                  />

                  <div style={{
                    height: 30,
                    color: 'red'
                  }}>
                    {errors?.title && <p>{errors?.title?.message}</p>}
                  </div>
                </div>
                <small className="form-text text-muted text-right">Characters left: {60 - title.length}</small>
              </div>
            </div>
          </div>

          {/* SEO Description */}

          <div className="row mb-4">
            <div className="col-4">
              <h6 className="mb-1">SEO Description</h6>
              <p className="text-xs text-muted mb-0">This description will appear in the search engine results and will not be visible on your website or in the apps.</p>
            </div>
            <div className="col-8">
              <div className="form-field-container ">
                <div className="form-field position-relative ">

                  <input
                    type='text'
                    {...register('description', {
                      maxLength: {
                        value: 170,
                        message: `Is too long (maximum is 170 characters)`
                      }
                    })}
                    onChange={evt => {
                      setDescription(evt.target.value);
                    }}
                    style={{
                      width: 400,
                    }}
                  />

                  <div style={{
                    height: 30,
                    color: 'red'
                  }}>
                    {errors?.description && <p>{errors?.description?.message}</p>}
                  </div>

                </div>
                <small className="form-text text-muted text-right">Characters left: {170 - description.length}</small>
              </div>
            </div>
          </div>
          <div className="pt-3 text-right">
            <input
              className="btn btn-sm btn-outline-primary mnw-100 py-1 text-uppercase weight-400 fz-12"
              type='submit'
              value='Ուղարկիր'
              onClick={() => {
                setShowResults(true);
                setTimeout(() => {
                  setShowResults(false)
                }, 2000);
              }}
            />
          </div>
        </form>
      </div >
    </div >
  );
}

export default App;