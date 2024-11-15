import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import LinkItem from "./LinkItem";
import useLinkManagement from "../hooks/useLinkManagement";

const LinksList = () => {
  const { handleSort, user } = useLinkManagement();

  return (
    <DndContext onDragEnd={handleSort} collisionDetection={closestCorners}>
      <SortableContext
        items={user.links}
        strategy={verticalListSortingStrategy}
      >
        <div className="min-h-[386px]">
          {user.links.map((item, index) => {
            return (
              <LinkItem
                id={item.id}
                key={item.id}
                place={index + 1}
                platform={item.platform}
              />
            );
          })}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default LinksList;
