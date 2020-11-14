import React from 'react'

export const Level = ({ level, role }) => {
    return (
        <div>
            Level: {`${level}`} <br />
            Role: {`${role[level]}`}
        </div>
    )
}
