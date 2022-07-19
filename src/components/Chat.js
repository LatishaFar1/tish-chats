import { getDocs, addDoc, Timestamp, collection,} from 'firebase/firestore';
import React, {useState} from 'react'
import { db} from '../firebase';
import Login from './Login';


function Chat({user}) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("")

    getDocs(collection(db,  "messages"))

    .then((snapshot) => {
      setMessages(
        snapshot.docs.map(doc => doc.data())
      )
    })
    .catch(error => {
      console.log(error.message)
    })


    const handleChange = (e) => {
      setText(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      addDoc(collection(db, "messages"), {
       text,
       createdAt: Timestamp.fromDate(new Date())
      })
   
    }



  return (
    <div>
      <form className='chat-form' onSubmit={handleSubmit}>
       <input onChange={handleChange} type="text" value={text} name="text"/>
      </form>
    
        {messages && messages.map(({id, text}) => (

              <div>

                  <p key={id}> {text}</p>
              </div>
        ))}



    </div>
  )
}

export default Chat