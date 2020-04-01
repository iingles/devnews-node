# GraphQL API Node Server

---

#### Prisma as your data modeling tool

---

[x] See [prisma/schema.prisma](prisma/schema.prisma)

#### Docker-based PostgreSQL, MySQL, or MongoDB as your data store

---

[x] I used PostgreSQL, as can be seen in the schema.prisma file.

[x] Dockerized PostgreSQL is running on DigitalOcean, this can be seen by hitting the [API endpoint](http://206.189.215.72:4000/) and playing around with the GraphQL playground

#### At least 3 Query resolvers to get data from your server
---
[x] In [src/query.js](src/query.js), there are queries to find a User by ID, by email, and to retrieve all Users:

<details>
<summary><strong>Example queries</strong></summary>

```graphql

query findSingleUser {
    User(id:'id-string') {
        name
        surname
    }
}

query findByEmail {
    Email(email:'example@example.com') {
        name
    }
}

query findManyUsers {
    Users {
        name
        surname
    }
}
```


</details>


#### At least 2 Mutation resolvers allowing users to create, update, or upsert an item.
---
[x] In [src/mutation.js](src/mutation.js), there are createUser and an updateUser mutations:

<details>
<summary><strong>Example mutations</strong></summary>

```graphql
mutation createOneUser {
    createUser(name: "Johnny", surname: "Doe", email: "jdoe@example.com") {
        id
        name
        surname
        email
    }
}

mutation updateUser(id: "id-string", property: "data") {
    id
    name
    surname
    property
}
```
</details>



#### At least 1 Mutation resolver allowing users to delete an item.
---

[x] In [src/mutation.js](src/mutation.js), there is a deleteOneUser mutation, using the SDL-first `t.crud` method.

#### Your datastore will contain at least 25 items

---

[x] I managed to grab 25 "People" objects off of uinames before it went down and save them to a file, which I used to seed my database.

#### Your app will be deployable locally using Docker and will have seed data entered into the datastore.

---

[x] My app runs locally as long as it is pointing to a [functional database](prisma/schema.prisma) and has been re-generated.

#### All of your source code will be properly uploaded to GitHub

---

[x] Source code is on Github

#### Your ReadMe file will accurately describe your server install and run process and how to use the APIs

---

[x] Readme file includes relevant information.
