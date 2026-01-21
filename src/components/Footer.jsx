export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-white font-bold text-xl mb-3">BlogHub</h3>
          <p className="text-sm">
            Discover amazing stories and insights from writers around the world.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-3">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li>Technology</li>
            <li>Design</li>
            <li>Business</li>
            <li>Lifestyle</li>
            <li>Travel</li>
            <li>Food</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-3">Follow Us</h4>
          <p className="text-sm">Twitter</p>
          <p className="text-sm">LinkedIn</p>
          <p className="text-sm">GitHub</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2024 BlogHub. All rights reserved.
      </div>
    </footer>
  );
}
