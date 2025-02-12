export function ScrollArea({ children, height = '300px' }) {
  return (
    <div className="overflow-auto rounded-lg border p-4" style={{ maxHeight: height }}>
      {children}
    </div>
  );
}