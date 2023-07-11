import React, { useState } from "react";
import "./Modal.css";

export default function Test() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Open
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <p>create New Notes Group</p>
                        <div style={{display:'flex'}}>
                            <p style={{ fontSize: 18 }}>Group Name</p>
                            <input type="text" placeholder="Enter Group Name" />
                        </div>
                        <div>
                            <p style={{ fontSize: 18 }}>choose Color</p>
                        </div>
                        <p style={{right:0}}>Create</p>
                    </div>
                </div>
            )}
        </>
    );
}