import { closestCorners, DndContext, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import LinkItem from "./LinkItem";
import useLinkManagement from "../hooks/useLinkManagement";

const LinksList = () => {
  const { handleSort, user } = useLinkManagement();
  const sensors=useSensors(useSensor(PointerSensor),useSensor(TouchSensor))

  return (
    <DndContext sensors={sensors} onDragEnd={handleSort} collisionDetection={closestCorners}>
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
