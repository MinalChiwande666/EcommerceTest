import cartmodel from "../models/cart.model.js"
import usermodel from "../models/auth.models.js"
export const AddtoCart = async (req, res) => {
  const { id } = req?.user?.userdetail
  const { pid } = req.params
  console.log(pid,'pid check')
  try {
    let addProduct = await usermodel.findById({ _id:id?.toString() }) 
    let existingItem = addProduct.cart.findIndex(item => item?.toString() === pid)
    console.log(existingItem,'check exist or not')
    if (existingItem !== -1) {
      console.log('alredy in cart')
      res.status(400).json({ messgae: 'Already added in the cart' })
    } else {
      addProduct.cart.push(pid)
      await addProduct.save()
      res.status(200).json({ message: 'Added to cart' })
    }

  } catch (e) {
    console.log('error add to cart=>', e)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

// all added products
export const getAllProducts = async (req, res) => {
  const { id } = req.user.userdetail
  try {
    const user = await usermodel.findById(id).populate('cart');
    res.status(200).json(user.cart);
  } catch (e) {
    console.log('error cart =>', e)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

// remove from cart
export const RemoveCart = async (req, res) => {
  const { cid } = req.params
  const { id } = req.user.userdetail
  
  try {
    const user = await usermodel.findById({ _id: id })
    if (!user) return res.status(401).json({ message: 'Item not found' })
    
    let existingItem = user.cart.findIndex(item=>item.toString()===cid)

    if(existingItem !== -1)
    {
      user.cart.splice(existingItem,1)
      await user.save()
      res.status(200).json({ message: 'Succefully deleted' })
    }else
    {
      res.status(401).json({message:'Item not found in cart'})
    }
  } catch (e) {
    console.log('error rem cart=>', e)
    res.status(500).json({ error: "Internal Server Error" })
  }
}