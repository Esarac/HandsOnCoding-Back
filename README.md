# HandsOnCoding Business Logic (Back-End)

This is the business logic REST API for the HandsOnCoding project, an open-source MOOC (Massive Open Online Courses) for multiple programming languages.

### Build With

* ![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
* ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
* ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
* ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
* ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
* ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=black)

## Getting Started

### Prerequisites

In order to run this project you should install [Node](https://nodejs.org/en/download/) in your computer.

To have full access to the database, you should enable your computer IP address in the [MongoDB](https://www.mongodb.com/) cluster.

### Installation

1. Clone the repository
    ```sh
    git clone https://github.com/Esarac/HandsOnCoding-Back.git
    ```
2. Go inside the project folder
   ```sh
   cd HandsOnCoding-Back
   ```
3. Install npm packages
   ```sh
   npm i
   ```

## Usage

### Configuration

In the [schema.prisma](https://github.com/Esarac/HandsOnCoding-Back/blob/main/prisma/schema.prisma) file, you can define all your schemas and the database provider.

To submit your changes into the database, use the following command:

```sh
npm run db-push
```
For more information, visit the [Prisma](https://www.prisma.io/docs/) webpage.

You can also define the:

* PORT
* DATABASE_URL

in the [.env.development](https://github.com/Esarac/HandsOnCoding-Back/blob/main/.env.development) and [.env.test](https://github.com/Esarac/HandsOnCoding-Back/blob/main/.env.test) files.

### Start

To run the REST API, just execute the command:
* Dev env
  ```sh
  npm start
  or
  npm run dev
  ```
* Test env
  ```sh
  npm run test
  ```

For more information, you can access the API documentation via the route [http://localhost:8080/docs/](http://localhost:8080/docs).

### Prisma Studio

[Prisma Studio](https://www.prisma.io/studio) is a visual editor for the data in your database.

To open Prisma Studio, use the following command:

* Dev env
  ```sh
  npm run ps-dev
  ```
* Test env
  ```sh
  npm run ps-test
  ```

## Related Projects

[HandsOnCoding (Front-End)](https://github.com/Esarac/HandsOnCoding-Front)

[HandsOnCoding Compiler (Back-End)](https://github.com/mavaldot/pdg-compiler)

## Contact Information

Esteban Ariza Acosta (Esarac)

[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Esarac)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/estebanarizaacosta/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:acosta57esteban@gmail.com)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/esaracgp/)
