import suggest from "../../../data/ig/sugest.json"

export default (req,res)=>{
    return res.status(200).json(suggest);
}