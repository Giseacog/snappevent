interface AsyncTextProps {
  height?: string;
  width?: string;
}

export const Shimmer = ({ height, width }: AsyncTextProps) => {
  return (
    <div style={{ height: height || "1rem", width: width || "100%" }}>
      <div className="bg-primary-100/60 rounded-2xl animate-pulse w-full h-full"></div>
    </div>
  );
};
