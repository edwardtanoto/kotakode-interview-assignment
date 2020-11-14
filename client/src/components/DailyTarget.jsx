import React from 'react'

export const DailyTarget = ({ dailyTarget, setDailyTarget }) => {
    return (
        <div>
            Set your daily target
            <br />
            {/* No negative validation - DONE */}
            <input value={dailyTarget} min={1} onKeyDown={(e) => e.preventDefault()} style={{ width: "200px", borderRadius: '10px', background: 'transparent' }} className="daily-form pl-3" type="number" placeholder="5" onChange={(e) => setDailyTarget(e.target.value)} />

        </div>
    )
}
