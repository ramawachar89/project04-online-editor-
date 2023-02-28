import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './share.css'
const Share = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };
    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src="data:image/png;base64,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"
                    alt="code-sync-logo"
                />
                <h4 className="mainLabel">Paste invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input
                      style={{width:"99%",backgroundColor:"black"}}
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                     style={{width:"99%",backgroundColor:"black"}}
                        type="text"
                        className="inputBox"
                        placeholder="USERNAME"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Join
                    </button>
                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a
                            onClick={createNewRoom}
                            href=""
                            className="createNewBtn"
                        >
                            new room
                        </a>
                    </span>
                </div>
            </div>
          
        </div>
    );
};

export default Share;