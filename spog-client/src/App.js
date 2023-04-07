import React, {useEffect, useState} from 'react';
import WidgetWrapper from "./WidgetWrapper";

const widgets = [
    'pv-data'
]

function App() {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch("http://localhost:3001/aggregate", { body: JSON.stringify({
              widgets
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(setData)
    }, [])

    return (
        <div style={{ textAlign: 'center' }}>
            {widgets.map(widget => <WidgetWrapper type={widget} data={data["pv-data"]} />)}
        </div>
    );
}

export default App;
