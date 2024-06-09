import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage1 } from '../redux/Action'
import { useSelector } from 'react-redux'
import Timestamp from '../components/Timing'
const ChatPage1 = () => {

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const messageContainerRef = useRef(null);
    const lastMessageRef = useRef(null); // Ref for the last message
    const handleChange = (e) => {
        setMessage(e.target.value)
        setError(false)
    }

    const data = useSelector(state => state.message1Reducer)



    const handleClick = () => {
        if (message.trim() !== "") {
            const newMessage = {
                message: message,
                user: 'user1',
                timing: Timestamp,
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            dispatch(addMessage1(newMessage));
            console.log(messages)
            setError(false)
            setMessage('')
           
            if (lastMessageRef.current) {
                lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: "end" });
            }
        } else {
            setError(true)
        }

    }
        
    const handleEnterKey = (event) => {
        if (event.key === "Enter") {
            handleClick();
        }
    };


    return (
        <div className='container'>
            <div className='innerdiv' >
                <div className='msgcontainer' ref={messageContainerRef}>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index}
                                    ref={index === data.length - 1 ? lastMessageRef : null}
                                    style={{
                                        display: "flex", justifyContent: item.user === "user1" ? "start" : "end",
                                    }}>

                                    <div className='messages'

                                        style={{ backgroundColor: item.user === "user1" ? "#3572EF" : "#3ABEF9" }}
                                    >
                                        <div className='p1container' >
                                            <p className='p1'>{item.message}</p>
                                        </div>
                                        <div className='p2container' >
                                            <p className='p2'>{item.timing}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='inputdiv'>
                    {
                        error ? <p style={{ color: "red", margin: 0 }} >send valid message</p> : null
                    }

                    <input type="text" placeholder='send message...' className='input-field ' value={message}
                        onChange={handleChange} onKeyDown={handleEnterKey}
                    />

                    <button className="send-button" onClick={handleClick}>Send</button>
                </div>

            </div>
        </div>
    )
}

export default ChatPage1