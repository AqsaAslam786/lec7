import ProfileCard from "./components/ProfileCard"
import profile_card from "./components/ProfileCard"
import TestCaed from "./components/TestCaed"

function App() {


  return (
    <>
    <div className="flex justify-center items-center">
<div className="flex justify-center items-center h-screen">
    
       
        <ProfileCard name="Aqsa Aslam" title="Web Developer" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"    />
        
      </div>
      <div className="flex justify-center items-center h-screen">
    
       
        <ProfileCard name="Talan Dias" title="UX Designer" pic="https://a.storyblok.com/f/191576/1176x882/f95162c213/profile_picture_hero_before.webp"    />
        
      </div>
    </div>
      
    </>
  )
}

export default App
