import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

import "./App.css";
import woo from "./assets/woo.png.png";
import css from "./assets/css.png";
import git from "./assets/git.png";
import jsL from "./assets/js-l.png";
import js from "./assets/js.png";
import leaf from "./assets/leaf.png";
import php from "./assets/php.png";
import Q from "./assets/q.png";
import qube from "./assets/qube.png";
import s from "./assets/s.png";
import sandbox from "./assets/sandbox.png";
import tailwind from "./assets/tailwind.png";
import ts from "./assets/ts.png";
import vs from "./assets/vs.png";
import pen from "./assets/pen.png";
import python from "./assets/python.png";
import f from "./assets/f.png";

import CardOne from "./components/CardOne";
import CardTwo from "./components/CardTwo";
import CardThree from "./components/CardThree";
import CardFive from "./components/CardFive";
import CardSix from "./components/CardSix";
import CardSeven from "./components/CardSeven";
function App() {
  return (
    <div>
      <div className="bg-Background min-h-screen  pt-10 px-5 md:px-0 ">
        <div className="bg-BlueBackground container  mx-auto w-full md:w-8/12 h-full rounded-3xl flex flex-col justify-between  overflow-hidden ">
          <div className="bg-BlueBackground    h-4/6 md:h-3/4 pt-8 pl-4 pr-4 md:pl-0 md:pr-0 py-10 overflow-hidden">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="w-full md:w-7/12 md:ml-10 h-auto md:h-48 p-5">
                <h1 className="text-white text-2xl lg:text-5xl font-bold">
                  hassle-free gateway to instant software deployment
                </h1>
              </div>
              <div className="px-5 md:px-10 mt-5 md:mt-0">
                <h1 className="text-white text-6xl md:text-8xl font-bold">
                  cloudb
                </h1>
              </div>
            </div>
            <div className="w-full md:w-6/12 text-white bg-messageWoman rounded-3xl p-4 md:ml-10 md:mr-10 md:mb-0 mt-8 md:mt-0">
              <p className="font-normal text-xs md:text-sm">
                Say goodbye to the wait times and headaches of coordinating with
                developers or grappling with technical intricacies. With cloudB,
                the power to harness advanced software tools is at your
                fingertips, instantly accessible and effortlessly manageable.
              </p>
            </div>
          </div>
          {/* <!-- Moving Div --> */}
          <div className="py-5 px-7 bg-gradient-to-b from-blue-700 to-white rounded-b-3xl h-2/6 md:h-1/4 ">
            <div className="flex flex-wrap justify-around">
              <img
                src={css}
                alt="CSS Logo"
                className="md:w-16 md:h-16 mb-4 mr-4 w-10 h-10"
              />
              <img
                src={jsL}
                alt="JavaScript Logo"
                className="md:w-24 md:h-24 mb-4 mr-4 w-16 h-16 "
              />
              <img
                src={php}
                alt="PHP Logo"
                className="md:w-16 md:h-16 mb-4 mr-4 w-10 h-10"
              />
              <img
                src={qube}
                alt="Qube Logo"
                className="md:w-24 md:h-24 mb-4 mr-4 w-16 h-16"
              />
              <img
                src={sandbox}
                alt="Sandbox Logo"
                className="md:w-16 md:h-16 mb-4 mr-4 w-10 h-10"
              />
              <img
                src={ts}
                alt="TypeScript Logo"
                className="md:w-24 md:h-24 mb-4 mr-4 w-16 h-16"
              />
              <img
                src={pen}
                alt="Pen Logo"
                className="md:w-16 md:h-16 mb-4 mr-4 w-10 h-10"
              />
              <img
                src={f}
                alt="F Logo"
                className="md:w-24 md:h-24 mb-4 mr-4 w-16 h-16"
              />
            </div>
            <div className="flex flex-wrap justify-around">
              <img
                src={git}
                alt="Git Logo"
                className="md:w-24 md:h-24 mb-4 mr-4 w-16 h-16"
              />
              <img
                src={js}
                alt="JavaScript Logo"
                className="md:w-16 md:h-16 mb-4 mr-4 w-10 h-10"
              />
              <img
                src={leaf}
                alt="Leaf Logo"
                className="md:w-24 md:h-24 mb-4 mr-4 w-16 h-16"
              />
              <img
                src={Q}
                alt="Q Logo"
                className="md:w-16 md:h-16 mb-4 mr-4 w-10 h-10"
              />
              <img
                src={s}
                alt="S Logo"
                className="md:w-24 md:h-24 mb-4 mr-4 w-16 h-16"
              />
              <img
                src={tailwind}
                alt="Tailwind CSS Logo"
                className="md:w-16 md:h-16 mb-4 mr-4 w-10 h-10"
              />
              <img
                src={vs}
                alt="VS Logo"
                className="md:w-24 md:h-24 mb-4 mr-4 w-16 h-16"
              />
              <img
                src={python}
                alt="Python Logo"
                className="md:w-16 md:h-16 mb-4 mr-4 w-10 h-10"
              />
            </div>
          </div>
        </div>

        {/*second scetion*/}
        <section>
          <div className="mt-10  flex flex-col xl:flex-row justify-between container mx-auto md:w-8/12 gap-8 xl:gap-0">
            <CardOne />
            <CardTwo />
          </div>
        </section>

        {/*Say Goodbye to Tech */}
        <section>
          <div className="mx-auto lg:w-4/12 md:w-6/12 w-full  mt-10  text-center">
            <h1 className="text-5xl text-white font-bold">
              Say Goodbye to Tech
            </h1>
            <h1 className="text-5xl text-white font-bold">Tantrums – Hello,</h1>
            <h1 className="text-5xl text-white font-bold">Instant Software</h1>
            <h1 className="text-5xl text-white font-bold">Serenity</h1>
          </div>
        </section>
        <section>
          <div className="mx-auto w-full md:w-4/12 mt-10 ">
            <p className="text-white font-semibold">
              Imagine a world where you no longer need to worry about the
              nitty-gritty details “under the hood.” Our platform automates the
              entire process, from hosting to maintenance, freeing you to focus
              on what truly matters
            </p>
          </div>
        </section>

        <section>
          <div className="mt-10  flex flex-col xl:flex-row justify-between container mx-auto md:w-8/12">
            <CardThree />
            <CardFive />
          </div>
        </section>
        <section>
          <div className="mt-10 flex flex-col xl:flex-row justify-between container mx-auto lg:px-36 pb-10">
            <CardSix />
            <CardSeven />
          </div>
        </section>
      </div>
      <section>
        <div className="bg-gradient-to-b from-BlueBackground to-white px-5 relative ">
          <div className="w-full md:w-4/12 mx-auto text-center pt-10">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Take your startup to
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                the next level
              </h1>
            </div>
            <p className="text-base md:text-lg mb-6">
              Supercharge your business with a modern web design fine-tuned for
              performance and conversion
            </p>
            <div className="flex justify-center mb-6">
              <button className="bg-black text-white px-6 py-2 rounded-full mr-4 hover:bg-gray-800 transition-colors duration-300">
                Get Started
              </button>
              <button className="bg-gray-200 text-black px-6 py-2 rounded-full hover:bg-gray-300 transition-colors duration-300">
                Learn more
              </button>
            </div>
          </div>
          <footer className="">
            <div className="container mx-auto lg:px-44">
              <div className="flex flex-col md:flex-row font-medium">
                <div className="w-full md:w-6/12 ">
                  <div>
                    <h1 className="text-2xl font-bold mb-4">Pizza Time</h1>
                    <p className="mb-4 md:w-3/4">
                      We understand the evolving needs of modern businesses and
                      the challenges they face in today’s competitive landscape.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse pulvinar justo ac ligula vehicula, vel luctus
                      ligula sodales.
                    </p>
                    <div className="flex space-x-4">
                      <FaInstagram size={24} />
                      <FaFacebook size={24} />
                      <FaYoutube size={24} />
                      <FaTwitter size={24} />
                      <FaGithub size={24} />
                    </div>
                  </div>
                </div>
                <div className=" w-full md:w-6/12 flex justify-between font-medium">
                  <div className="w-2/12">
                    <ul>
                      <li>Home</li>
                      <li>Features</li>
                      <li>Pricing</li>
                      <li>About Us</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                  <div className="w-2/12">
                    <ul>
                      <li>Single Post</li>
                      <li>Blog Category</li>
                      <li>Page</li>
                      <li>Front Page</li>
                      <li>Search</li>
                      <li>Full Width</li>
                      <li>Blank</li>
                      <li>Parent Page</li>
                      <li>Sub Page</li>
                    </ul>
                  </div>
                  <div className="w-2/12">
                    <ul>
                      <li>Terms of Service</li>
                      <li>Privacy Policy</li>
                      <li>Register</li>
                      <li>Log In</li>
                      <li>Style Guide</li>
                      <li>Changelog</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="md:grid grid-cols-2 mt-32 mb-12 w-full">
                <div class="col-span-2 md:col-span-1">
                  <p class="w-full">
                    © Copyright 2024 Pizza Time. All rights reserved. Designed
                    WordPress in
                  </p>
                </div>
                <div class="col-span-2 md:col-span-1 flex justify-evenly">
                  <button class="underline">Terms of Service</button>
                  <button class="underline">Privacy Policy</button>
                  <button class="underline">Return to Top</button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default App;
