import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

async function createUser() {
  try {
    await prismaClient.user.create({
      data: {        
        createdAt: '2015-11-22T13:57:31.123Z',
        updatedAt: '2015-11-22T13:57:31.123Z',
        name: 'John Doe',
        displayName: 'jdoe',
        email: 'jdoe@example.com',
        dob: '01/01/1990',
        phone: '555-555-5555',
        location: 'United States',
        bio: 'I haven\'t filled this out yet',
        posts: [],
        followers: [],
        following: []
      },
    })
  } catch (err) {
    console.log(err)
  }
}

async function main() {
  try {
    await createUser()
  } catch(err) {
    console.log(err)
  }
}

main()
.catch(e => console.error(e))
.finally(async () => {
  await prismaClient.disconnect()
})