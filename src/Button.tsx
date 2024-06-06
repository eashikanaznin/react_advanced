import type { ComponentProps } from "react";
type Buttonprops = {
  outline: boolean;
} & ComponentProps<"button">
export function Button({ outline, ...props }: Buttonprops) {
  return (
    <button
      {...props}
      style={{ border: outline ? "1px solid red" : "undefined" }}
    ></button>
  );
}
