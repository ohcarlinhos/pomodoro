export const validateEmail = (email: string) => {
  if (email) {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return email.match(re);
  } else return false;
};

export const validatePhone = (phone: string) => {
  if (phone) {
    const re = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/;
    return phone.match(re);
  } else return false;
};

export const validateCpf = (cpf: string) => {
  if (cpf) {
    const re =
      /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/;
    return cpf.match(re);
  } else return false;
};

export const validateCep = (cep: string) => {
  if (cep) {
    const re = /^[0-9]{5}-[0-9]{3}$/;
    return cep.match(re);
  } else return false;
};
