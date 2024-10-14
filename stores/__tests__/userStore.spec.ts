// Unit Test for Pina Stores - 
// Reference -> https://pinia.vuejs.org/cookbook/testing.html 

import { setActivePinia, createPinia } from 'pinia'
import { useUserStore } from '../userStore'
import { describe, it, vi, expect, beforeEach } from 'vitest'

describe('userStore', () => {
  let store: ReturnType<typeof useUserStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useUserStore()
  })

  it('fetches and sets users', async () => {
    // Mocking $fetch globally for the test
    global.$fetch = vi.fn((url) => {
        if (url.includes('users')) {
          return Promise.resolve([{ id: 1, name: 'John Doe' }])
        }
      })

    await store.fetchUsers()
    expect(store.users).toEqual([{ id: 1, name: 'John Doe' }])
  })

  it('updates a user', () => {
    store.users = [{ id: 1, name: 'John Doe' }]
    store.updateUser({ id: 1, name: 'Jane Doe' })
    expect(store.users[0].name).toBe('Jane Doe')
  })

  it('removes a user', () => {
    store.users = [{ id: 1, name: 'John Doe' }]
    store.removeUser(1)
    expect(store.users.length).toBe(0)
  })
})