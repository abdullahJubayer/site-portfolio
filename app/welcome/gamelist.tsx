import { GameItem } from "./GameItem";

export const GameList: React.FC = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-x-2 md:gap-y-8 mt-4 md:mt-8 px-4 md:px-28">
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <li key={item} className="mx-6">
          <a>
            <GameItem />
          </a>
        </li>
      ))}
    </ul>
  );
};
