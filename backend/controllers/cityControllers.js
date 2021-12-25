import { cities } from "../data/cities.js"
export const findCity = (req, res) =>{
    if(req.query.query){
        const {query} = req.query
        const filteredArray = cities.filter(city => city.name.includes(query) || city.display_name.includes(query))
        res.json(filteredArray)
    } else {
        res.json(cities)
    }
}