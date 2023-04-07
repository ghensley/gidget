import React, {useEffect} from 'react';


function WidgetWrapper(props) {
    useEffect(() => {
        fetch("http://localhost:3002/" + props.type + ".js").then(v => v.text().then(eval))
    }, [])

    return <props.type data={JSON.stringify(props.data)}/>
}

export default WidgetWrapper;
