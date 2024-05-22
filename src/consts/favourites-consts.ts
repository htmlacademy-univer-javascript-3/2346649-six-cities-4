export enum FavouritesStatus {
  ADD = 1,
  DELETE = 0
}

export type FavouritesData = {
  id: string | undefined;
  status: FavouritesStatus;
};
