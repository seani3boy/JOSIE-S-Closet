export const Button = ({ children, ...props }) => (
  <button className="rounded px-3 py-2" {...props}>{children}</button>
);
