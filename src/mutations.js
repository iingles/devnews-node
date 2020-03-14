import { mutationType } from 'nexus'

export const Mutation = mutationType({
    definition(t) {
        t.crud.createOneUser()
        t.crud.deleteOneUser()
        t.crud.createPost()
        t.crud.updatePost()
        t.crud.updateManyPost()
        t.crud.upsertPost()
        t.crud.deletePost()
        t.crud.deleteManyPost()
    }
})