const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
describe('GraphQL Server', () => {
  it('should return users', async () => {
    const users = await prisma.user.findMany()
    expect(users.length).to.greaterThan(1)
  })
})
