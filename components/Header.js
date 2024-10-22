const Header = () => (
    <header className="bg-yellow-200 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Monito</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>Categories</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
  
  export default Header;
  