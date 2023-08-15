export interface Ifeatures {
  id: string;
  name: string;
  img: string;
  desc: string;
  bullet: boolean;
  subFeatures: IsubFeatures[];
}

export interface IsubFeatures {
  id: string;
  name: string;
  desc: string;
}
