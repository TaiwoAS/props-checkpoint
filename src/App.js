import Profile from "./profile/Profile";
import myPhoto from "./photo.jpg";
import ProfilePhoto from "./photo/ProfilePhoto";
import './App.css';

export default function App() {
  const profile = {
    fullName : "Taiwo Surakatu",
    profession : "Architect",
    bio : " Creative and Innovative Architect with technical knowledge and experience in Schematic design, Design development, Construction documentation and Building Construction co-ordination. An accredited EDGE Expert with knowledge of Green Building design and certification using EDGE (Excellence in Design for Greater Efficiencies) Standard.  A Well- grounded professional with Reasoning skills, Effective communication, Interpersonal skills and capability to manage projects from inception to completion. A conscientious and hardworking individual, detail oriented and quick to pickup new skills. I am confident to take up responsibilities both as a team player and a leader, capable to lead the technological design and management of all project types from small scale to large Commercial, Industrial, Residential and Public projects"
  }
  return (
    <div>
       <ProfilePhoto><img src={myPhoto} alt='myProfilePhoto'/></ProfilePhoto>
       <Profile name={profile.fullName} work={profile.profession} description={profile.bio}/>
    </div>
  );
}


