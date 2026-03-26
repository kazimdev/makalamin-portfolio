const About = () => {
  return (
    <section className="about" id="about">
      <div className="row justify-center items-center gap-6">
        <div className="col-8">
          <h1>About Me</h1>
          <p>
            I’m a Full Stack Web Developer who’s spent the last 9+ years helping
            businesses turn ideas into high-performing websites and web
            applications.
          </p>
          <br />
          <p>
            My focus is simple: build solutions that don’t just look good, but
            actually help my clients grow. Whether it’s a custom WordPress site,
            a scalable Laravel application, or a modern React-based interface —
            every project is designed around performance, usability, and real
            business results.
          </p>
          <br />
          <p>
            Over the years, I’ve worked with clients across different
            industries, solving challenges, improving user experience, and
            creating platforms that turn visitors into customers.
          </p>
          <br />
          <p>
            I believe in clear communication, attention to detail, and building
            long-term relationships — not just delivering a one-time project.
          </p>
          <p>
            If you have an idea or project in mind, I’d love to hear about it
            and help you make it a success.
          </p>
          <a href="#contact" className="cta-button button-primary mt-3 mb-3">
            Let's Talk
          </a>
        </div>
        <div className="col-4">
          <img
            src="images/mak-alamin-web-developer-wordpress-expert.jpg"
            alt="mak-alamin-web-developer-php-wordpress-laravel-expert"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
