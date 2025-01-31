import PowerExperienceScrollingItem from '../PowerExperienceScrollingItem'
import './index.css'

const logoData = [
  { image: 'https://res.cloudinary.com/djifdyfkd/image/upload/v1737889878/6766cba00aae0d7555cd7632_Polymath_wnyveo.png', text: 'Polymath' },
  { image: 'https://res.cloudinary.com/djifdyfkd/image/upload/v1737889957/6766cba00aae0d7555cd7612_Luminous_l7cryo.png', text: 'Luminous' },
  { image: 'https://res.cloudinary.com/djifdyfkd/image/upload/v1737889981/6766cba00aae0d7555cd7636_Alt_2BShift_bla8up.png', text: 'Alt+Shift' },
  { image: 'https://res.cloudinary.com/djifdyfkd/image/upload/v1737890004/6766cba00aae0d7555cd7616_FeatherDev_tmxbc9.png', text: 'FeatherDev' },
  { image: 'https://res.cloudinary.com/djifdyfkd/image/upload/v1737890028/6766cba00aae0d7555cd7614_Lightbox_duhfix.png', text: 'Lightbox' },
  { image: 'https://res.cloudinary.com/djifdyfkd/image/upload/v1737889878/6766cba00aae0d7555cd7632_Polymath_wnyveo.png', text: 'Polymath' },
  { image: 'https://res.cloudinary.com/djifdyfkd/image/upload/v1737890050/6766cba00aae0d7555cd7613_Segment_votfcy.png', text: 'Segment' },
  { image: 'https://res.cloudinary.com/djifdyfkd/image/upload/v1737890067/6766cba00aae0d7555cd7617_Sisyphus_t4mcid.png', text: 'Sisyphus' }
];

const PoweringExperience = () =>(
  <div className="scrolling-container">
      <h2 className='powering-experience-heading'>Powering Experiance</h2>
      <div className="scrolling-content">
        {logoData.map((eachItem, index) => (
          <PowerExperienceScrollingItem key={index} eachItem= {eachItem} />
        ))}

        {logoData.map((eachItem, index) => (
          <PowerExperienceScrollingItem key={index} eachItem= {eachItem} />
        ))}
      </div>
    </div>
)

export default PoweringExperience