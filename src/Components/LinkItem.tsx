import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { platforms } from "../Platforms";
import Input from "./Input";
import PlatformSelector from "./PlatformSelector";
import useLinkManagement from "../hooks/useLinkManagement";
import { useContext } from "react";
import { UserContext } from "../Context/userContext";

const LinkItem = ({
  id,
  place,
  platform,
}: {
  id: string;
  platform: string;
  place: number;
}) => {
  const { attributes, setNodeRef, listeners, transform, transition } =
    useSortable({ id });
  const { handleRemove } = useLinkManagement();
  const { user } = useContext(UserContext);
  return (
    <div
      ref={setNodeRef}
      style={{ transition, transform: CSS.Transform.toString(transform) }}
      className="p-5 rounded-lg bg-[#FAFAFA] mb-6 touch-none"
    >
      <div className="overflow-hidden mb-3 -m-5">
        <span {...attributes} {...listeners} className="inline-block p-5 pb-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="8"
            className="select-none inline mr-2"
            fill="none"
            viewBox="0 0 12 6"
          >
            <path fill="#737373" d="M0 0h12v1H0zM0 5h12v1H0z" />
          </svg>

          <h4 className="inline-block font-semibold text-[#737373] select-none">
            Link#{place}
          </h4>
        </span>
        <button
          className="float-right text-base text-[#737373] p-5 pb-3 select-none "
          onClick={() => handleRemove(id)}
          aria-label={`Remove link at position ${place}`}
        >
          Remove
        </button>
      </div>
      <PlatformSelector id={id} platform={platform} />

      <Input
        id={id}
        validation={platforms.get(platform)?.validation}
        lable={"Link"}
        defaultValue={user.links.find((link) => link.id === id)?.url}
        placeholder={platforms.get(platform)?.placeholder || ""}
        type={"url"}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            className="absolute top-4 left-[14px]"
          >
            <path
              fill="#737373"
              d="M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z"
            />
          </svg>
        }
      />
    </div>
  );
};

export default LinkItem;
