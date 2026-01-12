import NavbarClient from "./NavbarClient";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-black/70 backdrop-blur-md border-b border-yellow-500/10">
        <div className="mx-auto max-w-7xl px-6">
          <NavbarClient />
        </div>
      </nav>
    </header>
  );
}
