import { useEffect, useState } from "react"
import RestorentCard from "./RestorentCard"
import Shimmer from './Shimmer'

const BodyComponent = () => {
    const [resList, setResList] = useState([])
    const [filteredRestorant, setFilteredRestorant] = useState([])
    const [searchText, setSearchState] = useState("")
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999")
        const json = await data.json()
        //Optional chaining
        setResList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestorant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    }

    return resList.length === 0 ? <Shimmer /> : (
        <div className="body-container">
            <div className="filters">
            <div className="search">
                <input type="text" name="search" value={searchText} onChange={(e) => setSearchState(e.target.value)} />
                <button onClick={() => {
                    const filteredRestorant = resList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredRestorant(filteredRestorant) 
                }} >Search</button>
            </div>
            <button 
            onClick={() => { 
                const filteredList = resList.filter(res => res.info.avgRating > 4)
                setResList(filteredList) 
            }} 
            className="btn-top-rated"
            >Top rated Restorent</button>
            </div>
            <div className='res-container'>
              {filteredRestorant.map((res) => {
                return <RestorentCard key={res.id} resOBJ={res} />
            })}
            </div>
        </div>
    )
}

export default BodyComponent