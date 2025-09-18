import { getAccessToken } from "../helper/access_token";

export function includeAccessToken(config) {
  const withoutToken = ["/users/login", "/users/register"];

  if (!withoutToken.includes(config.url)) {
    config.headers = {
      ...config.headers,
      Authorization: "Bearer " + getAccessToken(),
    };
  }

  return config;
}
