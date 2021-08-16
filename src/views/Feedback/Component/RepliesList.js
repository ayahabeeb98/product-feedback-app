import React from "react";

import SingleReplay from "./SingleReplay";

export default function RepliesList({replies, handleReply}) {
    return (
        <>
            {replies.map(replay => {
                return <SingleReplay key={replay.id} handleOnClick={handleReply} replayData={replay}/>
            })}
        </>
    )
}