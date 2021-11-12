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
        <input
        type="text"
        value={newForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}/>
         <input
        type="text"
        value={newForm.url}
        name="url"
        placeholder="Bookmark URL"
        onChange={handleChange}/>
        <input type="submit" value="Add New Bookmark"/>
    </form>


    if (props.bookmarks) {
        return (
          <section>
            {form}
            {props.bookmarks.map((bookmark) => {
              return (
                <div key={bookmark._id} className="bookmark">

                <a href={bookmark.url} alt={bookmark.name}>{bookmark.name}</a>
                <Link to={`/bookmarks/${bookmark._id}`}>
                  <h1>Edit Bookmark</h1>
                </Link>
              </div>
              );
            })}
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