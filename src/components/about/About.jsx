import "./about.css"
import Me from "../../img/snookonhead.png"


const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Me}
                    alt=""
                    className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1>About Me</h1>
                <p className="a-sub">With experience from UCF's coding bootcamp and a physics degree 
                from USF I have been able to utilize my ability to learn and think analytically on any 
                problem I come accross.</p>
                <p className="a-desc">Coding is a life long learning journey, with a lot of catching up to do I have been able to learn daily and use the
                 skills I have honed on projects for customers and for the company I work at.</p>
                 <div className="a-award">
                     <img src={Me} alt="" className="a-award-img" />
                     <div className="a-award-texts">
                         <h4 className="a-award-title">Simons' Greatest Designer Award</h4>
                         <p className="a-award-desc">Was awarded the best designer in the 2022 Simon Maybe Design competition</p>
                     </div>
                 </div>
            </div>
        </div>

    )
}

export default About