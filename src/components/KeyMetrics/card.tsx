import { ICardProps } from "../../types/card";

export default function Card({ title, value }: ICardProps) {
  return (
    <div className="p-5 rounded-lg shadow-sm border border-gray-400 min-w-[250px]">
      <p className="font-medium mb-4 text-2xl">{title}</p>
      <p className="text-3xl font-light">{value}</p>
    </div>
  )
}