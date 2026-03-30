const Footer = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-purple-600 to-purple-500 py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-100 text-sm mb-8">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br /> Start your free trial today.
        </p>
        <div className="flex items-center justify-center gap-4 mb-6">
          <button className="bg-white text-purple-600 font-semibold px-6 py-2.5 rounded-full hover:bg-purple-50 transition-colors text-sm">
            Explore Products
          </button>
          <button className="border border-white text-white font-semibold px-6 py-2.5 rounded-full hover:bg-purple-600 transition-colors text-sm">
            View Pricing
          </button>
        </div>
        <p className="text-purple-200 text-xs">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </section>

      <footer className="bg-[#111827] text-gray-400 py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">
          <div>
            <h2 className="text-white text-2xl font-extrabold mb-3">DigiTools</h2>
            <p className="text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. Work smarter
              with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Social Links</h4>
            <div className="flex gap-3">
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors text-sm">
                <div className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center">
                  <i className="fa-brands fa-youtube text-white text-sm"></i>
                </div>
             
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors text-sm">
                <div className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center">
                  <i className="fa-brands fa-facebook-f text-white text-sm"></i>
                </div>
           
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors text-sm">
                <div className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center">
                  <i className="fa-brands fa-x-twitter text-white text-sm"></i>
                </div>
    
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2026 Digitools. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;