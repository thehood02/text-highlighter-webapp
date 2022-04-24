import React from 'react'

const TextHighlightsBox = () => {
  return (
    <div class="text-highlights-box">
        <h3>Highlights</h3>
        <div className="border"></div>
        {/* add condition here */}
        {/* to show "no highlights found" or the table */}
        <div class="no-highlights">No highlights found</div>
    </div>
  )
}

export default TextHighlightsBox