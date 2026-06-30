export type FarmerSignupData = {
  name: string;
  email: string;
  password: string;

  farmName: string;
  phone: string;
  identity_file: File;
  license_file: File;
  city: string;
  neighborhood: string;
  street: string;

  bankName: string;
  accountHolderName: string;
  iban: string;
};
