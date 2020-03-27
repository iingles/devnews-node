import {
    mutationType,
    stringArg,
    idArg
} from 'nexus'

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {
        t.crud.deleteOneUser()

        t.field('createUser', {
            type: 'User',
            args: {
                name: stringArg({
                    nullable: false
                }),
                surname: stringArg({
                    nullable: false
                }),
                password: stringArg(),
                email: stringArg({
                    nullable: false
                }),
            },
            resolve: (parent, {
                name,
                surname,
                password,
                email
            }, ctx) => {
                return ctx.prisma.course.create({
                    data: {
                        name,
                        surname,
                        password,
                        email
                    }
                })
            }
        })

        t.field('updateUser', {
            type: 'User',
            args: {
                id: idArg(),
                name: stringArg(),
                surname: stringArg(),
                gender: stringArg(),
                region: stringArg(),
                phone: stringArg(),
                birthday: stringArg(),
                password: stringArg(),
                email: stringArg(),
                photo: stringArg(),
                bio: stringArg(),
                posts: stringArg({
                    list: true
                }),
                followers: stringArg({
                    list: true
                }),
                following: stringArg({
                    list: true
                })
            }
        })
    }
})