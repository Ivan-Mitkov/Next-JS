import Link from "next/link";

const Layout = props => {
  const { title, children, auth } = props;
//   console.log("Layout: ", props);
  const { user = {} } = auth || {};
  return (
    <div className="root">
      <nav className="navbar">
        <span>
          Welcome, <strong>{user.name || "Guest"}</strong>
        </span>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>

          {user.email ? (
            <>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
              <button>Logout</button>
            </>
          ) : (
            <Link href="/login">
              <a>Login</a>
            </Link>
          )}
        </div>
      </nav>
      <h1>{title}</h1>
      {children}
      <style jsx>{`
        .root {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .navbar {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        a {
          margin-right: 0.5rem;
          text-decoration: none;
          color: rgb(0, 0, 238);
        }
        button {
          padding: 0;
          font: inherit;
          cursor: pointer;
          border-style: none;
          color: rgb(0, 0, 238);
          margin-right: 0.5rem;
          background-color: inherit;
        }
      `}</style>
    </div>
  );
};

export default Layout;
