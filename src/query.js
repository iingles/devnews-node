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
          },
        })
      },
    })

    t.field('Email', {
      type: 'User',
      nullable: true,
      args: {
            email: stringArg({ nullable: true }),
       },
      resolve: (parent, { email }, ctx) => {
        return ctx.prisma.user.findOne({
          where: {
            email,
          },
        })
      },
    })

    t.list.field('Users', {
      type: 'User',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.user.findMany({
          where: {
            name: { contains: searchString },
          },
        })
      },
    })
  },
})
