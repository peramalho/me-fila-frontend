import clsx from "clsx";
import { Link, LinkProps } from "react-router";

export function ButtonLink(props: LinkProps) {
  return (
    <Link
      className={clsx(
        "bg-white text-black cursor-pointer p-3 w-full sm:w-auto",
        "rounded-md hover:bg-gray-200 text-[40px]"
      )}
      {...props}
    />
  );
}
