import {
  HiSolidSortAscending,
  HiSolidSortDescending,
  HiSolidPencilAlt,
  HiSolidTrash,
} from "oh-vue-icons/icons";

export const EditIcon = HiSolidPencilAlt;
export const DeleteIcon = HiSolidTrash;
export const AscSortIcon = HiSolidSortAscending;
export const DescSortIcon = HiSolidSortDescending;

export const iconList = [
  { name: "edit", icon: EditIcon.name },
  { name: "delete", icon: DeleteIcon.name },
  { name: "asc", icon: AscSortIcon.name },
  { name: "desc", icon: DescSortIcon.name },
];
