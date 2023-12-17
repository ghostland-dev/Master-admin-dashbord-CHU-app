import React from "react";
import Flash from './components/Flash/page';


function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <Flash type="failed" /> {/* Choose: successed / warn / failed */}

      <form className="flex flex-col justify-center items-center gap-5 h-1/2 bg-slate-100 rounded-md p-10 shadow-md shadow-slate-200">
        <img
          src="/assets/stepchu.svg"
          className="hover:scale-110 transition-all"
          alt=""
        />
        <img
          src="/assets/locker.svg"
          className="hover:scale-110 transition-all"
          alt=""
        />

        <h3 className="text-slate-400 font-bold">Portail de connexion</h3>
        <input
          type="email"
          className="p-2 rounded-md bg-slate-200 text-center hover:scale-110 transition-all"
          placeholder="adresse e-mail CHU"
        />
        <input
          type="password"
          className="p-2 rounded-md bg-slate-200 text-center hover:scale-110 transition-all"
          placeholder="****************"
        />
        <button className="bg-indigo-700 rounded-md px-6 p-2 flex items-center hover:scale-110 transition-all">
          Se connecter <img alt="" className="mx-3" src="/assets/arrow.svg" />
        </button>
      </form>
    </main>
  );
}

export default Home;
