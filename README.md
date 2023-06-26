Proyect where we are creating a back-end for Music App
--
-   WORKING WITH : NODE.js (express), PRISMA, POSTGRESSQL.

- Data Base has 3 tables
    - 1 - for User  
    - 2 - Artist 
    - 3 - song
    - (a lot of users likes many song but songs have only one artis)
    - Db will be a SQL DB

- `We are runing npm for installations`

start a proyect run ->
```
npm init -y
npm install -D typescript
npm install -D ts-node
npm install -D nodemon
```
EXPRESS
--
- Those are the dependencies for node.js express
    - if fist does not work try with the secon option

    ```
    npm install express
    npm i --save-dev @types/express

    npm i cors
    npm i --save-dev @types/cors

    npm i dotenv
    ```

JSON CONFIGs
--
- then create tsconfig.json

    - this will be the configuration:
    ```
    {
        "compilerOptions": {
            // "module":"CommonJS",
            "module": "NodeNext",
            "moduleResolution": "node",
            "baseUrl": "src",
            "outDir": "dist",
            "sourceMap": true,
            "noImplicitAny": true,
        },
        "include": ["src/**/*"]
    }
    ```

- Now you need to create nodemon.json file
    - this will be the configuration:
    ```
    {
    "watch":["src"],
    "ext": ".ts,.js",
    "exec": "ts-node ./src/index.ts"
    }   
    ```
- Do not forget to add start into package.json
    - this will be the configuration:
    ```
    "scripts": {
        "start": "nodemon",
    }   
    ```



ORM info:
--

to start with ORM in this proyect we are running with prisma:

```
npx prisma init --datasource-provider sqlserver
```

- INSTALL PRISMA
    * then you now invoke prisma cli with NPX
    * Use prisma to verify if there is on the app
    * After start prisma with init
    * then you will need to run migrate to get connected with db

    ```
    npm install prisma --save-dev
    npx prisma
    npx prisma init
    npx prisma migrate dev
    ```

    in this case provider will be which DATA Base we will connect to.
    for mor refarance check the link below:

    https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#datasource

    to run and connect prisma with data base run:
    ```
    npx prisma studio
    ```

Password crypt & UUID
--

To get the password encrypt we will user bcryptjs
    
```
    hasing pass

    const salt = bcryptjs.genSaltSync();
    createArtists.password = bcryptjs.hashSync( password, salt)


    npm i bcryptjs
    npm i --save-dev @types/bcryptjs
```
    



to useUnique ID we will be runing uuidv4

```
    npm i uuidv4

    import { v4 as uuidv4 } from 'uuid';
    const id:string = uuidv4()
```

remember
--

```
npm i express-validator
```

validation_jwt needs to be on postman

go to headers/ into key an value

key = x-token 
value = token4


localhost:8000/