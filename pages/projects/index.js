import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import { projects } from "../../public/_projects";
import ProjectGrid from "../../components/ProjectGrid";
import Modal from "react-modal";
import ModalContents from "../../components/ModalContents";
import { useState } from "react";

Modal.setAppElement("#__next");

export default function Projects() {
  const router = useRouter();
  const [data, setdata] = useState(projects);

  return (
    <>
      <Head>
        <title>Projects | Grant Imbo - Front-end Developer & 3D Artist</title>
      </Head>
      <Header />

      <div className="project-head">
        <div className="tae">
          <button onClick={() => setdata(projects)}>All</button>
          <button
            onClick={() =>
              setdata(projects.filter((e) => e.tags.includes("icon-motion")))
            }
          >
            Motion
          </button>
          <button
            onClick={() =>
              setdata(projects.filter((e) => e.tags.includes("abstract")))
            }
          >
            abstract
          </button>
        </div>
      </div>
      <ProjectGrid post={data} />
      <Modal
        isOpen={!!router.query.slug}
        onRequestClose={() => router.push("/projects")}
        className="modal-container"
        overlayClassName="modal"
      >
        <ModalContents slug={router.query.slug} />
      </Modal>

      <style jsx>{`
        .project-head {
          padding: 1rem 1rem 0.5rem 1rem;
        }
      `}</style>
    </>
  );
}
