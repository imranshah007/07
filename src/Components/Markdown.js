import React from 'react'
import { useState } from 'react'; 
import ReactMarkdown from 'react-markdown'

const Markdown = () => {
const [markDown, setMarkDown]=useState('# Markdown Preview')
  return (
    <><h2 className='nav'>MarkDown Editor</h2>
    <div className='center-div'>
        <textarea className='left-side' value={markDown} onChange={(e)=>setMarkDown(e.target.value)}></textarea>
        <div className='right-side'><ReactMarkdown>{markDown}</ReactMarkdown> </div>
    </div>
    </>
  )
}

export default Markdown