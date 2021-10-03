import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import { projects } from "../../public/_projects";
import ProjectGrid from "../../components/ProjectGrid";
import Modal from "react-modal";
import ModalContents from "../../components/ModalContents";
import { useState } from "react";
import ProjectSort from "../../components/ProjectSort";

Modal.setAppElement("#__next");

export default function Projects() {
  const router = useRouter();
  const [data, setdata] = useState(projects);
  const [cat, setCat] = useState("all");

  return (
    <>
      <Head>
        <title>Grant Imbo — Projects</title>
      </Head>
      <Header />

      <ProjectSort
        projects={projects}
        setdata={setdata}
        setCat={setCat}
        cat={cat}
      />

      <ProjectGrid post={data} />

      <Modal
        isOpen={!!router.query.slug}
        onRequestClose={() => router.push("/projects")}
        className="modal-container"
        overlayClassName="modal"
      >
        <ModalContents slug={router.query.slug} post={data} />
      </Modal>
    </>
  );
}
