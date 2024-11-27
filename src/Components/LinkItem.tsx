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
      <div className="overflow-hidden mb-3">
        <img
          {...attributes}
          {...listeners}
          src="/images/icon-drag-and-drop.svg"
          alt="icon-drag-and-drop"
          className="inline mr-2 w-4"
        />
        <h4 className="inline font-semibold text-[#737373]">Link#{place}</h4>
        <button
          className="float-right text-base text-[#737373] "
          onClick={() => handleRemove(id)}
          aria-label={`Remove link at position ${place}`}
        >
          Remove
        </button>
      </div>
      <PlatformSelector id={id} platform={platform} />

      <Input
        name={id}
        validation={platforms.get(platform)?.validation}
        lable={"Link"}
        defaultValue={user.links.find((link) => link.id === id)?.url}
        placeholder={platforms.get(platform)?.placeholder || ""}
        type={"url"}
        backgroundImage="/images/icon-link.svg"
      />
    </div>
  );
};

export default LinkItem;
