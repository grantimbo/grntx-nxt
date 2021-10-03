import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import { projects } from "../../public/_projects";
import ProjectGrid from "../../components/ProjectGrid";

import Modal from "react-modal";
import ModalContents from "../../components/ModalContents";

Modal.setAppElement("#__next");

export default function Projects() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Projects | Grant Imbo - Front-end Developer & 3D Artist</title>
      </Head>
      <Header />
      <ProjectGrid post={projects} />
      <Modal
        isOpen={!!router.query.slug}
        onRequestClose={() => router.push("/projects")}
        className="modal-container"
        overlayClassName="modal"
      >
        <ModalContents slug={router.query.slug} />
      </Modal>
    </>
  );
}
