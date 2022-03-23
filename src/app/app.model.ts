export interface AppResponseModel<T> {
  message: string;
  status: boolean;
  statusCode: number;
  data: T;
}

export interface CountryModel {
  name: string;
  code: string;
  emoji: string;
  unicode: string;
  image: string;
}
