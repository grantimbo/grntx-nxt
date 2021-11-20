import Head from "next/head";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Grant Imbo — Front-end Dev // 3D Artist"}</title>
      </Head>

      <Header />

      <section className="home">
        <motion.figure
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 0.4,
          }}
        >
          <img
            srcSet="/imgs/home-bg-sm.png 640w,
                    /imgs/home-bg-lg.png 1104w"
            sizes="(max-width: 768px) 640px, 1104px"
            src="/imgs/home-bg-lg.png"
            width={1104}
            height={930}
            alt="Creator Thinker"
          />
        </motion.figure>
        <section>
          <article>
            <motion.h2
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.2 }}
            >{`Hi. I'm Grant.`}</motion.h2>
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3 }}
            >
              {
                "Developer by day, artist by night.. Curently working as a full-time Front-End Developer and in spare time, rendering "
              }
              <a
                href="https://youtube.com/grantimbo"
                target="_blank"
                rel="noreferrer"
              >
                3D cars
              </a>
              {" for fun."}
            </motion.p>
          </article>
        </section>
      </section>
    </>
  );
}
