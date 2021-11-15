import { useEffect, useState } from "react"
import {useParams, useNavigate } from "react-router-dom"


function Show(props){
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const bookmarks = props.bookmarks 
    const [editForm, setEditForm] = useState({})
    useEffect(() => {
        if(props.bookmarks){
            const bookmark = bookmarks.find((b) => b._id === id)
            setEditForm(bookmark)
        }
    }, [props.bookmarks])
 
    if (props.bookmarks){
        const bookmark = bookmarks.find((b) => b._id === id) 

        const handleChange = (event) => {
            const newState = {...editForm}
            newState[event.target.name] = event.target.value 
            setEditForm(newState)
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            props.updateBookmarks(editForm, bookmark._id)
            navigate("/")
        }

        const removeBookmarks = () => {
            props.deleteBookmarks(bookmark._id)
            navigate("/")
        }

        const form = (
            <form onSubmit={handleSubmit}>
                <input className="input"
                type="text"
                value={editForm.name}
                name="name"
                placeholder="name"
                onChange={handleChange}
                /> 
                <input className="input"
                type="text"
                value={editForm.url}
                name="url"
                placeholder="Bookmark URL"
                onChange={handleChange}
                /> <br/>
                <input className="button" type="submit" value="Update Bookmark"/>
            </form>
        )

        return (<div className="bookmark">
        <h1>{bookmark.name}</h1>
        {form}
        <button className="button" id="delete" onClick={removeBookmarks}>
          Delete Bookmark
        </button> 
      </div>)
    } else {
    return <h1>Nothing found</h1>
    }
  
}

export default Show


