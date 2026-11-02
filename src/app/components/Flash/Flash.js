import React from "react";
import { faBell, faCheckCircle, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"

export default function Flash({ type }) {
  let icon, color, message;

  switch (type) {
    case "failed":
      icon = faBell;
      color = "red";
      message =  "Les données que vous avez saisies sont erronées ou incorrectes.";
      break;

    case "successed":
      icon = faCheckCircle;
      color = "green";
      message =  "Les données que vous avez saisies sont correctes.";
      break;

    case "warn":
      icon = faWarning;
      color = "orange";
      message =  "Les données que vous avez saisies sont erronées ou incorrectes.";
      break;

    default:
      return null; // Handle unrecognized type
  }

  return (
    <div
      className={`relative flex flex-row hover:border-solid hover:border-2 hover:border-emerald-500 items-center justify-center py-3 pl-4 px-6 my-3 leading-normal text-${color}-600 bg-${color}-50 rounded-lg`}
      role="alert"
    >
      <FontAwesomeIcon icon={icon} className="w-[20px] mx-3" />
      <p>{message}</p>
    </div>
  );
}

 
