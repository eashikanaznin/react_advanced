import { Fragment } from "react";

export function Skeleton() {
  return <div className="skeleton" />;
}

export function SkeletonItems({ number, children }) {
  return (
    <>
      {Array.from({ length: number }).map((_, i) => (
        <Fragment key={i}>
          {children}
        </Fragment>
      ))}
    </>
  );
}
