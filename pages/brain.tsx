import React from 'react'
import { GetServerSideProps } from 'next'
import { useSession, getSession } from 'next-auth/client'
import prisma from '../lib/prisma'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req })
  if (!session) {
    res.statusCode = 403
    return { props: { links: [] } }
  }

  const links = await prisma.link.findMany({
    where: {
      owner: { email: session.user?.email || undefined }
    },
    include: {
      owner: {
        select: { name: true }
      }
    }
  })

  console.log(links)

  return {
    props: { links }
  }
}

type Props = {
  links: LinkProps[]
}

const Brain: React.FC<Props> = (props) => {
  const [session] = useSession()

  if (!session) {
    return <h1>Not authenticated</h1>
  }

  return (
    <div>
      {props.links.map((link: any) => {
        return (
          <>
            <h1>{link.title}</h1>
            <h2>{link.description}</h2>
            <h3>{link.priority}</h3>
          </>
        )
      })}
    </div>
  )
}

export default Brain
