import React, { useEffect } from 'react';
import './hello-world-lit';

function App() {
    useEffect(() => {
       fetch("http://localhost:3001/lightweight.js").then(v => v.text().then(eval))
    }, [])

    return (
        <div style={{ textAlign: 'center' }}>
          <hello-world-lit title={"This is a local Web Component built with Lit"} />
          <some-web-component title={"This is a remotely fetched Web Component with no dependencies"} />
        </div>
    );
}

export default App;
