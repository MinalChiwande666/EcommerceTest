import jwt from 'jsonwebtoken'

export const checkToken = async(req,res,next) =>{
    try{
        const token = req.headers.authorization
        if(!token || token === undefined) return res.status(401).json({error:'Unauthorized'})

        jwt.verify(token.replace('Bearer ',''),process.env.JWT,(err,decode)=>{
            if (err) {
                console.error('Error decoding token:', err);
                return res.status(401).json({ error: 'Unauthorized Token Provided' });
            }
           
           req.user = decode
           next()
        })
    }catch(e)
    {
      res.status(500).json({error:'Internal Server Error'})
    }
    
}