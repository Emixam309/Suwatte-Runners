import {
  BooleanState,
  Form,
  RunnerSetupProvider,
  UITextField,
} from "@suwatte/daisuke";
import { KavitaStore } from "../store";
import { healthCheck } from "../api";

type SetupForm = {
  host: string;
  apiKey: string;
};
export const KavitaSetupProvider: RunnerSetupProvider = {
  getSetupMenu: async function (): Promise<Form> {
    return {
      sections: [
        {
          header: "Server URL",
          children: [
            UITextField({
              id: "host",
              title: "Server URL",
              value: (await KavitaStore.host()) ?? "",
            }),
          ],
        },
        {
          header: "API Key",
          children: [
            UITextField({
              id: "apiKey",
              title: "API Key",
              value: (await KavitaStore.apiKey()) ?? "",
            }),
          ],
        }
      ],
    };
  },
  validateSetupForm: async function ({
    host,
    apiKey,
  }: SetupForm): Promise<void> {
    if (!host.endsWith("/")) host += "/";
    await ObjectStore.set("host", host);
    await ObjectStore.set("apiKey", apiKey);
    try {
      await healthCheck();
    } catch (error) {
      console.error(`${error}`);
      throw new Error("Cannot Connect to Kavita Server: " + error);
    }
  },
  isRunnerSetup: async function (): Promise<BooleanState> {
    return {
      state: !!(await KavitaStore.host()),
    };
  },
};
