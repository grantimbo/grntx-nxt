import Link from "next/link";
import Header from "../components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <section>
        <div>
          <h1>Grant Imbo — Not Found</h1>
          <p>
            Seems like you're lost. Please Go back{" "}
            <Link href="/">
              <a>Home</a>
            </Link>
          </p>
        </div>
      </section>

      <style jsx>
        {`
          section {
            display: flex;
            align-items: center;
            height: 100vh;
            text-align: center;
          }
          h1 {
            margin: 0;
          }
          div {
            max-width: 500px;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  );
}
