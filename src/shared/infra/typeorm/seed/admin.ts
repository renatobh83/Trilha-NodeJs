import { hash } from "bcryptjs"
import {createConnection, getConnection} from "typeorm"
import {v4 as uuid} from "uuid"




 function create() {
    return new Promise(async (reject, resolve)=>{
        createConnection()
        const connection = getConnection()
        const id  = uuid()
        const password = await hash("admin",8)
        console.log(password)
        await connection.query(
            `INSERT INTO USERS(ID,NAME,EMAIL,PASSOWORD,ADMIN,CREATED_AT)
                values('${id}', 'admin','admin@admin.com', '${password}', true, ${new Date()})
            `
            
            )
    })
    
}

create().then(()=> console.log("ll"))