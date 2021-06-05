# CIT 281 lab 05

## Outcome:

This lab continued where the last lab (lab 04) left off and created another webserver.   
This time we accesed a library of students with different properties including:    
*first name* , *last name* , and *id number*.   
This lab also required we use postman to test the GET and POST requests.   
The webpage is able to identify what student is trying to be accessed and display that information. 
   
**[lab 05 Repo](https://github.com/UO-CIT-Myles-P-D/cit281-lab05)**
   
## Code:    
    
**[Here](https://github.com/Myles-P-D/cit281-lab05/blob/main/fastify-server.js)** is the full code and below is an excerpt from the lab assignemnt.    
    
```javascript
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
```

## Images:    
    
This is an image of accesing a single students information.     
     
![single student](https://github.com/Myles-P-D/cit281-lab05/blob/main/SingleStudent.png?raw=true "single student")     
   
     
This is an image of adding a new student to the library.     
     
![student post](https://github.com/Myles-P-D/cit281-lab05/blob/main/StudentPost.png?raw=true "student post")     
   



