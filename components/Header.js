import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

const Header = () => {
  const router = useRouter();
  const [path, setPath] = useState("");

  ReactGA.initialize("UA-47603859-1");

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

  useEffect(() => {
    // Send pageview with a custom path
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: `Grant Imbo`,
    });
  }, [router.pathname]);

  return (
    <header>
      <Link href="/">
        <div className="logo">Grant Imbo</div>
      </Link>
      <nav className="main">
        <Link href="/" className={path == "/" ? "active" : ""}>
          <i className="icon-home"></i>
          <span>Home</span>
        </Link>
        <Link href="/projects" className={path == "/projects" ? "active" : ""}>
          <i className="icon-images"></i>
          <span>Projects</span>
        </Link>
        <Link href="/services" className={path == "/services" ? "active" : ""}>
          <i className="icon-cog"></i>
          <span>Services</span>
        </Link>
        <Link href="/about" className={path == "/about" ? "active" : ""}>
          <i className="icon-user"></i>
          <span>About</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
