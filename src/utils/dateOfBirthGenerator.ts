import { faker } from "@faker-js/faker";

export const dateOfBirthGenerator = () => {
  const fakeDate = faker.date.between(
    "1980-01-01T00:00:00.000Z",
    "2005-01-01T00:00:00.000Z"
  );

  const objectDate = new Date(fakeDate);
  let day = objectDate.getDate().toString().padStart(2, "0");
  let month = (objectDate.getMonth() + 1).toString().padStart(2, "0");
  const year = objectDate.getFullYear();

  return day + "/" + month + "/" + year;
};
