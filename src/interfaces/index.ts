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

interface ITable {
  state?: string;
}

interface IHeader {
  title: string;
}

interface ITHeader {
  status?: string;
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
  ITable,
  IWrapper,
  IHeader,
  ITHeader,
  ICheckbox,
  ILoader,
  IFilter,
};
