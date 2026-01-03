import {
  Form,
  RunnerPreferenceProvider,
  UIToggle,
  UIButton,
} from "@suwatte/daisuke"
import { KavitaStore } from "../store"
import { clearCache } from "../utils"

export const KavitaPreferenceProvider: RunnerPreferenceProvider = {
  getPreferenceMenu: async function (): Promise<Form> {
    return {
      sections: [
        {
          header: "Core",
          children: [
            UIToggle({
              id: "continuePointCover",
              title:
                "Change the Series Cover to the Volume Cover at Continue Point (will make more calls to the server)",
              value: await KavitaStore.continuePointCover(),
              async didChange(value) {
                await ObjectStore.set("continuePointCover", value)
              },
            }),
          ],
        },
        {
          header: "Debug",
          children: [
            UIToggle({
              id: "clearCache",
              title: "Clear Cache",
              value: await KavitaStore.clearCache(),
              async didChange(value) {
                await ObjectStore.set("clearCache", value)
                if (value) await clearCache()
                await ObjectStore.set("clearCache", false)
              },
            }),
          ],
        },
      ],
    }
  },
}
