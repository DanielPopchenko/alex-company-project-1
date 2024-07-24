import { useForm } from '@formspree/react';

export const useSubmitFormData = () => {
  const [state, handleSubmit] = useForm('xkgwovow');
  return { state, handleSubmit };
};
