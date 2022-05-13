import React from "react";

export default function Footer() {
  return (
    <>
      <hr />
      <footer>
        <div className='py-10'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 tracking-wide'>
              <div className='mb-2'>
                <h2 className='font-bold text-lg'>campuswire</h2>
                <br />
                <p className='text-sm pb-4'>
                  Our mission is to optimize the world&#39;s teaching and
                  learning.
                </p>
                <p className='text-xs'>© 2021 CampusTech, Inc.</p>
              </div>
              <div className='mb-2'>
                <h2 className='font-bold text-lg'>Courses</h2>
                <br />
                <ul>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Announcement
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Explore live courses
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mb-2'>
                <h2 className='font-bold text-lg'>Platform</h2>
                <br />
                <ul>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Class forum
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Chatrooms
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Lectures
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Insights
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mb-2'>
                <h2 className='font-bold text-lg'>Company</h2>
                <br />
                <ul>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      About us
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Join us
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Blog
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Privacy
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mb-2'>
                <h2 className='font-bold text-lg'>Get the apps</h2>
                <br />
                <ul>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Desktop apps
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      iOS app
                    </a>{" "}
                    iOS app
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Android app
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mb-2'>
                <h2 className='font-bold text-lg'>Help & Contact</h2>
                <br />
                <ul>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      FERPA
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Help center
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Email us
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Chat with us
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Twitter
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Facebook
                    </a>
                  </li>
                  <li className='pb-4'>
                    <a className='hover:text-blue-400' href='#'>
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
