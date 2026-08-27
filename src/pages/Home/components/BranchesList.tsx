import type { Branch } from "api/mappers/branches";

interface BranchesListProps {
  branches: Branch[];
}

export const BranchesList = ({ branches }: BranchesListProps) => {
  return (
    <ul className="space-y-3">
      {branches.map((branch) => (
        <li
          key={branch.id}
          className="p-3 bg-gray-50 border border-gray-100 rounded-lg hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-colors"
        >
          <p className="font-medium text-gray-700">{branch.name}</p>
        </li>
      ))}
    </ul>
  );
};
