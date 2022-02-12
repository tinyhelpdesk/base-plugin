export interface IExtension {
  name: string;
  version: string;
  install: () => void;
  uninstall: () => void;
}
