/* eslint-disable import/prefer-default-export */
import MetaJsonService from './services/metaJson';

export const checarVersao = async (PackageJson, urlMetaJson, callback) => {
  const { version } = PackageJson;
  const {
    version: metaVersion,
    error,
  } = await MetaJsonService.get(urlMetaJson);

  const isOutdated = version < metaVersion;

  if (callback) {
    callback();
  }

  if (error) {
    return {
      error,
    };
  }

  return {
    version,
    metaVersion,
    isOutdated,
  };
};
