import { getAccessToken } from "../helper/access_token";

export function includeAccessToken(config) {
  const withoutToken = ["/users/login", "/users/register"];

  if (!config.url.includes(withoutToken)) {
    config.headers = {
      Authorization: "Bearer " + getAccessToken(),
    };
  }

  return config;
}
