interface ImgTypes {
  [key: string]: string;
}

interface ColorTypes {
  [key: string]: string;
}

interface SizeTypes {
  [key: string]: string;
}

interface DeviceTypes {
  [key: string]: string;
}

interface IWrapper {
  children: React.ReactNode;
}

interface IHeader {
  title: string;
}

interface ICheckbox {
  id: string;
  name: string;
  checked?: boolean;
  onChange?: () => void;
}

interface ILoader {
  active: boolean;
}

interface IFilter {
  state?: string;
}

export type {
  ImgTypes,
  ColorTypes,
  SizeTypes,
  DeviceTypes,
  IWrapper,
  IHeader,
  ICheckbox,
  ILoader,
  IFilter,
};
