import { useState } from 'react'

const Accordion = ({ heading, content }) => {
  const [showAccordionText, setShowAccordionText] = useState(false)
  return (
    <>
      <li className="accordion-item ">
        <div className="accordion-toggle border-t-2 py-2 flex justify-between" onClick={() => setShowAccordionText(!showAccordionText)}>
          <h1 className='ml-2 accordion-title'>{heading}</h1><span className='mr-2'>{showAccordionText ?

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          }</span>
        </div>
        {showAccordionText && <div className="accordion-content" id={heading}>{content}</div>}
      </li>
    </>
  )
}

export default Accordion