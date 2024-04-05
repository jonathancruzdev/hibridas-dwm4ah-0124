import http from "node:http"

http.createServer( (req, res) => {
    const url = req.url
    res.write("Hola, ")
    switch (url) {
        case "/":
            res.write("Su nombre")
            //res.end("Su nombre")
        break;
        case "/materia":
            res.write("Aplicaciones Hibridas")
        break;    
        case "/profesor":
            res.write("Cruz")
        break;          
        default:
            res.write("<h1>404</h1>")
        break;
    }
    res.write(".")
    res.end()
} ).listen(2025)