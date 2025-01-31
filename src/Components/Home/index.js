
import Header from '../Header'
import Bannersection from '../Bannersection'
import PoweringExperience from '../PoweringExperience'
import WorkFlowAi from '../WorkFlowAi'
import Features from '../Features'
import SaaSsolution from '../SaaSsolution'
import ExpenseTracker from '../ExpenseTracker'
import QuickTour from '../QuickTour'
import BusinessEmpowermentCards from '../BusinessEmpowermentCards'
import UseCases from '../UseCases'
import Testimonials from '../Testimonials'
import FeaturedBlog from '../FeaturedBlog'
import Faq from '../Faq'
import Freetrial from '../Freetrial'
import FooterSection from '../FooterSection'
import './index.css'

const Home =() =>(
  <div className="main-conatiner">
    <div className="bg-container">
      <Header/>
      <Bannersection/>
    </div>
    <PoweringExperience/>
    <WorkFlowAi/>
    <Features/>
    <SaaSsolution/>
    <ExpenseTracker/>
    <QuickTour/>
    <BusinessEmpowermentCards/>
    <UseCases/>
    <Testimonials />
    <FeaturedBlog/>
    <Faq />
    <Freetrial />
    <FooterSection/>
  </div>
)

export default Home