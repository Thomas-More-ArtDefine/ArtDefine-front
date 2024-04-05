import React from 'react';

export default function ArtworkCard({src, title, creator}: {src:string, title:string, creator:string}) {
    return(
        <div className='feed-entry'>
                    <img src={src} alt="" />
                    <div className='work-title'>{title}</div>
                    <div className='work-creator'>{creator}</div>
        </div>
    )
}