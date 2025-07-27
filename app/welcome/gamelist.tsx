import { GameItem } from "./GameItem";

export const GameList: React.FC = () => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-16">
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
