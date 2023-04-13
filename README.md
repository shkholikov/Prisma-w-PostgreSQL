# Minimal Prisma w/ PostgreSQL 📦

### This is a minimal example of using Prisma with PostgreSQL Database. 

#### If you want to try this repo, follow the steps below:

First clone the project by running following command in your directory:

```git clone https://github.com/shkholikov/Prisma-w-PostgreSQL.git```

Run this command to install all dependencies: 

```npm run install```

Next step is configuring your database instance to get ready with Prisma. Take a look at ".env.example" file and replace the followings with your database configuration:

```DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<databasename>?schema=public"```

Then you have to migrate Prisma schema located in ./prisma folder to your database by running the following command:

```npx prisma migrate dev --name init```

You are almost there, open the link below to see an examples of querying your database: 

[Querying the database with Prisma examples](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/querying-the-database-typescript-postgres)

That's it, it's only a minimal example of using Prisma w/ PostgreSQL. Follow the [official docs](https://www.prisma.io/docs) to get more familiar with this powerful tool **Prisma** 🔥
