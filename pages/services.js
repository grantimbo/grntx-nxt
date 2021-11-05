import Header from "../components/Header";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Services() {
  const fadeIninitial = { opacity: 0, scale: 0.95 };
  const fadeInanimate = { opacity: 1, scale: 1 };
  const dropIninitial = { opacity: 0, y: -20 };
  const dropInanimate = { opacity: 1, y: 0 };

  return (
    <>
      <Head>
        <title>{"Grant Imbo — Services"}</title>
      </Head>

      <Header />

      <section className="head">
        <motion.img
          animate={fadeInanimate}
          initial={fadeIninitial}
          transition={{
            duration: 0.4,
          }}
          srcSet="/imgs/services-head-sm.png 560w,
				/imgs/services-head-lg.png 1066w"
          sizes="(max-width: 768px) 560px, 1066px"
          src="/imgs/services-head-lg.png"
          width={1066}
          height={574}
          alt="Email Marketing"
        />
      </section>
      <section className="service">
        <article>
          <motion.div
            className="flex img"
            animate={fadeInanimate}
            initial={fadeIninitial}
            transition={{
              duration: 0.4,
              delay: 0.3,
            }}
          >
            <img
              srcSet="/imgs/services/graphic-design-sm.png 150w,
						/imgs/services/graphic-design-lg.png 323w"
              sizes="(max-width: 768px) 150px, 323px"
              src="/imgs/services/graphic-design-lg.png"
              width={323}
              height={323}
              alt="Graphic Design"
            />
          </motion.div>
          <div className="flex">
            <div>
              <motion.h3
                animate={dropInanimate}
                initial={dropIninitial}
                transition={{
                  delay: 0.3,
                }}
              >
                Graphic Design
              </motion.h3>
              <motion.p
                animate={dropInanimate}
                initial={dropIninitial}
                transition={{
                  delay: 0.4,
                }}
              >
                Product labels, posters, banners, logos, brochures, ebooks or
                any visual expressions.
              </motion.p>
            </div>
          </div>
        </article>

        <article>
          <div className="flex">
            <div>
              <motion.h3
                animate={dropInanimate}
                initial={dropIninitial}
                transition={{
                  delay: 0.6,
                }}
              >
                Website & Apps
              </motion.h3>
              <motion.p
                animate={dropInanimate}
                initial={dropIninitial}
                transition={{
                  delay: 0.7,
                }}
              >
                API driven websites and apps using the latest technologies and
                frameworks.
              </motion.p>
            </div>
          </div>
          <motion.div
            className="flex img"
            animate={fadeInanimate}
            initial={fadeIninitial}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
          >
            <img
              srcSet="/imgs/services/website-apps-sm.png 150w,
						/imgs/services/website-apps-lg.png 323w"
              sizes="(max-width: 768px) 150px, 323px"
              src="/imgs/services/website-apps-lg.png"
              width={323}
              height={323}
              alt="Websites and Apps"
            />
          </motion.div>
        </article>

        <article>
          <motion.div
            className="flex img"
            animate={fadeInanimate}
            initial={fadeIninitial}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
          >
            <img
              srcSet="/imgs/services/product-renders-sm.png 150w,
						/imgs/services/product-renders-lg.png 323w"
              sizes="(max-width: 768px) 150px, 323px"
              src="/imgs/services/product-renders-lg.png"
              width={323}
              height={323}
              alt="Product Renders"
            />
          </motion.div>
          <div className="flex">
            <div>
              <h3>Product Renders</h3>
              <p>
                High quality realistic product 3D renderings that will increase
                your sales on Amazon.
              </p>
            </div>
          </div>
        </article>

        <article>
          <div className="flex">
            <div>
              <h3>Video Production</h3>
              <p>
                Logo intro reveal, Explainer videos, Motion design in 2D/3D or a
                simple VFX animation.
              </p>
            </div>
          </div>
          <div className="flex img">
            <img
              srcSet="/imgs/services/video-production-sm.png 150w,
						/imgs/services/video-production-lg.png 323w"
              sizes="(max-width: 768px) 150px, 323px"
              src="/imgs/services/video-production-lg.png"
              width={323}
              height={323}
              alt="Video Production"
            />
          </div>
        </article>

        <article>
          <div className="flex img">
            <img
              srcSet="/imgs/services/email-marketing-sm.png 150w,
						/imgs/services/email-marketing-lg.png 323w"
              sizes="(max-width: 768px) 150px, 323px"
              src="/imgs/services/email-marketing-lg.png"
              width={323}
              height={323}
              alt="Email Marketing"
            />
          </div>
          <div className="flex">
            <div>
              <h3>Marketing</h3>
              <p>
                Generate leads, Run a webinar, Sell your products and leverage
                the power of social media marketing.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
