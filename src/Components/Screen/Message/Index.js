import React, { useEffect, useState } from "react";
import '../../css/Message.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoMdSend } from 'react-icons/io';
const data = [
    { id: 1, name: 'Cuvate Notes', colorCode: '#0047FF' },
    { id: 2, name: 'Java Notes', colorCode: '#B38BFA' },
    { id: 3, name: 'Python Online', colorCode: '#FFC0C0' },
    { id: 4, name: 'SQL', colorCode: '#43E6FC' },
    { id: 5, name: 'HTML', colorCode: '#F19576' },
    { id: 6, name: 'CSS', colorCode: '#6691FF' },
    { id: 7, name: 'Java Script', colorCode: '#FF66F0' },
    { id: 8, name: 'MongoDB', colorCode: '#0047FF' },
    { id: 9, name: 'MySQL', colorCode: '#B38BFA' },
    { id: 10, name: 'Node js', colorCode: '#FFC0C0' },
    { id: 11, name: 'Express js', colorCode: '#43E6FC' },
    { id: 12, name: 'Nodemon', colorCode: '#F19576' },
    { id: 13, name: 'Rest api', colorCode: '#6691FF' },
    { id: 14, name: 'mujhe nhi pata', colorCode: '#FF66F0' },
]

function Message(props) {
    const [message, setMessage] = useState();
    const [messageList, setMessageList] = useState([]);
    const nameMonth = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec",
    };

    const hendleCreate = (e) => {
        if (message) {
            const newMessage = {
                id: props.id, gname: message,
                time: (new Date().getHours().toString() % 12) + ':' + new Date().getMinutes().toString() + ' ' + (new Date().getHours() >= 12 ? 'PM' : 'AM'),
                date: new Date().getDate().toString() + ' ' + nameMonth[(new Date().getMonth() + 1)] + ' ' + new Date().getFullYear().toString()
            };
            setMessageList([...messageList, newMessage]);
            localStorage.setItem("MessageList", JSON.stringify([...messageList, newMessage]));
            setMessage('');
        }
    };

    useEffect(() => {
        // console.log("Chal jaa yrr");
        // console.log("from Use State" + props.name + props.colorCode + props.id);

        if (localStorage.getItem("MessageList")) {
            const storedList = JSON.parse(localStorage.getItem("MessageList"));
            console.log("Data For id check" + JSON.stringify(storedList));
            setMessageList(storedList);
        }
    }, [])
    return (
        <div className="scsr">
            <div className="header">
                <div className="GroupList1" >
                    {
                        props.size < 550 &&
                        <div style={{ fontSize: 22, color: 'gray' }} onClick={() => { window.location.replace('/'); }}>
                            <AiOutlineArrowLeft />
                        </div>}
                    <div className="Substr1" style={{ backgroundColor: props.colorCode }}>
                        {props.name[0]}{props.name[1]}
                    </div>
                    <div className="Gname1">
                        {props.name}
                    </div>
                </div>
            </div>
            <div className="Messagebox">
                <div className="messaged">
                    {
                        messageList.map((data, inde) => {
                            return (
                                data.id == props.id &&
                                <div className="subbox">
                                    <div className="datetime">
                                        <p style={{ fontSize: 18, fontWeight: '500' }}>{data.time}</p>
                                        <p style={{ fontSize: 18, fontWeight: '500' }}>{data.date}</p>
                                    </div>
                                    <div className="textmsg" style={{ fontSize: 18, fontWeight: '400' }}>
                                        {data.gname}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>



            <div className="messageInput">
                <input type="text" placeholder="Enter your Text here...." style={{ width: '99%', height: '12vh', border: 0, outline: 0, borderRadius: 10, paddingLeft: 10 }} value={message} onChange={(e) => setMessage(e.target.value)} />
                <p style={{ position: 'absolute', bottom: 15, right: 20, borderWidth: 0, outline: 0, borderRadius: 20, cursor: 'pointer', fontSize: 25, color: '#ABABAB' }} onClick={hendleCreate}><IoMdSend /></p>

            </div>
        </div>
    );
}

export default Message;
