import { useRouter } from "next/router";
import parse from "html-react-parser";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";

export default function ModalContents(props) {
  const projects = props?.post;
  const data = projects.filter((e) => e.slug === props.slug);
  const router = useRouter();

  const navigate = (slug, direction) => {
    document.querySelector(".modal").scrollTop = 0;
    let index = null;
    projects.forEach((e, i) => {
      if (e.slug === slug) {
        direction == "next" ? (index = i + 1) : (index = i - 1);
      }
    });
    router.push(
      `/projects/?slug=${projects[index].slug}`,
      `/projects/${projects[index].slug}`
    );
  };

  useEffect(() => {
    if (data.length === 0) {
      router.push(`/not-found`);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Grant Imbo — Projects // {data?.[0]?.title}</title>
      </Head>

      {data.length > 0 && props.slug && (
        <>
          {projects?.at(0)?.slug != props?.slug && (
            <div
              className="modalnav showPrev"
              onClick={() => navigate(data?.[0]?.slug, "previous")}
            >
              <span className="icon-angle-left"></span>
            </div>
          )}

          {projects?.at(-1)?.slug != props?.slug && (
            <div
              className="modalnav showNext"
              onClick={() => navigate(data?.[0]?.slug, "next")}
            >
              <span className="icon-angle-right"></span>
            </div>
          )}

          <div className="container">
            <Link href="/projects">
              <a className="close-modal">
                <span className="icon-close"></span>
              </a>
            </Link>

            <Link href="/projects">
              <a className="back">
                <span className="icon-back-arrow" /> Projects
              </a>
            </Link>

            <div className="modal-content" id="scrollHere">
              <div className="header">
                <h3 className="title">{data?.[0]?.title}</h3>
                <p className="date">{data?.[0]?.date}</p>
              </div>
              <div className="content">{parse(data?.[0]?.content)}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
