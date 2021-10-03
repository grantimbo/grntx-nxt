import Head from "next/head";
import Image from "next/image";
import SocialIcons from "../components/SocialIcons";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Head>
        <title>{"Grant Imbo — About"}</title>
      </Head>

      <Header />

      <section className="head">
        <img
          srcSet="/imgs/about-head-sm.png 560w,
				/imgs/about-head-lg.png 1066w"
          sizes="(max-width: 768px) 150px, 1066px"
          src="/imgs/about-head-lg.png"
          width={1066}
          height={574}
          alt="About"
        />
      </section>

      <section className="about">
        <article>
          <h2>{`Here's a bit of where I’ve been.`}</h2>

          <h3>{`2011-2012 : Graphic / Motion Designer`}</h3>
          <ul>
            <li>{`Creating graphic & motion designs.`}</li>
          </ul>

          <h3>
            {`2012-2014 : Graphic Designer, WordPress Developer and Front-end Developer`}
          </h3>
          <ul>
            <li>
              {`Designing graphic related stuff e.i logos, brochure, posters,
              banners, ebooks or any type of visual expressions.`}
            </li>
            <li>
              {`Developing WordPress themes - designing PSD mockups, converting
              them to HTML/CSS/JS then to WordPress themes.`}
            </li>
            <li>{`Occationally did some animations / explainer videos.`}</li>
          </ul>

          <h3>{`2014-2016 : Lead Graphic Designer, 3D Artist, Web Developer`}</h3>
          <ul>
            <li>{`Rendering high quality 3D products for Amazon listings.`}</li>
            <li>{`Responsible for creating web and graphic related designs.`}</li>
            <li>{`Occationally develop websites.`}</li>
          </ul>

          <h3>{`2016-2020 : Full Stack Developer, Designer`}</h3>
          <ul>
            <li>{`Building websites.`}</li>
            <li>{`Designing graphics for the web.`}</li>
          </ul>

          <p>
            {`I believe anything can be overcome through commitment and hard work.
            Always up for learning new things and never gets satisfied with an
            average output, always striving for something better and fresh.`}
          </p>

          <p>
            {`Have an idea you'd like to discuss?`} <br />
            {`Feel free to contact me at `}
            <span>grant.imbo@gmail.com</span>
          </p>

          <p>
            {`Or just want to be friends? Find me online on most digital platforms `}
            <span>@grantimbo</span> or <span>@grntx</span>{" "}
            {`or by clicking the
            links below.`}
          </p>
          <SocialIcons />
        </article>
      </section>

      <style jsx>
        {`
          section.head {
            text-align: center;
          }
          section.about {
            max-width: 620px;
            margin: 0 auto;
          }
          article {
            padding: 1rem;
          }
          h2 {
            margin-bottom: 1.5rem;
            color: var(--eggblue);
          }
          ul {
            padding-left: 2.2rem;
            margin-bottom: 1.2rem;
          }
          span {
            color: var(--eggblue);
          }
        `}
      </style>
    </>
  );
}
