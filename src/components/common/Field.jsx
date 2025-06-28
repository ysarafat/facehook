import { Children } from "react";

export default function Field({ children, label, error, htmlFor }) {
  const id = htmlFor || getChildId(children);
  return (
    <div className="form-control">
      {label && (
        <label className="auth-label" htmlFor={id}>
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <div role="alert" className="text-red-600">
          {error.message}
        </div>
      )}
    </div>
  );
}

const getChildId = (children) => {
  const child = Children.only(children);

  if ("id" in child.props) {
    return child.props.id;
  }
};
