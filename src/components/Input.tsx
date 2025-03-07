type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  isError?: boolean;
  errorMessage?: string;
};

export function Input({ label, isError, errorMessage, id, ...rest }: Props) {
  return (
    <div>
      <label htmlFor={id} className="text-[30px]">
        {label}
      </label>
      <input
        id={id}
        className="bg-white text-[40px] text-black px-3 py-2 mt-1 rounded-md w-full"
        {...rest}
      />
      {isError && errorMessage && (
        <p className="mt-3 text-[20px] text-red-400">{errorMessage}</p>
      )}
    </div>
  );
}
