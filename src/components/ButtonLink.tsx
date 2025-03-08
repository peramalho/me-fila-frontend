import clsx from "clsx";
import { Link, LinkProps } from "react-router";

export function ButtonLink(props: LinkProps) {
  return (
    <Link
      className={clsx(
        "text-black text-center text-3xl cursor-pointer w-full",
        "bg-white rounded-md hover:bg-gray-200 p-3"
      )}
      {...props}
    />
  );
}
