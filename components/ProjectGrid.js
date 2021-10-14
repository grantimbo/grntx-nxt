import Link from "next/link";

export default function ProjectGrid(props) {
  const projects = props?.post;

  return (
    <section className="projects-list">
      {projects?.map((project) => (
        <article key={project.title} title={project.title}>
          <Link
            href={`/projects/?slug=${project.slug}`}
            as={`/projects/${project.slug}`}
          >
            <a>
              <figure>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  width={300}
                  height={300}
                />
                <div className="details">
                  <p>{project.title}</p>
                </div>
              </figure>
            </a>
          </Link>
        </article>
      ))}
    </section>
  );
}
