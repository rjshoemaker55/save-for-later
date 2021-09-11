import { NextApiRequest } from 'next'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

interface Credentials {
  username: {
    label: string
    type: string
    placeholder: string
  }
  password: {
    label: string
    type: string
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Username and Password',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials: Credentials, req: NextApiRequest) {
        const user = { id: 1, name: 'RJ', email: 'rjshoemaker@jgiajidfj' }

        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ]
})
