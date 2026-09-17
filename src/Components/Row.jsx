function Row({ children }) {
  return (
    <div className="flex flex-row w-full justify-between gap-2">{children}</div>
  );
}

export default Row;
