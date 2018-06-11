import React, { Component } from 'react';
import SlideShow from 'react-image-show';
import Fifa2014Champions from './images/fifa2014champions.jpg';
import Fifa2010Champions from './images/fifa2010champions.jpg';
import Fifataketheshot from './images/fifataketheshot.jpg';
import Soccerfans from './images/soccerfans.png';

let picturesArray = [
  Fifa2014Champions,
  Fifa2010Champions,
  Fifataketheshot,
  Soccerfans
]

class FifaCarousel extends Component {
  render() {
    return (
      <SlideShow
        images={picturesArray}
        width="920px"
        imagesWidth="800px"
        imagesHeight="450px"
        imagesHeightMobile="56vw"
        thumbnailsWidth="920px"
        thumbnailsHeight="12vw"
        indicators thumbnails fixedImagesHeight
      />
    );
  }

}




// class FifaCarousel extends Component {
//
//   render() {
//     return(
//       <div className='Fifacarousel'>
//         <div className='FifaDivBox'>
//           {/* <img className='TeamCarousel' src= '{ pictures[0] }' alt='soccer' /> */}
//           <img className='TeamCarousel' src={ Fifa2014Champions } alt='soccer champions'></img>
//           <img className='TeamCarousel' src={ Fifa2010Champions } alt='soccer champions'></img>
//           <img className='TeamCarousel' src={ Fifataketheshot } alt='soccer champions'></img>
//           <img className='TeamCarousel' src={ Soccerfans } alt='soccer champions'></img>
//         </div>
//       </div>
//     )
//   }
// }

export default FifaCarousel;
