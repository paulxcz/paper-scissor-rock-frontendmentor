import React from 'react'
import '../styles/RulesPinPon/Rules.css'

export const Rules = ({ setrules }) => {
    return (
        <div className="rules">
            <button 
                onClick = { (e) =>{
                    e.preventDefault();
                    setrules(true)
                } }
            >
                RULES
            </button>
        </div>
    )
}
