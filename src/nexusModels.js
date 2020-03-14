import { objectType } from 'nexus'

const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.surname()
        t.model.gender()
        t.model.region()
        t.model.phone()
        t.model.birthday()
        t.model.password()
        t.model.email()
        t.model.photo()
        t.model.bio()
        t.model.posts()
        t.model.followers()
        t.model.following()
    }
})

const Post = objectType({
    name: 'Post',
    definition(t) {
        t.model.id()
        t.model.createdAt()
        t.model.updatedAt()
        t.model.author()
        t.model.content()
        t.model.mediaURL()
        t.model.published()
    }
})

export const Models = [
    User,
    Post
]