# Branded Things (NestJS REST API)

This NestJS application is an e-commerce or product management system.

## Authors

- [@fathanabds](https://github.com/fathanabds)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`JWT_SECRET`

## Features

- User Management: Users Can Be Created With Roles Such As Admin or Staff and Authentication and Authorization Are Handled Using JWT Tokens
- Product Management: Products Can Be Created, Updated, Retrieved, and Deleted
- Category Management: Categories Can Be Created, Updated, Retrieved, and Deleted
- Public API: Public Endpoints To Retrieve Products With Filtering and Pagination
- Role-Based Access Control: Role-Based Access Control Is Implemented Using Custom Decorators and Guards

## Run Locally

Clone the project

```bash
  git clone https://github.com/fathanabds/branded-things-server
```

Go to the project directory

```bash
  cd branded-things
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Tech Stack

- NestJS
- TypeORM
- PostgreSQL
