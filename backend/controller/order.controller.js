import usermodel from '../models/auth.models.js'
export const OrderNow = async(req,res)=>{
    const {id} = req?.user?.userdetail
    const {pid} = req.params
    try{
     let finduser = await usermodel.findById({_id:id})
     if(!finduser) return res.status(400).json({message:'User not found'})
     
     let existingItem = finduser.order.findIndex(item=>item.toString()===pid)
     if (existingItem !== -1) {
        console.log('alredy in cart')
        res.status(400).json({ messgae: 'Already Ordered' })
      } else {
        finduser.order.push(pid)
        await finduser.save()
        res.status(200).json({ message: 'Added to order' })
      }
    }catch(e)
    {
        console.log(e)
        res.status(500).json({error:'Internal Server Error'})
    }
}

export const getAllProducts = async (req, res) => {
    const { id } = req.user.userdetail
    try {
      const user = await usermodel.findById(id).populate('order');
      res.status(200).json(user.order);
    } catch (e) {
      console.log('error cart =>', e)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }