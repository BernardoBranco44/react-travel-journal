export default function Card(props){
  return (
    <div className="card-div">
      <img src={props.item.imageUrl} alt="location"/>
      <div>
        <div className="location-link">
          <h5>{props.item.location}</h5>
          <a href={props.item.googleMapsUrl}>View on google Maps</a>
        </div>
        <h1>{props.item.title}</h1>
        <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  )
}
