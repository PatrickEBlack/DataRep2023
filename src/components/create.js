import { useState } from "react";

function Create(){

    //Setter methods for Title, Cover, and Author
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        //Prints title, cover & author to the console
        console.log("Title: "+title+
                    ", Cover: "+cover+
                    ", Author: "+author);
    }
    return(
        <div>
            <h2>Hello from Create Component!</h2>
            <form onSubmit={handleSubmit}>
                {/provides a text box for the user to enter a book title/}
                <div className="form-group">
                    <label>Edit Book Title:</label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => {setTitle(e.target.value) }} //sets title based on user input
                    />
                </div>
                {/provides a text box for the user to enter a book cover/}
                <div className="form-group">
                    <label>Edit Book Cover:</label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => {setCover(e.target.value) }} //sets cover based on user input
                    />
                </div>
                {/provides a text box for the user to enter a book author/}
                <div className="form-group">
                    <label>Edit Book Author:</label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => {setAuthor(e.target.value) }} //sets author based on user input
                    />
                </div>
                <div>
                    <input type="submit" value="Add Book"></input> {/Add Book Button/}
                </div>
            </form>
        </div>
    );
}
export default Create;