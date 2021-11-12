import { useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react"

function Show(props){
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const bookmark = props.bookmarks
    // Add State
    const[editForm, setEditForm] = useState({})
    // useEffect to avoid show route page refresh error
    useEffect(() => {
        if(props.bookmarks){
            // Grab the id
            const bookmarks = bookmark.find((b) => b._id === id)
            setEditForm(bookmarks)
        }
    }, [props.bookmark])

    if (props.bookmark){
        //Grab the id 
        const bookmarks = bookmark.find((b) => b._id === id)




        // Delete function 
        const removeBookmark = () => {
            props.deleteBookmark(bookmarks._id)
            navigate("/")
         }
         return (
             <div className="bookmarks">
                 <button id="delete" onClick={removeBookmark}>
                Delete Bookmark
                </button>

             </div>
         )
    }else{
        return<h1>No Bookmark</h1>
    }
     
}

export default Show