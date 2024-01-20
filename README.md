## Getting Started

Install packages

```bash
# setup typescript
npm i -D nodemon ts-node typescript

# dependencies
npm i express dotenv cors cookie-parser compression body-parser lodash mongoose

# install types
npm i -D @types/express @types/dotenv cors @types/cookie-parser @types/compression @types/body-parser @types/lodash @types/mongoose
```

Run the development server:

```bash
npm start
```
Add Environment file

```bash
# add a file at root directory named .env
PORT=8081
DB_URI=mongodb://127.0.0.1:27017/nodejs-db
SECRET_KEY=niraj@nexxontech.com

# env details change according whatever you want
```

Register `http://localhost:8081/auth/register` POST
```json
// Payload
{
    "email":"niraj@nexxontech.com",
    "password":"123",
    "username":"Niraj"
}
```


Login `http://localhost:8081/auth/login` POST
```json
// Payload
{
    "email":"niraj@nexxontech.com",
    "password":"123"
}
```

Get All User `http://localhost:8081/users` GET
```json
// Output
[
    {
        "_id": "65ab9782fa536a2623a06944",
        "username": "Niraj",
        "email": "niraj@nexxontech.com",
        "__v": 0
    },
    {
        "_id": "65ab9767fa536a2623a0693c",
        "username": "Bar",
        "email": "bar@nexxontech.com",
        "__v": 0
    },
    {
        "_id": "65ab9767fa536a2623a0693c",
        "username": "Foo",
        "email": "foo@nexxontech.com",
        "__v": 0
    }
]
```


Delete User `http://localhost:8081/users/65ab9793fa536a2623a06949` DELETE
```json
// output
{
    "_id": "65ab9767fa536a2623a0693c",
    "username": "Foo",
    "email": "foo@nexxontech.com",
    "__v": 0
}
```

UPDATE User `http://localhost:8081/users/65ab9767fa536a2623a0693c` PATCH
```json
// payload
{
    "username":"Foo bar"
}
```
