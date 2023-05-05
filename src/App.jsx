import React from "react";



function App() {
    let currentDate = new Date()
    currentDate = currentDate.getHours()
    let greeting = ''
    let cssStyle = {};

    if (currentDate > 4 && currentDate < 12) {
        greeting = " Good Morning"
      cssStyle.color="green";
    } else if (currentDate >= 12 && currentDate < 16) {
        greeting = " Good Afternoon"
        cssStyle.color = "orange";
    } else if (currentDate >= 16 && currentDate <= 20) {
        greeting = " Good evening"
        cssStyle.color = '#f0e247';
    }else {
        greeting = " Good Night"
        cssStyle.color = 'black';
    }

    return (
        <>
            <div id="box">
                <h1>
                    Hello sir,<span style={cssStyle}>{ greeting}</span>
                </h1>
            </div>
        </>
    )

}

export default App