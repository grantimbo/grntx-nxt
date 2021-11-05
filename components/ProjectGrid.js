import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectGrid(props) {
  const projects = props?.post;

  return (
    <section className="projects-list">
      {projects?.map((project, i) => (
        <article key={project.title} title={project.title}>
          <Link
            href={`/projects/?slug=${project.slug}`}
            as={`/projects/${project.slug}`}
          >
            <a>
              <motion.figure
                animate={{ opacity: 1, y: 0, scale: 1 }}
                initial={{ opacity: 0, y: -20, scale: 0.5 }}
                transition={{ delay: i * 0.04 }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  width={300}
                  height={300}
                />
                <div className="details">
                  <p>{project.title}</p>
                </div>
              </motion.figure>
            </a>
          </Link>
        </article>
      ))}
    </section>
  );
}
