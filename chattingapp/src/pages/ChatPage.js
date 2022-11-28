import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChatPage = () => {

    const [chats, setChats] = useState([])

    // Calling UseEffect
    useEffect(() => {
        fetchCharts();
    }, [])
    
    // Fetch Data:
    const fetchCharts = async() => {
        const { data } = await axios.get("/api/chats")
        setChats(data)
    }

  return (
    <div>
        {
            chats.map((chat, key) => (
                <div key={key}>{chat.chatName}</div>
            ))
        }
    </div>
  )
}

export default ChatPage;