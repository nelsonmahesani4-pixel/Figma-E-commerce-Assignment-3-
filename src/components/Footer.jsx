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
        {/* Social Media Icons */}
        <div class="flex gap-4 text-2xl text-gray-700 ">
  <div class="p-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300">
    {/* <!-- Twitter SVG --> */}
     <svg class="w-6 h-6 "fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M523.4 215.7C523.7 220.2 523.7 224.8 523.7 229.3C523.7 368 418.1 527.9 225.1 527.9C165.6 527.9 110.4 510.7 64 480.8C72.4 481.8 80.6 482.1 89.3 482.1C138.4 482.1 183.5 465.5 219.6 437.3C173.5 436.3 134.8 406.1 121.5 364.5C128 365.5 134.5 366.1 141.3 366.1C150.7 366.1 160.1 364.8 168.9 362.5C120.8 352.8 84.8 310.5 84.8 259.5L84.8 258.2C98.8 266 115 270.9 132.2 271.5C103.9 252.7 85.4 220.5 85.4 184.1C85.4 164.6 90.6 146.7 99.7 131.1C151.4 194.8 229 236.4 316.1 240.9C314.5 233.1 313.5 225 313.5 216.9C313.5 159.1 360.3 112 418.4 112C448.6 112 475.9 124.7 495.1 145.1C518.8 140.6 541.6 131.8 561.7 119.8C553.9 144.2 537.3 164.6 515.6 177.6C536.7 175.3 557.2 169.5 576 161.4C561.7 182.2 543.8 200.7 523.4 215.7z"/></svg>
  </div>
  <div class="p-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300">
    {/* <!-- Facebook SVG --> */}
     <svg class="w-6 h-6 "fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/></svg>
  </div>

  <div class="p-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300">
    {/* <!-- Instagram SVG --> */}
  
    <svg class="w-6 h-6 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
  </div>
  <div class="p-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300">
    {/* <!-- GitHub SVG --> */}
    <svg class="w-6 h-6" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M280.5 426.5C214.5 418.5 168 371 168 309.5C168 284.5 177 257.5 192 239.5C185.5 223 186.5 188 194 173.5C214 171 241 181.5 257 196C276 190 296 187 320.5 187C345 187 365 190 383 195.5C398.5 181.5 426 171 446 173.5C453 187 454 222 447.5 239C463.5 258 472 283.5 472 309.5C472 371 425.5 417.5 358.5 426C375.5 437 387 461 387 488.5L387 540.5C387 555.5 399.5 564 414.5 558C505 523.5 576 433 576 321C576 179.5 461 64 319.5 64C178 64 64 179.5 64 321C64 432 134.5 524 229.5 558.5C243 563.5 256 554.5 256 541L256 501C249 504 240 506 232 506C199 506 179.5 488 165.5 454.5C160 441 154 433 142.5 431.5C136.5 431 134.5 428.5 134.5 425.5C134.5 419.5 144.5 415 154.5 415C169 415 181.5 424 194.5 442.5C204.5 457 215 463.5 227.5 463.5C240 463.5 248 459 259.5 447.5C268 439 274.5 431.5 280.5 426.5z"/></svg>
  </div>
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