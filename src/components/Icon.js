import { SocialIcon } from "react-social-icons";

const Icon = () => (
  //  icons on a vertical line using react-social-icons
  <div className="mediaIcon" style={{ display: 'flex', flexDirection: 'column' }}>
    <SocialIcon  url="https://facebook.com" style={{ display: 'inline-block', margin: '0.7em', width: 34, height: 34, }} bgColor="rgb(59, 89, 152" />
    <SocialIcon url="https://instagram.com" style={{ display: 'inline-block', margin: '0.7em', width: 34, height: 34 }} bgColor="rgb(233, 68, 117)" />
    <SocialIcon url="https://github.com/movi1.com" style={{ display: 'inline-block', margin: '0.7em', width: 34, height: 34 }} bgColor="rgb(36, 41, 46)" />
    <SocialIcon url="https://www.linkedin.com/in/moira-corradini/" style={{ display: 'inline-block', margin: '0.7em', width: 34, height: 34 }} bgColor="rgb(0, 127, 177)" />

  </div>

);


export default Icon;