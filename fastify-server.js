const students = [
    {
      id: 1,
      last: "Last1",
      first: "First1",
    },
    {
      id: 2,
      last: "Last2",
      first: "First2",
    },
    {
      id: 3,
      last: "Last3",
      first: "First3",
    }
  ];
// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
fastify.get("/cit/student", (request, reply) => {
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(students);
});
    
//student/id route
fastify.get("/cit/student/:id", (request, reply) => {
   let studentIDFromClient = request.params.id;
    let studentToSendToClient = null;
    for (studentsInArray of students)
    {
        if (studentsInArray.id == studentIDFromClient)
        {
            studentToSendToClient = studentsInArray;
            break;
        }
    }
    if (studentToSendToClient != null)
    {
        reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(studentToSendToClient);
    }
    else
    {
        console.log(request);
        reply
        .code(404)
        .header("Content-Type", "text/html; charset=utf-8")
        .send("could not find student with given id");
    }
});

fastify.post("/cit/student/add", (request, reply) => {
    
    console.log(request);
    let objectFromClient = JSON.parse(request.body);
    console.log(objectFromClient);
    let maxID = 0;
    for (individualStudent of students)
    {
        if(maxID < individualStudent.id)
        {
            maxID = individualStudent.id;
        }
    }
    let generatedStudent = 
        {
            id: maxID + 1,
            last: objectFromClient.last,
            first: objectFromClient.first,
        }
    students.push(generatedStudent);
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(generatedStudent);
});
//Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});