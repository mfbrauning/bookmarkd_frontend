import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Show(props) {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const bookmarks = props.bookmarks;
  const [editForm, setEditForm] = useState({});
  useEffect(() => {
    if (props.bookmarks) {
      const bookmark = bookmarks.find((b) => b._id === id);
      setEditForm(bookmark);
    }
  }, [props.bookmarks]);

  if (props.bookmarks) {
    const bookmark = bookmarks.find((b) => b._id === id);
    const handleChange = (event) => {
      const newState = { ...editForm };
      newState[event.target.name] = event.target.value;
      setEditForm(newState);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      props.updateBookmarks(editForm);
      navigate("/");
    };
    const removeBookmark = () => {
      props.deleteBookmarks(bookmark._id);
      navigate("/");
    };
    const form = (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            type="text"
            value={editForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
        </label>
        <input
          type="text"
          value={editForm.url}
          name="url"
          placeholder="Bookmark URL"
          onChange={handleChange}
        />
        <input type="submit" value="Edit Bookmark" />
      </form>
    );

    return (
      <div className="bookmark">
        <h1>{bookmark.name}</h1>
        <button id="delete" onClick={removeBookmark}>
          Delete Bookmark
        </button>
        {form}
      </div>
    );
  } else {
    <h1>okay</h1>;
  }
}

export default Show;
