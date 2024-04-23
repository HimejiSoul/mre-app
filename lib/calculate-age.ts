export function calculateAge(birthDate: Date | string): number {
  if (birthDate === '') {
    return 0;
  }

  const currentDate: Date = new Date();
  const birthDateObj: Date = new Date(birthDate);

  let age: number = currentDate.getFullYear() - birthDateObj.getFullYear();
  const monthDiff: number = currentDate.getMonth() - birthDateObj.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }

  return age;
}
