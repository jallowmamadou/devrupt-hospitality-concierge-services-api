import * as coreHttp from "@azure/core-http";
import { ApaleoInventoryAPIOptionalParams } from "./models";

const packageName = "ApaleoInventoryAPI";
const packageVersion = "1.0.0";

export class ApaleoInventoryAPIContext extends coreHttp.ServiceClient {
    $host: string;

    /**
     * Initializes a new instance of the ApaleoInventoryAPIContext class.
     * @param credentials
     * @param $host server parameter
     * @param options The parameter options
     */
    constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, $host: string, options?: ApaleoInventoryAPIOptionalParams) {
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
