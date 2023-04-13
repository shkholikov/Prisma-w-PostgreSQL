import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  //creates a user in db with profile and post
  const createUser = await prisma.user.create({
    data: {
      name: "Sam",
      email: "sam@prisma.io",
      posts: {
        create: { title: "Hello Prisma Schema" },
      },
      profile: {
        create: { bio: "I like using Prisma" },
      },
    },
  });
  console.log(createUser);
  //get all users from db
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });
  //update an existing post by id: 1
  const updatePost = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  });
  console.log(updatePost);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    prisma.$disconnect();
    process.exit(1);
  });
