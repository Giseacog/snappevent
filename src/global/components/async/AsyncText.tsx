import { Shimmer } from "./Shimmer";

interface AsyncTextProps {
  height?: string;
  width?: string;
  textNode: string | React.ReactNode;
  isLoading: boolean;
}

export const AsyncText = ({
  height,
  width,
  textNode,
  isLoading,
}: AsyncTextProps) => {
  return (
    <>
      {isLoading ? (
        <div style={{ height: height || "1rem", width: width || "100%" }}>
          <Shimmer height={height} width={width} />
        </div>
      ) : (
        <>{textNode}</>
      )}
    </>
  );
};
