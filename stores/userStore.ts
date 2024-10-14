import { defineStore } from 'pinia'
import type { User } from '~/types/User'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    user: null as User | null,
  }),
  actions: {
    // Fetch all the users typically 10 users are returned
    async fetchUsers() {
      console.log('inside fetch')
      const data = await $fetch<User[]>('https://jsonplaceholder.typicode.com/users')
      this.users = data || []
      console.log('inside fetch data', data)
    },
    // Fetch single user by passing the ID
    async fetchUser(id: string) {
      const data = await $fetch<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      this.user = data
    },
    // Update the user just in the state, JSON typicode doesnt allow updating. 
    updateUser(userTobeUpdated: User) {
      const index = this.users.findIndex((user:User) => user.id === userTobeUpdated.id)
      if (index !== 1) {
        this.users[index] = { ...this.users[index], ...userTobeUpdated }
      }
    },
    // remove the user just in the state, so it is not visible in the table, if we refresh page, it will be back
    removeUser(deleteUserId: number) {
      this.users = this.users.filter((user:User) => user.id !== deleteUserId)
    },
  },
})
