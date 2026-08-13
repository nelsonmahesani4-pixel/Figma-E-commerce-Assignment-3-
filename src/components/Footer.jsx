function Footer() {
  return (
    <footer className="bg-gray-100 px-5 md:px-16 pt-10 pb-6">

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

        <div className="col-span-2 md:col-span-1">

          <h2 className="text-2xl font-black">
            SHOP.CO
          </h2>

          <p className="text-gray-500 text-sm mt-3">
            We have clothes that suits your style
            and which you're proud to wear.
          </p>

          <div className="mt-4">
            ●  ●  ●  ●
          </div>

        </div>

        <div>
          <h3 className="font-bold">COMPANY</h3>
          <p className="text-gray-500 text-sm mt-3">About</p>
          <p className="text-gray-500 text-sm">Features</p>
          <p className="text-gray-500 text-sm">Works</p>
          <p className="text-gray-500 text-sm">Career</p>
        </div>

        <div>
          <h3 className="font-bold">HELP</h3>
          <p className="text-gray-500 text-sm mt-3">Customer Support</p>
          <p className="text-gray-500 text-sm">Delivery Details</p>
          <p className="text-gray-500 text-sm">Terms & Conditions</p>
          <p className="text-gray-500 text-sm">Privacy Policy</p>
        </div>

        <div>
          <h3 className="font-bold">FAQ</h3>
          <p className="text-gray-500 text-sm mt-3">Account</p>
          <p className="text-gray-500 text-sm">Orders</p>
          <p className="text-gray-500 text-sm">Payments</p>
        </div>

        <div>
          <h3 className="font-bold">RESOURCES</h3>
          <p className="text-gray-500 text-sm mt-3">Free eBooks</p>
          <p className="text-gray-500 text-sm">Development Tutorial</p>
          <p className="text-gray-500 text-sm">How to - Blog</p>
          <p className="text-gray-500 text-sm">Youtube Playlist</p>
        </div>

      </div>
      <div className="border-t mt-8 pt-5 text-sm text-gray-500">
        © 2026 SHOP.CO. All Rights Reserved.
      </div>
    </footer>
  );
}
export default Footer;