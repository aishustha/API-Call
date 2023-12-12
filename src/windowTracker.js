import React from "react";

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting Up")
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)

        return function() {
            console.log("Cleaning Up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])


    return (
        <h1>Window Width: {window.innerWidth}</h1>
    )
}