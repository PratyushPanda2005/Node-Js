Backend can be thought of in 6 parts:

1. Working with requests and responses
Recieves a request and sends back a response

2. Working with routes
Routes decide which code to run for which url

3. Working with files
read files
write files
delete files
upload files

4. Working with data
Storing the data and fetching the information

5. Working with logic
Checking if logic is working

6. Working with external services
payment API
emal service
maps API

ROADMAP TO BACKEND
1. Files in Node
2. Server in Node
3. Requests and responses
4. Routes
5. JSON APIs
6. Express
7. Small CRUD app

For now, think of fs like this:

writeFileSync = create/replace file
readFileSync = read file
appendFileSync = add to file
existsSync = check file
mkdirSync = create folder
Sync means Node waits until that work finishes.


------ Step 2: Create a Server with Node.js -----


A server is a program that:

1. waits for requests
2. does some work
3. sends a response back

