import { CDN_URL } from "../utils/constants"

const RestorentCard = (props) => {
    const { name, cuisines, cloudinaryImageId, avgRating, sla  } = props.resOBJ.info
    return (
        <div className='res-card'>
            <img className='res-logo' src={`${CDN_URL}/${cloudinaryImageId}`} alt='res-logo' />
            <h3>{name}</h3>
            <h4>{cuisines.map(cuisine => `${cuisine}, `)}</h4>
            <h4>{avgRating}</h4>
            <h4>{`${sla.deliveryTime} minutes`}</h4>
        </div>
    )
}

export default RestorentCard