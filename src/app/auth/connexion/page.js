import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flash from './../../components/Flash/page';
import { Image } from 'next/image';
 
function Connexion() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center   bg-slate-50">
       
      <Flash type="succed" />  {/*/ Choose : succed / warn/ failed */}
        <form className=" flex flex-col justify-center items-center gap-5 h-1/2 bg-slate-100 rounded-md p-10 shadow shadow-slate-300">
          <img
            src="/assets/stepchu.svg"
            className="w-1/2 hover:scale-110  transition-all"
            alt=""
          />
          <img
            src="/assets/locker.svg"
            className="w-1/4 hover:scale-110  transition-all"
            alt=""
          />
          <h3 className="text-slate-400 font-bold"> Portail de connexion</h3>
          <input
            type="email"
            className="text-sm p-2 rounded-md bg-slate-200 text-center hover:scale-110  transition-all"
            placeholder="adresse e-mail CHU"
          />
          <input
            type="password"
            className="text-sm p-2 rounded-md bg-slate-200 text-center hover:scale-110  transition-all"
            placeholder="****************"
          />
          {/* <button className="bg-indigo-700 rounded-md px-6 p-2 flex items-center hover:scale-110  transition-all">
            Se connecter <img alt="" className="mx-3" src="/assets/arrow.svg" />
          </button> */}
          <a href="/dashbord" className="bg-indigo-700 text-sm rounded-md px-6 p-2 flex items-center justify-between hover:scale-110  transition-all">
            Se connecter <img alt="" className="mx-3" src="/assets/arrow.svg" />
          </a>

          <a href="#" className="text-center text-slate-500 "> Mot de passe oublié ? </a>
        </form>
      </main>
    </>
  );
}

export default Connexion;
