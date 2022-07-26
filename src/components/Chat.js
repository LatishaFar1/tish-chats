import { getDocs, addDoc, Timestamp, collection,} from 'firebase/firestore';
import React, {useState} from 'react'
import { db} from '../firebase';
import NavBar from './NavBar';


function Chat({user}) {

 
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");


    // getDocs(collection(db,  "messages"))

    // .then((snapshot) => {
    //   setMessages(
    //     snapshot.docs.map(doc => doc.data())
    //   )
    // })
    // .catch(error => {
    //   console.log(error.message)
    // })


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
    <div className='chat'>
         <div class="chat-box-header">
            TishChat
          </div>
    
    <div className='chat-box-body'>
      <div className='chat-box-overlay'>
      <div className="chat-box-overlay">   
      </div>
        <div className='chat-logs'>
             <p>test message</p>
                {messages && messages.map(({id, text, user}) => (

                          <div key={id}>

                              <p> {text} </p>
                              <p>{user}</p>
                          </div>
                          ))}

        </div>
        

        <div className='chat-input'>

        <form onSubmit={handleSubmit}>
       <input onChange={handleChange} id="chat-input" type="text" placeholder="send a message" value={text} name="text"/>
       <button className='chat-submit'>submit</button>
      </form>
        </div>
      </div>
         
    </div>
      



    </div>
  )

}

export default Chat