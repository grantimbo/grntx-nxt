import Link from "next/link";

export default function ProjectGrid(props) {
  const projects = props?.post;

  return (
    <section className="projects-list">
      {projects?.map((project) => (
        <div key={project.title}>
          <Link
            href={`/projects/?slug=${project.slug}`}
            as={`/projects/${project.slug}`}
          >
            <a>
              <figure>
                <div className="thumbnail">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    width={300}
                    height={188}
                  />
                </div>
                <div className="details">
                  <h3>{project.title}</h3>
                </div>
              </figure>
            </a>
          </Link>
        </div>
      ))}
    </section>
  );
}
