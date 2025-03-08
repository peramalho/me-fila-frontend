type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  isError?: boolean;
  errorMessage?: string;
};

export function Input({ label, isError, errorMessage, id, ...rest }: Props) {
  return (
    <div>
      <label htmlFor={id} className="text-xl">
        {label}
      </label>
      <input
        id={id}
        className="bg-white text-3xl text-black px-3 py-2 mt-1 rounded-md w-full"
        {...rest}
      />
      {isError && errorMessage && (
        <p className="mt-3 text- text-red-400">{errorMessage}</p>
      )}
    </div>
  );
}
