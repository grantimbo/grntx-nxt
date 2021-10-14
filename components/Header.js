import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(router.pathname);

    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/6136161ad6e7610a49b3e466/1fetkcm4v";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  }, []);

  return (
    <header>
      <Link href="/">
        <a>
          <div className="logo">Grant Imbo</div>
        </a>
      </Link>
      <nav className="main">
        <Link href="/">
          <a className={path == "/" ? "active" : ""}>
            <i className="icon-home"></i>
            <span>Home</span>
          </a>
        </Link>
        <Link href="/projects">
          <a className={path == "/projects" ? "active" : ""}>
            <i className="icon-images"></i>
            <span>Projects</span>
          </a>
        </Link>
        <Link href="/services">
          <a className={path == "/services" ? "active" : ""}>
            <i className="icon-cog"></i>
            <span>Services</span>
          </a>
        </Link>
        <Link href="/about">
          <a className={path == "/about" ? "active" : ""}>
            <i className="icon-user"></i>
            <span>About</span>
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
