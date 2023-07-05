const jwt = require('jsonwebtoken')

export const generateJWT = ( uid:string ) => {

    return new Promise( (resolve: Function, reject: Function) => {

        const payload = { uid };

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY,{
            expiresIn:'4h'
        },( err:Error, token:any ) => {
    
            if( err ){
                console.log(err);
                reject('Cannot create token')
            }else{
                resolve(token)
            }
    
        })
    })
}