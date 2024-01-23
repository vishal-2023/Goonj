import './App.css';
import HomePage from './pages/HomePage.js';
import { Route,Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage.js';
import KnowingPage from './pages/aboutus/KnowingPage.js';
import GovernPage from './pages/aboutus/GovernPage.js';
import InitiativePage from '././pages/aboutus/InitiativePage.js'
import AnnualPage from './pages/aboutus/AnnualPage.js';
import ChapterPage from './pages/aboutus/ChapterPage.js';
import RecogitionPage from './pages/aboutus/RecogitionPage.js';
import StoryChange from './pages/aboutus/StoryChange.js';
import FqPage from './pages/aboutus/FqPage.js';
import Water from './pages/Impact/Water.js';
import Dummy from './pages/Impact/Dummy.js';
import Volunteer from './pages/getInvolved/Volunteer.js';
import Internship from './pages/getInvolved/Internship.js';
import Partner from './pages/getInvolved/Partner.js';
import Fellowship from './pages/getInvolved/Fellowship.js';
import Baithak from './pages/getInvolved/Baithak.js';
import Carrer from './pages/getInvolved/Carrer.js';
import Recycle from './pages/getInvolved/Recycle.js';
import Joy from './pages/getInvolved/Joy.js';
import Zindagi from './pages/getInvolved/Zindagi.js';
import Menstrual from './pages/update/Menstrual.js';
import Chaupal from './pages/update/Chaupal.js';
import  DignityPage  from './pages/update/Dignity.js';
import Junoon from './pages/update/Junoon.js';
import Gaard from './pages/update/Gaard.js';
import Media from './pages/update/Media.js';
import Contribute from './pages/update/Contribute.js';
import Donate from './pages/update/Donate.js';
import Collection from './pages/update/Collection.js';
import ComponentA from './components/ComponentA.js';
import Rahat from './pages/Impact/Rahat.js';

function App() {
  return (
    <div className="w-11/13 m-0 p-0 overflow-x-hidden relative">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/our-offices/' element={<ContactPage/>}> </Route>
        <Route path='/knowing-goonj/' element={<KnowingPage/>}> </Route>
        <Route path='/governing-body/' element={<GovernPage/>}> </Route>
        <Route path='/our-initiatives/' element={<InitiativePage/>}></Route>
        <Route path='/annual-reports/' element={<AnnualPage/>}></Route>
        <Route path='/chapter-reports/' element={<ChapterPage/>}></Route>
        <Route path='/milestones/' element={<RecogitionPage/>}></Route>
        <Route path='/100-stories-of-change/' element={<StoryChange/>}></Route>
        <Route path='/faq/' element={<FqPage/>}></Route>
        <Route path='/water/' element={<Water/>}></Route>
        <Route path='/dummy/:id' element={<Dummy/>}></Route>
        <Route path='/support-covid-19-affected/' element={<Rahat/>}></Route>
        <Route path='/volunteer/' element={<Volunteer/>}></Route>
        <Route path='/internship/' element={<Internship/>}></Route>
        <Route path='/partner-with-us/' element={<Partner/>} />
        <Route path='/goonj-fellowship/' element={<Fellowship/>}></Route>
        <Route path='/baithak/' element={<Baithak/>}></Route>
        <Route path='/career/' element={<Carrer/>} />
        <Route path='/khushiyon-ka-recycle/' element={<Recycle/>} />
        <Route path='/joy-of-giving-2023/' element={<Joy/>} />
        <Route path='/odz-2023/' element={<Zindagi/>} />
        <Route path='/mh-day-2023/' element={<Menstrual/>} />
        <Route path='/chaupal2023/' element={<Chaupal/>} />
        <Route path='/dignitydiaries/' element={<DignityPage/>} />
        <Route path='/junoon-awards/' element={<Junoon/>} />
        <Route path='/garrd/' element={<Gaard/>} />
        <Route path='/goonj-in-media/' element={<Media/>} />
        <Route path='/dropping-centres/' element={<Contribute/>} />
        <Route path='/collection-camps/' element={<Collection/>} />
        <Route path='/donate/' element={<Donate/>} />
        <Route path="/component/:id" element={<ComponentA/>} />
      </Routes>
      
    </div>

  );
}

export default App;
