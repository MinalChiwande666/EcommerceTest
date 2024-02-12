import usermodel from "../models/auth.models.js"
import productmodel from "../models/product.model.js"

export const UploadProduct = async (req, res) => {
  const { id, role } = req.user.userdetail
  console.log(id, role)
  const { title, description, category, price, image } = req.body
  // console.log(image)
  try {
    if (role === 'owner') {
      const finduser = await usermodel.findById(id)
      if(!finduser) return res.status(400).json({message:'User not found'})

      const addProduct = new productmodel({
        title,
        description,
        category,
        price,
        image
      })

      let saveProduct = await addProduct.save()
      if(saveProduct)
      {
        finduser.ownerproduct.push(saveProduct?._id)
        await finduser.save()
        res.status(200).json({message:'Product Uploaded',data:addProduct})
      }
    }
    else {
      return res.status(400).json({ message: 'you are not the owner' })
    }
  } catch (e) {
    console.log('error in product =>', e)
    res.status(500).json({ error: 'Internal Server Error' })
  }
 
}

export const ShowProduct = async(req,res)=>{
  const {id} = req.user.userdetail
  try{
    const ownerProduct = await usermodel.findById({_id:id}).populate('ownerproduct')
    res.status(200).json(ownerProduct)
  }catch(e)
  {
    console.log('error pro =>',e)
    res.status(500).json({error:'Internal Server Error'})
  }
}

// all product
export const getProduct = async(req,res)=>{
  const allp = await productmodel.find()
  res.status(200).json(allp)
}

export const deletProduct = async(req,res)=>{
   const {id} = req.user.userdetail
   const {pid} = req.params
   try{
    const product = await productmodel.findById(pid)
    if(!product) return res.status(400).json({message:'Product not found'})

    await product.deleteOne({_id:pid})

    const user = await usermodel.findById(id)
    user.ownerproduct = user.ownerproduct.filter(item =>item.toString()!==pid)
    await user.save()
    res.status(200).json({message:'Delete Succefully'})
   }catch(e)
   {
    console.log('error delete pro=>',e)
    res.status(500).json({error:'Internal Server Error'})
   }
}



export const updateProduct = async (req, res) => {
  const { id, role } = req.user.userdetail;
  const { pid } = req.params;
  const { title, description, category, price, image } = req.body;

  try {
    if (role === 'owner') {
      const finduser = await usermodel.findById(id);
      if (!finduser) return res.status(400).json({ message: 'User not found' });

      const updatedProduct = await productmodel.findByIdAndUpdate(pid, {
        title,
        description,
        category,
        price,
        image,
      });

      if (updatedProduct) {
        res.status(200).json({ message: 'Product Updated successfully' });
      } else {
        res.status(400).json({ message: 'Product not found' });
      }
    } else {
      return res.status(400).json({ message: 'You are not the owner' });
    }
  } catch (e) {
    console.log('error in updating product =>', e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
