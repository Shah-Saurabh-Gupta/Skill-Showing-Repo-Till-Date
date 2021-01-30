import React from 'react'
import Shimmer from './Shimmer';
import SkeletonElements from './SkeletonElements'

function SkeletonArticles({theme}) {
    const themeClass = theme || 'light';
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
                <SkeletonElements type="title" />
                <SkeletonElements type="text" />
                <SkeletonElements type="text" />
                <SkeletonElements type="text" />
            </div>
            <Shimmer />
        </div>
    )
}

export default SkeletonArticles
