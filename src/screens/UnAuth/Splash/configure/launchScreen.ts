import { navigate } from "../../../../navigation/navigationService";

export const launchScreen = (screen: string, delay: number) => {
  setTimeout(() => {
    navigate(screen);
  }, delay);
};
