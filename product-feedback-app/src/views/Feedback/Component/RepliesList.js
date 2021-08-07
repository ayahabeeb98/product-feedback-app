import React from "react";

import SingleReplay from "./SingleReplay";

export default function RepliesList({replies}) {
    return (
        <>
            {replies.map(replay => {
                return <SingleReplay key={replay.id} replayData={replay}/>
            })}
        </>
    )
}