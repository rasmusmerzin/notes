import { Link } from "react-router";

export function DashboardPage() {
  return (
    <>
      <Link to="/new" className="new">
        Create new note
      </Link>
    </>
  );
}
