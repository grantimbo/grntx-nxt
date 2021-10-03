const SortButton = (btn) => {
  return (
    <>
      <button
        name={btn?.name}
        onClick={(e) => {
          if (btn?.name == "all") {
            btn?.setdata(btn?.projects);
            btn?.setCat("all");
          } else {
            btn?.setdata(
              btn?.projects.filter((p) => p.tags.includes(e.target.name))
            );
            btn?.setCat(e.target.name);
          }
        }}
        className={btn?.cat === btn?.name ? "active" : ""}
      >
        {btn?.title}
      </button>

      <style jsx>{`
        button {
          margin: 0 0.5rem 0.5rem 0;
        }
      `}</style>
    </>
  );
};

export default SortButton;
