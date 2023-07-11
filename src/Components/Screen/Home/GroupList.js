import React, { useEffect, useState } from "react";
import '../../css/GroupList.css'

function GroupList(props) {
    const [dan, setDan] = useState([]);

    useEffect(() => {
        // fetching record from thhe localstorage
        if (localStorage.getItem("GroupList")) {
            const storedList = JSON.parse(localStorage.getItem("GroupList"));
            setDan(storedList);
        }
    }, [])
    return (
        <>
            {
                dan.map((data, index) => {
                    return (
                        <div className="GroupList" onClick={(e) => { props.onClick({ hColor: data.colorCode, hname: data.gname, hid: data.id }) }}>
                            <div className="Substr" style={{ backgroundColor: data.colorCode }}>
                                {data.gname[0]}{data.gname[1]}
                            </div>
                            <div className="Gname">
                                {data.gname}
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default GroupList;
