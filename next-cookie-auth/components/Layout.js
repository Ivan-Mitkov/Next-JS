import Link from "next/link";

const Layout = ({ title, children }) => {
  return (
    <div className="root">
      <nav className="navbar">
        <span>
          Welcome, <strong>Guest</strong>
        </span>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
          <button>Logout</button>
          <Link href="/login">
            <a>Login</a>
          </Link>
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
          background-color:inherit;
        }
      `}</style>
    </div>
  );
};

export default Layout;
