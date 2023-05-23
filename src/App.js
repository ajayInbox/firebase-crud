import { useEffect, useState } from 'react';
import './App.css';
import Auth from "./components/auth";
import {db} from "./firebase";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc} from "firebase/firestore";

function App() {

  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [year, setYear] = useState(0);
  const [updateTitle, setUpdataTitle] = useState("");
  const movieList = collection(db, "movies");

  const getList = async() =>{
      try{
      const data = await getDocs(movieList);
      const actualData = data.docs.map((doc)=>({
        ...doc.data(),
        id:doc.id
      }));
      setList(actualData);
      }catch(err){
        console.error(err);
      }
    }

  useEffect(()=>{
    getList();
  }, [])

  const addMovie = async() =>{
    try{
      await addDoc(movieList, {
        title: title,
        coverPhoto: url,
        releaseYear: year
      })
    }catch(err){
      console.error(err);
    }
    getList();
  }

  const deleteMovie = async(id) =>{
    const movieDoc = doc(db, "movies",id);
    await deleteDoc(movieDoc);
    getList();
  }

  const updateMovie = async(id) =>{
    const movieDoc = doc(db,"movies",id);
    updateDoc(movieDoc, {
      title: updateTitle
    })
    getList();
  }

  return (
    <div className="app">
      <div>
        <Auth/>
        <div>
          <input type="text" placeholder='Movie title..' onChange={e=>setTitle(e.target.value)} />
          <input type="text" placeholder='Cover Photo Url...' onChange={e=>setUrl(e.target.value)} />
          <input type="number" placeholder='Movie Release Year..' onChange={e=>setYear(e.target.value)} />
          <button type='submit' onClick={addMovie}>Add Movie</button>
        </div>
        {list.map((movie)=>{
          return(
          <div key={movie.id}>
            <img src={movie.coverPhoto} alt=""/>
            <h2>{movie.title}</h2>
            <p>{movie.releaseYear}</p>
            <button onClick={()=>deleteMovie(movie.id)}>Delete Movie</button>
            <input type='text' onChange={e=>setUpdataTitle(e.target.value)}/>
            <button onClick={()=>updateMovie(movie.id)}>Update</button>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
