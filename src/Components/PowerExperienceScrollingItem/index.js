import './index.css';

const PowerExperienceScrollingItem = props => {
  const{eachItem} = props
  const {image} = eachItem
  return (

      <img src={image} alt='image-failure' className="scrolling-logo" />
  );
};

export default PowerExperienceScrollingItem;