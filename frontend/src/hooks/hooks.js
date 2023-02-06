import { useState } from "react";
import { useDispatch } from "react-redux";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => setValue(e.target.value);
  return [value, onChange];
};

export const useSubmit = ({ createAction, action, validate, onSuccess }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  action = action || (createAction ? createAction() : undefined);

  const onSubmit = async (e) => {
    e.preventDefault();

    const errors = validate ? validate() : undefined;
    if (errors) {
      setErrors(errors);
      return;
    }
    setErrors([]);

    try {
      const res = await dispatch(action);
      const data = await res
        .clone()
        .json()
        .catch(() => res.text());

      if (data?.errors) {
        setErrors(data.errors);
      } else {
        setErrors([]);
        onSuccess?.(data || res.statusText);
      }
    } catch (error) {
      setErrors([error]);
    }
  };

  return [errors, onSubmit];
};
