import Link from "next/link";
import CartIcon from "./CartIcone";

const links = [
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
];

function NavBar() {
  return (
    <nav className="w-full h-[80px] fixed top-0 left-0 bg-gray-800 text-white z-50">
      <div className="container flex items-center justify-between h-full mx-auto px-4">

        <Link href="/" className="text-2xl font-bold">
          MyShop
        </Link>

        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-gray-400 transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

          <CartIcon />


      </div>
    </nav>
  );
}

export default NavBar;