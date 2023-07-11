import React, { useEffect, useState } from "react";
import '../../css/Home.css'
import GroupList from "./GroupList";
import '../../css/Modal.css'
import Message from "../Message/Index";
import img from '../../assest/homepage.png'
import { GrAdd } from 'react-icons/gr'

function Home() {
    const [modal, setModal] = useState(false);
    const [messName, setMessName] = useState('');
    const [messColorCode, setMessColorCode] = useState('');
    const [messid, setMessID] = useState('');
    const [Gname, setGName] = useState('');
    const [colorCode, setColorCode] = useState('');

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const getData = (data) => {
        console.log("For Message box" + JSON.stringify(data));
        setMessName(data.hname)
        setMessColorCode(data.hColor)
        setMessID(data.hid)

    }

    const [tasks, setTasks] = useState([]);

    // const showTime = date.getHours()
    //     + ':' + date.getMinutes()
    //     + ":" + date.getSeconds();

    const hendleCreate = (e) => {
        if (Gname) {
            const newTask = { id: new Date().getTime().toString(), gname: Gname, colorCode: colorCode };
            setTasks([...tasks, newTask]);
            localStorage.setItem("GroupList", JSON.stringify([...tasks, newTask]));
            setGName('');
            setModal(false);
            window.location.reload();
        }
    };


    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {

        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

        console.log(screenSize)
        if (localStorage.getItem("GroupList")) {
            const storedList = JSON.parse(localStorage.getItem("GroupList"));
            setTasks(storedList);
        }
        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    return (
        <>
            {screenSize.width < 550 ?

                <div className="Group1">
                    {!messName ?
                        <>
                            <p style={{ fontSize: 31, fontWeight: '500', marginTop: 10 }}>Pocket Note</p>
                            <div className="createNote1" onClick={toggleModal}>
                                <p><GrAdd /> Create Notes Group</p>
                            </div>
                            <div className="dan1">
                                <GroupList onClick={getData} />
                            </div>
                        </>
                        : <div className="message1"> <Message name={messName} colorCode={messColorCode} id={messid} size={screenSize.width} /></div>}

                </div>

                : <div className="HomeComp">
                    <div className="Group">
                        <p style={{ fontSize: 31, fontWeight: '500' }}>Pocket Note</p>
                        <div className="createNote" onClick={toggleModal}>
                            <p><span style={{ fontSize: 18, color: 'white', marginRight: 5, marginBottom: 10 }}>+</span>Create Notes Group</p>
                        </div>
                        <div className="dan">
                            <GroupList onClick={getData} />
                        </div>
                    </div>
                    <div className="message">
                        {messName ?
                            <Message name={messName} colorCode={messColorCode} id={messid} /> :
                            <div className="parentRightHomeComp">
                                <div className="RightHomeComp">
                                    <img src={img} />
                                    <p style={{ fontSize: 30, fontWeight: '500' }}>Pocket Notes</p>
                                    <p style={{ fontSize: 20, fontWeight: '400' }}>Send and Recive Message without keeping your Phone online</p>
                                    <p style={{ marginBottom: -200, fontSize: 20, fontWeight: '400' }}>Use Pocket Note on Up to 4 link devices and 1 mobile phone</p>
                                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50%' }}>End-to-end encrypted</p>
                                </div>
                            </div>
                        }
                    </div>
                </div >}
            {
                modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <p style={{ fontSize: 20, fontWeight: '500', marginBottom: 5 }}>Create New Notes Group</p>
                            <div style={{ display: 'flex' }}>
                                <p style={{ fontSize: 18, marginRight: 10 }}>Group Name</p>
                                <input type="text" placeholder="Enter Group Name" style={{ outline: 'none', borderWidth: 2, borderColor: '#CCCCCC', padding: 10, borderRadius: 10, width: 200 }} value={Gname} onChange={(e) => setGName(e.target.value)} />
                            </div>
                            <div style={{ display: 'flex', marginTop: 10 }}>
                                <p style={{ fontSize: 18, marginBottom: 40 }}>choose Color</p>
                                <div style={{ display: 'flex', marginLeft: 10 }}>
                                    <div style={{ backgroundColor: '#B38BFA', width: 25, height: 25, borderRadius: 15, marginLeft: 5, cursor: 'pointer' }} onClick={() => { setColorCode('#B38BFA') }}></div>
                                    <div style={{ backgroundColor: '#FF79F2', width: 25, height: 25, borderRadius: 15, marginLeft: 5, cursor: 'pointer' }} onClick={() => { setColorCode('#FF79F2') }}></div>
                                    <div style={{ backgroundColor: '#43E6FC', width: 25, height: 25, borderRadius: 15, marginLeft: 5, cursor: 'pointer' }} onClick={() => { setColorCode('#43E6FC') }}></div>
                                    <div style={{ backgroundColor: '#F19576', width: 25, height: 25, borderRadius: 15, marginLeft: 5, cursor: 'pointer' }} onClick={() => { setColorCode('#F19576') }}></div>
                                    <div style={{ backgroundColor: '#0047FF', width: 25, height: 25, borderRadius: 15, marginLeft: 5, cursor: 'pointer' }} onClick={() => { setColorCode('#0047FF') }}></div>
                                    <div style={{ backgroundColor: '#6691FF', width: 25, height: 25, borderRadius: 15, marginLeft: 5, cursor: 'pointer' }} onClick={() => { setColorCode('#6691FF') }}></div>
                                </div>
                            </div>
                            <p style={{ marginTop: 10, right: 10, bottom: 10, position: 'absolute', backgroundColor: 'black', color: 'white', paddingLeft: 20, paddingRight: 20, paddingTop: 5, paddingBottom: 5, borderRadius: 10, cursor: 'pointer' }} onClick={hendleCreate}>Create</p>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Home;
