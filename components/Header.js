import Link from "next/link";
import { useRouter } from "next/router";

export default function Headers() {
  const router = useRouter();

  return (
    <header>
      <Link href="/">
        <a>
          <div className="logo">Grant Imbo</div>
          {/* <img className="logo" src="/imgs/logo.svg" alt="Grant Imbo" /> */}
        </a>
      </Link>
      <nav className="main">
        <Link href="/">
          <a className={router.pathname == "/" ? "active" : ""}>
            <i className="icon-home"></i>
            <span>Home</span>
          </a>
        </Link>
        <Link href="/projects">
          <a className={router.pathname == "/projects" ? "active" : ""}>
            <i className="icon-images"></i>
            <span>Projects</span>
          </a>
        </Link>
        <Link href="/services">
          <a className={router.pathname == "/services" ? "active" : ""}>
            <i className="icon-cog"></i>
            <span>Services</span>
          </a>
        </Link>
        <Link href="/about">
          <a className={router.pathname == "/about" ? "active" : ""}>
            <i className="icon-user"></i>
            <span>About</span>
          </a>
        </Link>
      </nav>
    </header>
  );
}
