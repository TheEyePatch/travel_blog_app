import Card from '../Card'

function TravelBlogItem(props){
  return (  
    <div>
      <Card>
        <div className={props.className}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </Card>
    </div>
  )
}

export default TravelBlogItem;