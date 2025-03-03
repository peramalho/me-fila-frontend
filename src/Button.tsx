export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-white text-black cursor-pointer p-1 rounded-md hover:bg-gray-200"
      {...props}
    />
  );
}
