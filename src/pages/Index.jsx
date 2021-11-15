import { useState } from "react"
import { Link } from "react-router-dom"

function Index(props){
    const [newForm, setNewForm] = useState({
        name: "",
        url: ""
    })
    
    const handleChange = (event) => {
        const newState = {...newForm}
        newState[event.target.name] = event.target.value 
        setNewForm(newState)
    }

    const handleSumbit = (event) => {
        event.preventDefault()
        props.createBookmarks(newForm)
        setNewForm({
            name: "",
            url: ""
        })
    }

    const form = <form onSubmit={handleSumbit}>
        <input className="input"
        type="text"
        value={newForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}/>
         <input className="input"
        type="text"
        value={newForm.url}
        name="url"
        placeholder="Bookmark URL"
        onChange={handleChange}/>
        <input className="button" type="submit" value="Add New Bookmark"/>
    </form>


    if (props.bookmarks) {
        return (
          <section>
            {form}
            <div className="listbody">
            {props.bookmarks.map((bookmark) => {
              return (
                  
                <div key={bookmark._id} className="bookmark">

                <a href={bookmark.url} alt={bookmark.name} className="bookmarklink">{bookmark.name}</a>
                <Link to={`/bookmarks/${bookmark._id}`}>
                  <br/><button className="button">Edit Bookmark</button>
                </Link>
              </div>
             
              );
            })}
             </div>
          </section>
        );
      } else {
        return (
          <section>
              {form}
            <h1>Loading...</h1>
          </section>
        );
      }
}

export default Index