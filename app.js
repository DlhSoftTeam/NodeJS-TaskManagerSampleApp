const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

eval(require('fs').readFileSync('./DlhSoft.ProjectData.HTML.Core.js', 'utf8'));

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  const items = [{start: new Date()}];
  const settings = { };
  
  var taskManager = DlhSoft.Data.TaskManager.initialize(items, settings);
  var projectStart = taskManager.getProjectStart();
  
  res.end(taskManager.getOutputDate(projectStart).toString());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});