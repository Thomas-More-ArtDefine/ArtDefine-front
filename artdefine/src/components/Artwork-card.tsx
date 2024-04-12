import React from 'react';
import { Link } from 'react-router-dom';

export default function ArtworkCard({src, title, creator, postid}: {src:string, title:string, creator:string, postid:string}) {
    return(
        <Link to={'/post/' + {postid}.postid}>
            <div className='feed-entry'>
                <img src={src} alt="" />
                <div className='work-title'>{title}</div>
                <div className='work-creator'>{creator}</div>
            </div>
        </Link>
    )
}