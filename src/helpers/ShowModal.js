import { useEffect, useState } from "react"

const SaveButton = ({ trueTitle }) => {

    const [showResults, setShowResults] = useState(false);

    const onClick = () => {
        alert(1)
        setShowResults(true);
        alert(2)
    };

    const AlertSuccess = () => (
        <div className="alert alert-success p-2 p-2 w-full items-center justify-center flex top-0 z-75 bg-green-600 text-white" role="alert" style={{
            color: 'white',
            backgroundColor: "#27b86f"
        }}>
            SEO successfully saved.
        </div>
    )

    const AlertError = () => (
        <div className="alert alert-danger p-2" role="alert" style={{
            color: 'white',
            backgroundColor: "#ed0b0b"
        }}>
            You are almost done. Please resolve errors for fields highlighted in red.
        </div>
    )

    return (
        <div>
            <button type="submit" className="btn btn-sm btn-outline-primary mnw-100 py-1 text-uppercase weight-400 fz-12" onClick={onClick}>Save</button>
            {showResults && (trueTitle ? <AlertSuccess /> : <AlertError />)}
        </div>
    )
}

export default SaveButton;