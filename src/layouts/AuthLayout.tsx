export const AuthLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="min-h-dvh bg-primary-900 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md rounded-3xl border border-primary-100 bg-white p-8 shadow-xl">
        {children}
      </div>
    </div>
  );
};
