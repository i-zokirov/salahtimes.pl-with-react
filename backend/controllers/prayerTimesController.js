import aladhan from "../API/aladhan.js";

export const getPrayerTimesByCityAndDate = async(req, res) => {
    const { city, date, country } = req.query
    try {
        const {data} = await aladhan.get(`/timingsByCity?city=${city}&country=${country}&method=99&methodSettings=12,null,12&tune=0,-1,0,0,0,0,0,0,0&school=1`)
        res.json({...data, city: city, country}) 
    } catch (error) {
        res.status(504)
        throw new Error('Something went wrong')
    }
}