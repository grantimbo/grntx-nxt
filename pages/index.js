import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Grant Imbo — Front-end Dev // 3D Artist"}</title>
      </Head>

      <Header />

      <section className="contents">
        <figure>
          <img
            srcSet="/imgs/home-bg-sm.png 640w,
                    /imgs/home-bg-lg.png 1104w"
            sizes="(max-width: 768px) 640px, 1104px"
            src="/imgs/home-bg-lg.png"
            width={1104}
            height={930}
            alt="Creator Thinker"
          />
        </figure>
        <section>
          <article>
            <h2>Hi. I'm Grant.</h2>
            <p>
              {
                "Developer by day, artist by night.. Curently working as a full-time Front-End Developer and in spare time, rendering "
              }
              <a href="https://youtube.com/grantimbo" target="_blank">
                3D cars
              </a>
              {" for fun."}
            </p>
          </article>
        </section>
      </section>

      <style jsx>{`
        figure {
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
        }
        figure img {
          background: #090e20;
        }
        .contents article {
          max-width: 450px;
          text-align: center;
          padding: 1.3rem;
          margin: 0 auto;
        }
        p {
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .contents {
            display: grid;
            grid-template-columns: 1.6fr 1fr;
            max-width: 1600px;
            margin: 0 auto;
          }
          .contents section {
            display: flex;
            align-items: center;
          }
          .contents article {
            text-align: left;
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}
