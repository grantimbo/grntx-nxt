import SortButton from "./SortButton";

const ProjectSort = (props) => {
  return (
    <>
      <div className="project-head">
        <div className="project-sort">
          <SortButton name="all" title="All" {...props} />
          <SortButton name="cars" title="Cars" {...props} />
          <SortButton name="motion" title="Motion" {...props} />
          <SortButton name="visualization" title="Visualization" {...props} />
          <SortButton name="website" title="Website" {...props} />
          <SortButton name="typography" title="Typography" {...props} />
          <SortButton name="abstract" title="Abstract" {...props} />
          <SortButton
            name="photomanipulation"
            title="Photo Manipulation"
            {...props}
          />
          <SortButton name="cyberpunk" title="Cyberpunk" {...props} />
        </div>
      </div>

      <style jsx>{`
        .project-head {
          padding: 1rem 1rem 0 1rem;
          display: flex;
          justify-content: end;
        }
        .project-sort {
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default ProjectSort;
