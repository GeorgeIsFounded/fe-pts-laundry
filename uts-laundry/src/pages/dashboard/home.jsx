import React from 'react';
import { GiWashingMachine } from 'react-icons/gi';
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import clothes from '../../images/clothes.jpg';

const Home = () => {
  let navigate = useNavigate()
  let location = useLocation();
  let path = location.pathname.split('/')[1];
  let cekPath = location.pathname.split('/')[2];
  console.log(location.pathname);
  console.log(location.pathname.split('/'));
  const activeClassname =
    'bg-black rounded-md w-full flex items-center items-center px-4 py-3 cursor-pointer text-white';
  const nonActiveClassname =
    'flex text-black w-full items-center px-4 py-3 cursor-pointer hover:bg-gray-50 hover:rounded-md';
  return (
    <div className="w-screen h-screen">
      {' '}
      <div className="pt-10 pb-7 border-black items-center border-b-2 h-[50px] w-full p-5 flex justify-between">
        <h1 className="flex items-center text-lg font-semibold">
          B<GiWashingMachine size={30} className="mb-2" />
          GEM
        </h1>
        Home
        <div className="flex">
          <button
            onClick={() => {
              return navigate('/login');
            }}
            className="hover:border-b-2 hover:border-red-500 duration-150 text-red-500"
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="w-full h-[88%] grid grid-cols-6">
        <div className="border-r w-[110%] border-gray-300 px-6">
          <img src="" alt="" />
          <div className="flex flex-col space-y-4">
            {' '}
            <Link to={`/${path}/pelanggan`}>
              {' '}
              <button
                className={
                  cekPath === 'pelanggan' ? activeClassname : nonActiveClassname
                }
              >
                <h1 className="mt-[2px] ml-3 font-medium ">Dashboard</h1>
              </button>
            </Link>
            <Link to={`/${path}/outlet`}>
              {' '}
              <button
                className={
                  cekPath === 'outlet' ? activeClassname : nonActiveClassname
                }
              >
                {' '}
                <h1 className="mt-[2px] ml-3 text-[15px] font-medium ">
                  Outlet
                </h1>
              </button>
            </Link>
            <Link to={`/${path}/member`}>
              {' '}
              <button
                className={
                  cekPath === 'member' ? activeClassname : nonActiveClassname
                }
              >
                <h1 className="mt-[2px] ml-3 text-[15px] font-medium ">
                  Member
                </h1>
              </button>
            </Link>
            <Link to={`/${path}/paket`}>
              {' '}
              <button
                className={
                  cekPath === 'paket' ? activeClassname : nonActiveClassname
                }
              >
                {' '}
                <h1 className="mt-[2px] ml-3 text-[15px] font-medium ">
                  Paket
                </h1>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-5 pl-10 px-5 pb-4 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
