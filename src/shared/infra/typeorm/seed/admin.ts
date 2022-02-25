import { hash } from "bcryptjs"
import { createConnection, getConnection } from "typeorm"
import { v4 as uuid } from "uuid"




async function create() {

    createConnection().then(async () => {

        const connection = getConnection()

        const isConnect: boolean = connection.isConnected

        if (isConnect) {

            const id = uuid()
            const password = await hash("admin", 8)
            const query =    `INSERT INTO users(ID,NAME,EMAIL,password,isAdmin,driver_license,CREATED_AT)
            values('${id}', 'admin','admin@admin.com', '${password}', true,'123', ${new Date().getTime()})
        `
            await connection.query(query)
        }

        await connection.close()
    })
}

create()