export default function Validation(values) {
  const errors = {};

  const telephone_pattern =
    /^[+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

  if (values.name === "") {
    errors.name = "Заповніть поле Ім'я! ";
  }
  if (values.telephone === "") {
    errors.telephone = "Заповніть поле Номер телефону! ";
  } else if (!telephone_pattern.test(values.telephone)) {
    errors.telephone = "Не корректний номер телефону!";
  }
  return errors;
}
