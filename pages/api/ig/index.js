import all from "../../../data/ig/all.json"

export default (req,res)=>{
    return res.status(200).json(all)
}