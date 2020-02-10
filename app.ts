import * as express from 'express'
import * as path from 'path'
const app = express();

app.set('view engine', 'ejs');
app.set('views', './dist')
app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'))
})
app.listen(3000);

export default app;