import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import { createSecretKey } from 'crypto'

const prismaClient = new PrismaClient()

const people = fs.readFileSync('prisma/example-files/people.json')

function loadPeople() {
  const list = JSON.parse(people)
  
 return list.map(prs => {
    return {
      data: {
        name: prs.name,
        surname: prs.surname,
        gender: prs.gender,
        region: prs.region,
        age: prs.age,
        phone: prs.phone,
        birthday: prs.birthday.mdy,
        password: prs.password,
        email: prs.email,
        photo: prs.photo,
        bio: '',
        posts: [],
        followers: [],
        following: []
      }
    }
  })
}

// async function createUser() {
//   try {
//     await prismaClient.user.create({
//       data: {        
//         name: 'John Doe',
//         email: 'jdoe@example.com',
//         dob: '01/01/1990',
//         phone: '555-555-5555',
//         location: 'United States',
//         bio: 'I haven\'t filled this out yet',
//         posts: [],
//         followers: [],
//         following: []
//       },
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

async function main() {
  try {
    const allPeople = loadPeople()
    for(let prs of allPeople) {
      await prismaClient.user.create(prs)
      .catch(e => console.error(`Error trying to create list of people: ${e} person: ${prs} `))
    } 
  } catch(err) {
    console.log(err)
  }
}

main()
.catch(e => console.error(e))
.finally(async () => {
  await prismaClient.disconnect()
})