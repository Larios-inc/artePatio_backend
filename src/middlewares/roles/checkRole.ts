const { request, response } = require('express')

export const tieneRole = ( ...roles:string[]) => {

    return (req:typeof request, res: typeof response) =>{

        if( !req.user ){
            return res.status(500).json({
             msg:'requires verify role without validate token'
           })
        }

        if( !roles.includes( req.user.roleId)){
            return res.status(401).json({
                msg:`Service requires one of the role: ${roles}`
            })
        }

    }
}

// 91829
