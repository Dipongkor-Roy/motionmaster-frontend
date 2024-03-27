
const Hero = () => {
  return (
    <div className="relative h-96 bg-white">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="hero min-h-44">
        <div className="hero-content text-center text-neutral-content mt-[18px] ">
          <div className="relative">
            <div className="mt-20 mx-auto max-w-md bg-clip-text text-transparent relative z-40">
              <h1 className="mb-5 font-bricolage-grotesque text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Elevate Your Vision
                <br />
                <span className="text-3xl">
                  Transforming Moments into Masterpieces!
                </span>
              </h1>
              <button className="btn btn-primary mr-4 px-[18px] rounded-3xl text-center">
                <span className="flex items-center justify-center">⚡️ <p>Get Started</p></span>
              </button>
              <button className="btn rounded-3xl">All Services</button>
            </div>
            <div className="absolute top-0 left-0 w-1/2 h-1/2 z-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                // eslint-disable-next-line react/no-unknown-property
                xmlns:xlink="http://www.w3.org/1999/xlink"
                // eslint-disable-next-line react/no-unknown-property
                xmlns:svgjs="http://svgjs.dev/svgjs"
                viewBox="0 0 2000 2000"
              >
                <g>
                  <g fill="hsl(43, 97%, 49%)" id="star">
                    <path
                      d="M 500 500 C 1000 1000 1000 1000 1500 500 C 1000 1000 1000 1000 1783.2167832167834 1779.7202797202797 C 1000 1000 1000 1000 500 1500 C 1000 1000 1000 1000 500 500"
                      // eslint-disable-next-line react/no-unknown-property
                      stroke-linecap="round"
                      // eslint-disable-next-line react/no-unknown-property
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
