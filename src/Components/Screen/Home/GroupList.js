import React, { useEffect, useState } from "react";
import '../../css/GroupList.css'

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
function GroupList(props) {
    const [dan, setDan] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("GroupList")) {
            const storedList = JSON.parse(localStorage.getItem("GroupList"));
            setDan(storedList);
        }
    }, [])
    return (
        <>
            {
                dan.map((data, inde) => {
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
