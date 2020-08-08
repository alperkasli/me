import { createRef } from "react"
import { Vector3 } from "three"
import Me from './assets/me_captain.jpg'
import TechImg from './assets/tech_programming.jpeg'
import TeaImg from './assets/turkish_tea.jpg'
const state = {
  sections: 5,
  pages: 4,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Hey!",
      image: Me,
      aspect: 0.901,
      section: "about me",
      text: "I'm Alper. Passionate software engineer. The main area I focused on is front end(client side of web) technologies. I've always been interested in technology since from childhood. I can't stop thinking about what kind of system or algorithm is behind any smart device that I see. I love learning about the subject and working on challenging projects. I become very happy whenever I complete a project or solve a difficult algorithm, this feeling of happiness is very addictive to me."
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Technologies",
      image: TechImg,
      aspect: 1.8,
      section: "skills",
      text: "I've worked with a wide variety of programming languages. For web applications I use Javascript and its libraries. I have 2 years of JavaScript experience and its my favorite when it comes to web development. Despite so many bad comments about JavaScript, I like it a lot how useful and handy it can be.  When I need to work with embedded systems I use C++ to get best performance and when I am building prototypes or working on data related projects I use Python. C++ has been my first programming language and yet I haven't use it in web development. I have interest and ability to learn new programming languages."
    },
    {
      offset: 4,
      factor: 1.75,
      header: "Let's Drink Tea",
      image: TeaImg,
      aspect: 1.55,
      section: "contact me",
      text: "Feel free to say hi!\nI'm living in Dubai. You can contact me from social medias or you can send an e-mail to alperkasli@gmail.com"
    },
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 3.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
  ],
  top: createRef()
}

export default state
