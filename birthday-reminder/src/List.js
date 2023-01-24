import './List.css'


function List({name, birthday, image}){
    return(
        <div id="birthday-list">
            <h4>{name}</h4>
            <p>{birthday}</p>
            <img src={image} alt={name} width="70" height="75" />
        </div>

    )
}




export default List