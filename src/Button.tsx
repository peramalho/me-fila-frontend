export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-white text-black cursor-pointer p-3 w-full sm:w-auto rounded-md hover:bg-gray-200 text-[40px]"
      {...props}
    />
  );
}
