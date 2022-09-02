import { useState } from "react"

const SaveButton = ({ trueTitle }) => {
    const [showResults, setShowResults] = useState(false);
    const onClick = () => setShowResults(true);

    const Results = () => (

        <div className="alert alert-danger p-2" role="alert" style={{
            color: 'white',
            backgroundColor: "#ed0b0b"
        }}>
            You are almost done. Please resolve errors for fields highlighted in red.
        </div>
    )

    return (
        <div>
            <button type="submit" className="btn btn-sm btn-outline-primary mnw-100 py-1 text-uppercase weight-400 fz-12 " onClick={onClick}>Save</button>
            {showResults ? <Results /> : null}
        </div>
    )
}

export default SaveButton;