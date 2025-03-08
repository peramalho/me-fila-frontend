import clsx from "clsx";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        "text-black text-center text-3xl cursor-pointer w-full",
        "bg-white rounded-md hover:bg-gray-200 p-3"
      )}
      {...props}
    />
  );
}
