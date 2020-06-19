import Layout from "./../components/Layout";
import MyHead from "./../components/MyHead";

function About() {
  return (
    <div>
      <MyHead description={"legal notice for rike.dev"} title={"legal notice"} />
      <Layout>
        <>
          <span className="title">
            <h1>about</h1>
            <p>legal notice</p>

          </span>
          <section>
              Contact
              <br />
              <br />
              Ulrike Exner
              <br />
              E-Mail: <a href="mailto:hello@rike.dev">hello(*at*)rike.dev</a>
              <br />
              Internet address:{" "}
              <a href="https://rike.dev" target="_blank">
                rike.dev
              </a>
              <br />
              <h3>Graphics and Image Sources</h3>
              https://www.freepik.com/free-photos-vectors/background
              <br />
              <br />
              <h3>Disclaimer</h3>
              Accountability for content
              <br />
              The contents of our pages have been created with the utmost care.
              However, we cannot guarantee the contents' accuracy, completeness
              or topicality. According to statutory provisions, we are
              furthermore responsible for our own content on these web pages. In
              this matter, please note that we are not obliged to monitor the
              transmitted or saved information of third parties, or investigate
              circumstances pointing to illegal activity. Our obligations to
              remove or block the use of information under generally applicable
              laws remain unaffected by this as per §§ 8 to 10 of the Telemedia
              Act (TMG).
              <br />
              <br />
              Accountability for links
              <br />
              Responsibility for the content of external links (to web pages of
              third parties) lies solely with the operators of the linked pages.
              No violations were evident to us at the time of linking. Should
              any legal infringement become known to us, we will remove the
              respective link immediately.
              <br />
              <br />
              Copyright
              <br /> Our web pages and their contents are subject to German
              copyright law. Unless expressly permitted by law, every form of
              utilizing, reproducing or processing works subject to copyright
              protection on our web pages requires the prior consent of the
              respective owner of the rights. Individual reproductions of a work
              are only allowed for private use. The materials from these pages
              are copyrighted and any unauthorized use may violate copyright
              laws.
          </section>
        </>
      </Layout>
      <style jsx>{``}</style>
    </div>
  );
}

export default About;
