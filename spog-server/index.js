const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
const port = 3001

const widgetMappings = {
  'pv-data': {
    url: 'http://localhost:3003/pv-data'
  }
}

app.post('/aggregate', async (req, res) => {
    const widgets = req.body.widgets;
    const responses = await Promise.all(widgets.map(widget => fetch(widgetMappings[widget].url)));
    const responseJsons = await Promise.all(responses.map(response => response.json()));
    let formattedResponse = {}
    widgets.forEach((widget, i) => {
        formattedResponse[widget] = responseJsons[i]
    })
    res.json(formattedResponse);
})

app.listen(port, () => {
  console.log(`SPoG server listening on port ${port}`)
})
