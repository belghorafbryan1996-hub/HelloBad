import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <div className="w-full bg-white text-gray-800 text-sm border-t border-gray-200">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        
        {/* Menu */}
      <div className="p-5 sm:w-2/12 border-r">
          <div className="text-sm uppercase text-indigo-600 font-bold">Menu</div>
            <ul>
              <li className="my-2"><Link className="hover:text-indigo-600" to="/">Home</Link></li>
              <li className="my-2"><Link className="hover:text-indigo-600" to="/raquettes">Raquettes</Link></li>
              <li className="my-2"><Link className="hover:text-indigo-600" to="/shuttlecocks">Shuttlecocks</Link></li>
              <li className="my-2"><Link className="hover:text-indigo-600" to="/bagagerie">Bagagerie</Link></li>
            </ul>
        </div>

        {/* Centre */}
        <div className="p-5 sm:w-7/12 border-r text-center">
          <h3 className="font-bold text-xl text-indigo-600 mb-4">HELLOBAD</h3>
          <p className="text-gray-500 text-sm mb-10">
            Équipe-toi comme un pro, bats-toi comme un guerrier. 
            Retrouvez les meilleures raquettes, volants et équipements de badminton.
          </p>
        </div>

        {/* Contact */}
        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-indigo-600 font-bold">Contact</div>
          <Link to="/contact" className="hover:text-indigo-600">Contactez-nous</Link>
          <ul>
            <li className="my-2">
              <a className="hover:text-indigo-600" href="#">1 Bd de romainvillers 77700 Bailly-Romainvillliers</a>
            </li>
             <li className="my-2">
              <a className="hover:text-indigo-600" href="#">06.33.33.33.33</a>
            </li>
            <li className="my-2">
              <a className="hover:text-indigo-600" href="#">Hellobad@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex gap-2 item-center">
          
          {/* Twitter
          <a href="#" className="w-6 mx-1">
            <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24">
              <path d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168 -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411 -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929 -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009 -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049 -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0 -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z"/>
            </svg>
          </a>

          Facebook
          <a href="#" className="w-6 mx-1">
            <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24">
              <path d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784 -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"/>
            </svg>
          </a> */}


          {/* Instagram */}
          <a href="#" className="w-6 mx-1">
            <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" >
              <path d="M12,2.163c3.204,0 3.584,0.012 4.85,0.07c3.252,0.148 4.771,1.691 4.919,4.919c0.058,1.265 0.069,1.645 0.069,4.849c0,3.205 -0.012,3.584 -0.069,4.849c-0.149,3.225 -1.664,4.771 -4.919,4.919c-1.266,0.058 -1.644,0.07 -4.85,0.07c-3.204,0 -3.584,-0.012 -4.849,-0.07c-3.26,-0.149 -4.771,-1.699 -4.919,-4.92c-0.058,-1.265 -0.07,-1.644 -0.07,-4.849c0,-3.204 0.013,-3.583 0.07,-4.849c0.149,-3.227 1.664,-4.771 4.919,-4.919c1.266,-0.057 1.645,-0.069 4.849,-0.069Zm0,-2.163c-3.259,0 -3.667,0.014 -4.947,0.072c-4.358,0.2 -6.78,2.618 -6.98,6.98c-0.059,1.281 -0.073,1.689 -0.073,4.948c0,3.259 0.014,3.668 0.072,4.948c0.2,4.358 2.618,6.78 6.98,6.98c1.281,0.058 1.689,0.072 4.948,0.072c3.259,0 3.668,-0.014 4.948,-0.072c4.354,-0.2 6.782,-2.618 6.979,-6.98c0.059,-1.28 0.073,-1.689 0.073,-4.948c0,-3.259 -0.014,-3.667 -0.072,-4.947c-0.196,-4.354 -2.617,-6.78 -6.979,-6.98c-1.281,-0.059 -1.69,-0.073 -4.949,-0.073Zm0,5.838c-3.403,0 -6.162,2.759 -6.162,6.162c0,3.403 2.759,6.163 6.162,6.163c3.403,0 6.162,-2.76 6.162,-6.163c0,-3.403 -2.759,-6.162 -6.162,-6.162Zm0,10.162c-2.209,0 -4,-1.79 -4,-4c0,-2.209 1.791,-4 4,-4c2.209,0 4,1.791 4,4c0,2.21 -1.791,4 -4,4Zm6.406,-11.845c-0.796,0 -1.441,0.645 -1.441,1.44c0,0.795 0.645,1.44 1.441,1.44c0.795,0 1.439,-0.645 1.439,-1.44c0,-0.795 -0.644,-1.44 -1.439,-1.44Z"/>
            </svg>
          </a>

        </div>
        <div className="my-5">© Copyright 2024. All Rights Reserved. HELLOBAD</div>
      </div>
    </div>
  )
}