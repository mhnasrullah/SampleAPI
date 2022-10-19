import post from "../../../data/ig/post.json"

export default (req,res)=>{
    return res.status(200).json(post)
}