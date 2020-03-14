import { mutationType } from 'nexus'

export const Mutation = mutationType({
    definition(t) {
        t.crud.createOneUser()
        t.crud.createOnePost()
        t.crud.deleteOneUser()
        t.crud.deleteOnePost()
    }
})