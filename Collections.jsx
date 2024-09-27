import React from 'react'

const Collections = (props) => {
  const {title,image1,image2,image3,image4,image5,image6}=props.gentsfashion
  const{title1,image7,image8,image9,image10,image11,image12}=props.ladiesfashion
  return (
    <div className="collectionsection">
      <h2>
        {title} 
      </h2>
      <div className="menimages">
        <img src={image1} alt={title} />
        <img src={image2} alt={title} />
        <img src={image3} alt={title} />
        <img src={image4} alt={title} />
        <img src={image5} alt={title} />
        <img src={image6} alt={title} />
      </div>
      <div>
          <h2>
            {title1}
          </h2>
          <div className="hi">
          <img  src   ="assests/LadiesBanner.gif" alt="" />
          </div>
          
        <div className='womenimages'>
        <img src={image7} alt={title1} />
        <img src={image8} alt={title1} />
        <img src={image9} alt={title1} />
        <img src={image10} alt={title1} />
        <img src={image11} alt={title1} />
        <img src={image12} alt={title1} />
        </div>
        </div>
    </div>
  )
}

export default Collections