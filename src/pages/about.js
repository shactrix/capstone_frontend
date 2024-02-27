import '../styles/about.css';
import Button from '../components/button'

const About = (props) => {
    return (
    <div className="about">
        <div className='about-content'>
            <div className="about-text">
                <h2>Welcome to RV WORLD!</h2>
                
                <h4>The Fastest Growing Community of Enthusiasts and nomads</h4>

                <p>RV WORLD is designed to unite those with a keen interest with their dream rv.</p>

                <h3>Our Story</h3>

                <p>rv world ...</p>

                <h3>Our Mission</h3>

                <p>At rvworld, our goal is ...</p>
            
                <Button to={`/`}  label="Home" className='button' />
            </div>
        </div>
    </div>
    )
}

export default About;