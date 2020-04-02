import { mutationType, stringArg, idArg } from 'nexus'

export const Mutation = mutationType({
  name: 'Mutation',
  definition(t) {
    t.crud.deleteOneUser()

    t.field('createUser', {
      type: 'User',
      args: {
        name: stringArg({
          nullable: false,
        }),
        surname: stringArg({
          nullable: false,
        }),
        password: stringArg(),
        email: stringArg({
          nullable: false,
        }),
      },
      resolve: (parent, { name, surname, password, email }, ctx) => {
        return ctx.prisma.user.create({
          data: {
            name,
            surname,
            password,
            email,
          },
        })
      },
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
          list: true,
        }),
        followers: stringArg({
          list: true,
        }),
        following: stringArg({
          list: true,
        }),
      },
      resolve: (
        parent,
        {
          id,
          name,
          surname,
          gender,
          region,
          phone,
          birthday,
          password,
          email,
          photo,
          bio,
          posts,
          followers,
          following,
        },
        ctx,
      ) => {
        return ctx.prisma.user.update({
          where: {
            id,
          },
          data: {
            name,
            surname,
            gender,
            region,
            phone,
            birthday,
            password,
            email,
            photo,
            bio,
            posts,
            followers,
            following,
          },
        })
      },
    })

    t.field('createOnePost', {
      type: 'Post',
      args: {
        author: idArg({
          nullable: false,
        }),
        content: stringArg({
          nullable: false,
        }),
        mediaURL: stringArg(),
        published: stringArg(),
      },
      resolve: (parent, { author, content, mediaURL, published }, ctx) => {
        return ctx.prisma.post.create({
          data: {
            author,
            content,
            mediaURL,
            published,
          },
        })
      },
    })
  },
})
