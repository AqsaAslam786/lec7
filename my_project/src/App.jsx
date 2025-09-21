import ProfileCard from "./components/ProfileCard"

function App() {

const user1={
  name:"Aqsa Aslam",
  title:"Web Developer",
  pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s",


};
const user2={
  name:"Talan Daop",
  title:"UX Designer",
  pic:"https://a.storyblok.com/f/191576/1176x882/f95162c213/profile_picture_hero_before.webp",


};
const user3={
  name:"Hadia Ali",
  title:"UI Designer",
  pic:"https://a.storyblok.com/f/191576/1176x882/f95162c213/profile_picture_hero_before.webp",


};

  return (
    <>
    
<div className="flex flex-col md:flex-row  lg:flex-col h-screen gap-2">
        <ProfileCard user={user1} title="Heading 1"  />
      <ProfileCard user={user2} title="Heading 2"  />
      <ProfileCard user={user3} title="Heading 3"  />
      </div>
      
      
    </>
  )
}

export default App
