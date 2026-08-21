import { Link } from "react-router-dom";

// Reusable breadcrumb trail.
// Pass an array of { label, to } — the last item is shown as plain text (current page).
// Example: <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Shop", to: "/category/all" }, { label: "T-shirt" }]} />
function Breadcrumb({ items }) {
  return (
    <nav className="text-sm text-gray-500 px-5 md:px-16 pt-6">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index}>
            {item.to && !isLast ? (
              <Link to={item.to} className="hover:text-black">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-black" : ""}>{item.label}</span>
            )}
            {!isLast && <span className="mx-2">/</span>}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
