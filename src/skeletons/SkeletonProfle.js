import React from 'react'
import Shimmer from './Shimmer';
import SkeletonElements from './SkeletonElements'

function SkeletonProfle({ theme }) {
    const themeClass = theme || 'light';
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-profile">
                <div>
                    <SkeletonElements type="avatar" />
                </div>
                <div>
                    <SkeletonElements type="title" />
                    <SkeletonElements type="text" />
                    <SkeletonElements type="text" />
                </div>
            </div>
            <Shimmer />
        </div>
    )
}

export default SkeletonProfle
