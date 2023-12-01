import { PluginInjector, SettingValues } from "../index";
import { AudioResolverPromise } from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default async (): Promise<void> => {
  const AudioResolver = await AudioResolverPromise;
  PluginInjector.before(AudioResolver, "exports", ([sound]) => {
    return [
      sound.replace("call_ringing.mp3", SettingValues.get("ringtone", defaultSettings.ringtone)),
    ];
  });
};
