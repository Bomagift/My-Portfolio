import "../Styles/AboutMe.css";
const AboutMe = () => {
  return (
    <section className="about-me">
      
      <h2 className="about-me-title">A little bit about myself</h2>
      <div className="about-me-content">
    
        <img
          src="images/image22.jpg"
          alt="Boma Gift Obumanu"
          className="about-me-image"
        />{" "}
        <div className="about-me-text">
          
          <p>
            I'm Boma Gift Obomanu, a creative and dynamic frontend developer
            with a love for <strong>React, JavaScript, CSS, and HTML</strong>.
            My mission? To craft stunning, user-friendly websites that make the
            internet a better place, one pixel at a time.
          </p>
          <p>
            But hey, there's more to me than just code. When I'm not diving deep
            into the latest tech trends, you can catch me singing my heart out.
            Whether it's in a cozy corner at home or out at a karaoke night,
            singing is my way of expressing joy.
          </p>
          <p>
            Dancing is another one of my passions – there's nothing quite like
            moving to the beat and letting the music take over. And when I need
            to unwind, you'll find me curled up with a good book, exploring
            fantastical worlds and intriguing narratives.
          </p>
          <p>
            Hiking is my ultimate escape. There's something magical about
            hitting the trails, breathing in the fresh air, and soaking in the
            beauty of nature. It's my way of recharging and finding inspiration
            for my next big project.
          </p>
          <p>
            Let's <strong>connect</strong> and create something extraordinary
            together!
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
