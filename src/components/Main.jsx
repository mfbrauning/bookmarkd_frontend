import Index from "../pages/Index";
import Show from "../pages/Show";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function Main(props) {
  // state
  const [bookmarks, setBookmarks] = useState(null);

  //api url
  const URL = "https://mfb-bookmarkd-backend.herokuapp.com/bookmarks/";

  const getBookmarks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBookmarks(data);
  };

  const createBookmarks = async (bookmark) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookmark),
    });
    getBookmarks();
  };

  const updateBookmarks = async (bookmark, id) => {
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookmark),
    });
    getBookmarks();
  };
  const deleteBookmarks = async (id) => {
    await fetch(URL + id, {
      method: "delete",
    });
    getBookmarks();
  };

  useEffect(() => getBookmarks(), []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Index bookmarks={bookmarks} createBookmarks={createBookmarks} />
          }
        />
        <Route
          path="/bookmarks/:id"
          element={
            <Show
              bookmarks={bookmarks}
              updateBookmarks={updateBookmarks}
              deleteBookmarks={deleteBookmarks}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
