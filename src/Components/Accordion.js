import { useState } from 'react'

const Accordion = ({heading, content}) => {
    const[showAccordionText, setShowAccordionText] =useState(false)
  return (
    <>
    <li className="accordion-item">
      <div className="accordion-toggle" onClick={() => setShowAccordionText(!showAccordionText)}>
        <h3>{heading}</h3><span>{showAccordionText ? "-" : "+"}</span>
      </div>
      {showAccordionText && <div className="accordion-content">{content}</div>}
    </li>
    </>
  )
}

export default Accordion