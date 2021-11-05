import Head from "next/head";
import SocialIcons from "../components/SocialIcons";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function About() {
  const dropIninitial = { opacity: 0, y: -20 },
    dropInanimate = { opacity: 1, y: 0 };
  return (
    <>
      <Head>
        <title>{"Grant Imbo — About"}</title>
      </Head>

      <Header />

      <section className="head">
        <motion.figure
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 0.4,
          }}
        >
          <img
            srcSet="/imgs/about-head-sm.png 560w,
				/imgs/about-head-lg.png 1066w"
            sizes="(max-width: 768px) 150px, 1066px"
            src="/imgs/about-head-lg.png"
            width={1066}
            height={574}
            alt="About"
          />
        </motion.figure>
      </section>

      <section className="about">
        <article>
          <motion.h2
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 0.1,
            }}
          >{`Here's a bit of where I’ve been.`}</motion.h2>

          <motion.h3
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 0.2,
            }}
          >{`2011-2012 : Graphic / Motion Designer`}</motion.h3>
          <motion.ul
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 0.3,
            }}
          >
            <li>{`Creating graphic & motion designs.`}</li>
          </motion.ul>

          <motion.h3
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 0.4,
            }}
          >
            {`2012-2014 : Graphic Designer, WordPress Developer and Front-end Developer`}
          </motion.h3>
          <motion.ul
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 0.5,
            }}
          >
            <li>
              {`Designing graphic related stuff e.i logos, brochure, posters,
              banners, ebooks or any type of visual expressions.`}
            </li>
            <li>
              {`Developing WordPress themes - designing PSD mockups, converting
              them to HTML/CSS/JS then to WordPress themes.`}
            </li>
            <li>{`Occationally did some animations / explainer videos.`}</li>
          </motion.ul>

          <motion.h3
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 0.6,
            }}
          >{`2014-2016 : Lead Graphic Designer, 3D Artist, Web Developer`}</motion.h3>
          <motion.ul
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 0.7,
            }}
          >
            <li>{`Rendering high quality 3D products for Amazon listings.`}</li>
            <li>{`Responsible for creating web and graphic related designs.`}</li>
            <li>{`Occationally develop websites.`}</li>
          </motion.ul>

          <motion.h3
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 0.8,
            }}
          >{`2016-2020 : Full Stack Developer, Designer`}</motion.h3>
          <motion.ul
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 0.9,
            }}
          >
            <li>{`Building websites.`}</li>
            <li>{`Designing graphics for the web.`}</li>
          </motion.ul>

          <motion.p
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 1,
            }}
          >
            {`I believe anything can be overcome through commitment and hard work.
            Always up for learning new things and never gets satisfied with an
            average output, always striving for something better and fresh.`}
          </motion.p>

          <motion.p
            animate={dropInanimate}
            initial={dropIninitial}
            transition={{
              delay: 1.1,
            }}
          >
            {`Have an idea you'd like to discuss?`} <br />
            {`Feel free to contact me at `}
            <span>grant.imbo@gmail.com</span>
          </motion.p>

          <p>
            {`Or just want to be friends? Find me online on most digital platforms `}
            <span>@grantimbo</span> or <span>@grntx</span>{" "}
            {`or by clicking the
            links below.`}
          </p>
          <SocialIcons />
        </article>
      </section>

      <style jsx>{``}</style>
    </>
  );
}
