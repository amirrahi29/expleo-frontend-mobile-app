import { replace } from "../../../../navigation/navigationService";

export const launchScreen = (screen: string, delay: number) => {
  setTimeout(() => {
    replace(screen);
  }, delay);
};
