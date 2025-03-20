export function ErrorMessage({ children }: { children: React.ReactNode }) {
  return <p className="text-red-400 text-lg">{children}</p>;
}
