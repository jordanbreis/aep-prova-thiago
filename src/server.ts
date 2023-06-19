import app from "./app";

function main() {
    app.listen(3000, 'localhost', async () => {console.log('Server Connect');})
}

main()