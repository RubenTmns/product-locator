import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

const Acceuil: React.FC<{ search }> = ({ search }) => {
  const router = useRouter();

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center align-middle"
        style={{ margin: "13rem 0 0 0" }}
      >
        <div className="">
          <img
            src="/accueil.png"
            className="rounded "
            alt="..."
            style={{ width: "30rem" }}
          />
        </div>

        <form action="/api/accueil" method="POST">
          <div className="input-group " style={{ width: "50rem" }}>
            <input
              type="text"
              name="input"
              className="form-control p-3 mt-3"
              placeholder="Search product"
              aria-label="Input group example"
              aria-describedby="basic-addon1"
            />
            <button
              className="input-group-text p-3 mt-3 "
              style={{ cursor: "pointer" }}
              type="submit"
              onSubmit={(e) => e.preventDefault}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search "
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
            </button>
          </div>
        </form>

        <h1 className="mt-5">Chaque recherche vous fait gagner du temps</h1>
      </div>
    </>
  );
};

export default Acceuil;
