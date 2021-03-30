import * as coreHttp from "@azure/core-http";
import { IntegrationAPIOptionalParams } from "./models";

const packageName = "IntegrationAPI";
const packageVersion = "1.0.0";

export class IntegrationAPIContext extends coreHttp.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the IntegrationAPIContext class.
   * @param credentials
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, $host: string, options?: IntegrationAPIOptionalParams) {
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{$host}";

    // Parameter assignments
    this.$host = $host;
  }
}
