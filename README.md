## Teacher Lookup Tool

### DB
`docker pull mongo`

`docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:latest`

### Install
`npm install`

### Run
`npm run dev`

### API Endpoints
- ### Import DB Files
  `http://localhost:8000/Import/{ Student, Teacher, User }`

- ### Teacher Lookup By ID
  `http://localhost:8000/User/id/{id}`

- ### Teacher Lookup By Email
  `http://localhost:8000/User/email/{email}`