import Intro from "../Aboutme/Intro"
import Projects from "../Aboutme/Projects"
import SkillSets from "../Aboutme/SkillSets"
import Blob from "../Animations/Blob"
import MouseTracker from "../Animations/MouseTracker"
import Scrolldown from "../Animations/Scrolldown"

const Aboutme = () => {

    return (
        <div className='aboutme-container'>
            <Blob />
            <MouseTracker />
            <Scrolldown />
            <Intro />
            <Projects />
            <SkillSets />
        </div>
    )
}

export default Aboutme