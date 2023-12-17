import React from "react";
import Navbar from "./../components/Navbar/page";
import { faBell, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Articles() {
  return (
    <main className="flex min-h-screen  bg-slate-100 flex-col">
      <Navbar />

      <div className="ml-[4em]  p-3 w-fit  rounded-r-md ">
        <img className="h-10" src="/assets/stepchu.svg" alt="" />
      </div>
      <div className="ml-[4em] bg-emerald-400 text-white p-3 w-fit my-4 rounded-r-md ">
        <h3 className="font-semibold text-xl">Liste des utilsiateurs </h3>
      </div>
      <div className="bg-slate-100 p-4  min-w-full ">
        <div className="ml-[4em]">
          <div className="p-5">
            <h1 className="text-indigo-800 text-2xl"> Bar des recherches </h1>
            <p className="text-slate-600 text-sm">
              
              liste des elements que je fais les choses.
            </p>
          </div>
          <div className="bg-white p-8 mx-5 my-6 rounded-md min-h-[5em] flex flex-row justify-around gap-4">
            <input
              className="w-1/3 bg-slate-50 shadow p-3 rounded-md text-slate-700"
              placeholder="0000-00-00"
              value="2023-12-22"
              type="date"
              name="start_date"
            />
            <input
              className="w-1/3 bg-slate-50 shadow p-3 rounded-md text-slate-700"
              placeholder="0000-00-00"
              value="2023-12-22"
              type="date"
              name="fin_date"
            />

            <button
              className="w-1/6 text-sm  border-none bg-indigo-600 shadow p-3 rounded-md text-white"
              type="button"
              name="submit"
              title="Chercher"
            >
              
              Chercher
            </button>
            <button
              className="w-1/6 text-sm  border-none bg-emerald-400 shadow p-3 rounded-md text-white"
              type="button"
              name="submit"
              title="Chercher"
            >
              
              Télécahrger
            </button>
          </div>
        </div>
        <div className="ml-[4em]">
          <div className="p-5">
            <h1 className="text-indigo-800 text-2xl"> Bar des recherches </h1>
            <p className="text-slate-600 text-sm">
              
              liste des elements que je fais les choses.
            </p>
          </div>
          <div className="bg-white p-8 mx-5 my-6 rounded-md min-h-[5em] flex flex-row justify-around gap-4">
            <input
              className="w-full bg-slate-50 shadow p-3 rounded-md text-slate-700"
              placeholder="Chercher ..."
              type="text"
              name="search"
            />
            <button
              className="w-1/6 border-none bg-indigo-600 shadow p-3 rounded-md text-white"
              type="button"
              name="submit"
              title="Chercher"
            >
              
              Chercher
            </button>
          </div>
        </div>
        <div className="ml-[4em]">
          <div className="p-5">
            <h1 className="text-indigo-800 text-2xl"> Bar des recherches </h1>
            <p className="text-slate-600 text-sm">
              
              liste des elements que je fais les choses.
            </p>
          </div>
          <div className="bg-white p-8 m-4 my-6 rounded-md min-h-[5em] flex flex-col justify-around gap-4">
            <div className="bg-slate-50 px-4 py-3 rounded-md flex flex-row w-full justify-between text-slate-600 text-center">
              <span>Nom de fichier</span>
              <span>Date de début</span>
              <span>Date de fin</span>
              <span>Actions</span>
            </div>
            <div className="bg-slate-50 px-4 py-3 rounded-md flex flex-row w-full justify-between text-slate-600">
              <span className="flex flex-row justify-center items-center">
                <FontAwesomeIcon icon={faFile} className="w-[1em] mx-3 text-indigo-500" />
                Nom de fichier
              </span>
              <span className="flex flex-row justify-center items-center">
                2023-22-22
              </span>
              <span className="flex flex-row justify-center items-center">
                2023-22-22
              </span>
              <span className="flex flex-row justify-center items-center">
                <a href="#" className="bg-white  rounded-full">
                  
                  <img
                    className="bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2"
                    src="/assets/details.svg"
                  />
                </a>
                <a href="#" className="bg-white  rounded-full">
                  
                  <img
                    className="bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2"
                    src="/assets/download.svg"
                  />
                </a>
                <a href="#" className="bg-white  rounded-full">
                  
                  <img
                    className="bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2"
                    src="/assets/delete.svg"
                  />
                </a>
              </span>
            </div>
            <div className="bg-slate-50 px-4 py-3 rounded-md flex flex-row w-full justify-between text-slate-600">
              <span className="flex flex-row justify-center items-center">
                <FontAwesomeIcon icon={faFile} className="w-[1em] mx-3 text-indigo-500" />
                Nom de fichier
              </span>
              <span className="flex flex-row justify-center items-center">
                2023-22-22
              </span>
              <span className="flex flex-row justify-center items-center">
                2023-22-22
              </span>
              <span className="flex flex-row justify-center items-center">
                <a href="#" className="bg-white  rounded-full">
                  
                  <img
                    className="bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2"
                    src="/assets/details.svg"
                  />
                </a>
                <a href="#" className="bg-white  rounded-full">
                  
                  <img
                    className="bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2"
                    src="/assets/download.svg"
                  />
                </a>
                <a href="#" className="bg-white  rounded-full">
                  
                  <img
                    className="bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2"
                    src="/assets/delete.svg"
                  />
                </a>
              </span>
            </div>
            <div className="bg-slate-50 px-4 py-3 rounded-md flex flex-row w-full justify-between text-slate-600">
              <span className="flex flex-row justify-center items-center">
                <FontAwesomeIcon icon={faFile} className="w-[1em] mx-3 text-indigo-500" />
                Nom de fichier
              </span>
              <span className="flex flex-row justify-center items-center">
                2023-22-22
              </span>
              <span className="flex flex-row justify-center items-center">
                2023-22-22
              </span>
              <span className="flex flex-row justify-center items-center">
                <a href="#" className="bg-white  rounded-full">
                  
                  <img
                    className="bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2"
                    src="/assets/details.svg"
                  />
                </a>
                <a href="#" className="bg-white  rounded-full">
                  
                  <img
                    className="bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2"
                    src="/assets/download.svg"
                  />
                </a>
                <a href="#" className="bg-white  rounded-full">
                  
                  <img
                    className="bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2"
                    src="/assets/delete.svg"
                  />
                </a>
              </span>
            </div>
            <div className="bg-slate-50 px-4 py-3 rounded-md flex flex-row w-full justify-between text-slate-600">
              <span className="flex flex-row justify-center items-center">
                <FontAwesomeIcon icon={faFile} className="w-[1em] mx-3 text-indigo-500" />
                Nom de fichier
              </span>
              <span className="flex flex-row justify-center items-center">
                2023-22-22
              </span>
              <span className="flex flex-row justify-center items-center">
                2023-22-22
              </span>
              <span className="flex flex-row justify-center items-center">
                <a href="#" className="bg-white  rounded-full">
                  
                  <img
                    className="bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2"
                    src="/assets/details.svg"
                  />
                </a>
                <a href="#" className="bg-white  rounded-full">
                  
                  <img
                    className="bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2"
                    src="/assets/download.svg"
                  />
                </a>
                <a href="#" className="bg-white  rounded-full">
                  
                  <img
                    className="bg-slate-100 hover:scale-125 transition-all w-[2.5em] h-[2.5em] rounded-full p-2"
                    src="/assets/delete.svg"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Articles;
