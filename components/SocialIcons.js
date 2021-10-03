export default function SocialIcons() {
  return (
    <>
      <div className="social-icons">
        <a
          href="https://youtube.com/grantimbo"
          target="_blank"
          alt="Youtube"
          rel="noopener"
        >
          <i className="icon-youtube"></i>
        </a>
        <a
          href="https://facebook.com/grntx"
          target="_blank"
          alt="Facebook"
          rel="noopener"
        >
          <i className="icon-facebook"></i>
        </a>
        <a
          href="https://instagram.com/grntx"
          target="_blank"
          alt="Instagram"
          rel="noopener"
        >
          <i className="icon-instagram"></i>
        </a>
        <a
          href="https://twitter.com/grantimbo"
          target="_blank"
          alt="Twitter"
          rel="noopener"
        >
          <i className="icon-twitter"></i>
        </a>
        <a
          href="https://github.com/grantimbo"
          target="_blank"
          alt="Github"
          rel="noopener"
        >
          <i className="icon-github"></i>
        </a>
        <a
          href="https://codepen.io/grantimbo"
          target="_blank"
          alt="Codepen"
          rel="noopener"
        >
          <i className="icon-codepen"></i>
        </a>
        <a
          href="https://artstation.com/grantimbo"
          target="_blank"
          alt="Artstation"
          rel="noopener"
        >
          <i className="icon-artstation"></i>
        </a>
        <a
          href="https://behance.net/grantimbo"
          target="_blank"
          alt="Behance"
          rel="noopener"
        >
          <i className="icon-behance"></i>
        </a>
      </div>
      <style jsx>
        {`
          .social-icons {
            margin: 2rem 0;
          }
          .social-icons a {
            font-size: 1.4rem;
            margin-right: 0.8rem;
            text-decoration: none;
            color: var(--eggblue);
          }
        `}
      </style>
    </>
  );
}
