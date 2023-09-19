import express from 'express';

const port = 3000;
// Create the server object
const app = express();
app.use(express.json());

const nodeName = process.env.NODE_NAME;
const podName = process.env.POD_NAME;
const podIp = process.env.POD_IP
const podNameSpace = process.env.POD_NAMESPACE
const serviceAccount = process.env.SERVICE_ACCOUNT
const cpuRequest = process.env.CONTAINER_CPU_REQUEST_MILLICORES
const memoryLimit = process.env.CONTAINER_MEMORY_LIMIT_KIBIBYTES

app.get('/', (req, res) => {
    const htmlResponse = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Kubernetes Metadata</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous" defer></script>
      </head>
      <body>
      <div class="container">
            <h1>Kubernetes Metadata</h1>
            <table class="table table-striped">
                <thead>
                    <tr><th>Key</th><th>Value</th></tr>
                </thead>
                <tbody>
                    <tr><td>NODE NAME</td><td>${nodeName}</td></tr>
                    <tr><td>POD NAME</td><td>${podName}</td></tr>
                    <tr><td>POD IP</td><td>${podIp}</td></tr>
                    <tr><td>NAMESPACE</td><td>${podNameSpace}</td></tr>
                    <tr><td>SERVICE ACCOUNT</td><td>${serviceAccount}</td></tr>
                    <tr><td>CPU REQUEST</td><td>${cpuRequest}</td></tr>
                    <tr><td>MEMORY LIMIT</td><td>${memoryLimit}</td></tr>
                </tbody>
            </table>
        </div>
      </body>
    </html>
  `;
  res.send(htmlResponse);
});

// Start listening
app.listen(port, () => console.log(`listening on port ${port}`))