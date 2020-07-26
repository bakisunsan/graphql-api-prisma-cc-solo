import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const seed = async () => {
  const user = await prisma.user.create({
    data: {
      name: 'AliceInWnd',
      email: 'alice@prisma.io2',
      posts: {
        create: { title: 'Join us for Prisma Day 2020' },
      },
    },
  })
}

seed()
  .then(data => console.log('success, ', data))
  .catch(err => console.log('err, ', err))
  .finally(async () => await prisma.disconnect())
