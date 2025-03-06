type Props = {
  children: React.ReactNode;
};

export function Wrapper({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="flex-1 flex flex-col min-w-[440px] py-16 items-center gap-32">
        {children}
      </div>
    </div>
  );
}
