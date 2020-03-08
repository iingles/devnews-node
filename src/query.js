import { idArg, queryType, stringArg } from 'nexus'

export const Query = queryType({
    definition(t) {
        t.field('User', {
            type: 'User',
            nullable: true,
            args: { id: idArg() },
            resolve: (parent, { id }, ctx) => {
                return ctx.prisma.user.findOne({
                    where: {
                        id,
                    }
                })
            }
        })

        t.list.field('Users', {
            type: 'User',
            args: {
                searchString: stringArg({ nullable: true}),
            },
            resolve: (parent, { searchString }, ctx) => {
                return ctx.prisma.course.findMany({
                    where: {
                        OR: [
                            { name: { contains: searchString }},
                            { description: { contains: searchString }}
                        ]
                    }
                })
            }
        }) 
    }
})