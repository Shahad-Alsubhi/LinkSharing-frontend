import { useContext } from "react";
import { UserContext } from "../Context/userContext";
import { arrayMove } from "@dnd-kit/sortable";
import { DragEndEvent } from "@dnd-kit/core";
import { SelectChangeEvent } from "@mui/material";
import { v4 } from "uuid";
import { successCopy } from "../utils/Alerts";

const useLinkManagement = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSort = (e: DragEndEvent) => {
    const { active, over } = e;
    if (active.id === over?.id) return;
    setUser({
      ...user,
      links: (() => {
        const oldIndex = user.links.findIndex((link) => link.id === active.id);
        const newIndex = user.links.findIndex((link) => link.id === over?.id);
        return arrayMove(user.links, oldIndex, newIndex);
      })(),
    });
  };
  const handleRemove = (id: string) => {
    const updatedLinks = user.links.filter((link) => link.id !== id);
    setUser({ ...user, links: updatedLinks });
  };
  const handleAddLink = () => {
    setUser({
      ...user,
      links: [...user.links, { id: v4(), platform: "GitHub" }],
    });
  };
  const handlePlatformChange = (event: SelectChangeEvent, id: string) => {
    const newLinkValue = event.target.value;
    const index = user.links.findIndex((link) => link.id === id);
    const updatedLinks = [...user.links];
    updatedLinks[index] = {
      ...updatedLinks[index],
      platform: newLinkValue,
    };
    setUser({ ...user, links: updatedLinks });
  };

  const handleCopy = (firstName:string,lastName:string,id:string) => {
    navigator.clipboard.writeText(`link-sharing-project.vercel.app/profile/${firstName}-${lastName}/${id}`);

    successCopy();
  };

  return {
    handleSort,
    handleRemove,
    handleAddLink,
    handlePlatformChange,
    handleCopy,
    user,
  };
};

export default useLinkManagement;
