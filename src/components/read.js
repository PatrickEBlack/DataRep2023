import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read(){

    //Data setter method
    const [data, setData]=useState([]);

    useEffect(
        ()=>{
            //gets data from url
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920') 
            
            //.then tells us what to do once the data has been recieved
            .then( 
                (response)=>{
                    setData(response.data.books)
                }
            )
            //error catch
            .catch(
                (error)=>{
                    console.log(error);
                }
            );
        },[]
    );

    return(
        <div>
            <h2>Hello from Read component!</h2>
            {/passes data from data into myBooks/}
            <Books myBooks={data}></Books>
        </div>
    );
}
export default Read;