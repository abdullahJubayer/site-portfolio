export const AppsAndGames: React.FC<{
  ref: React.RefObject<HTMLDivElement | null>;
}> = ({ ref }) => {
  return (
    <div
      id="games"
      className="text-gray-800 text-center px-4 md:px-28 mt-16 md:mt-24 scroll-mt-32"
      ref={ref}
    >
      <h1 className="text-2xl md:text-6xl font-bold">Our Apps & Games</h1>
    </div>
  );
};
