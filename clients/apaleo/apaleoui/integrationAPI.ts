import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { IntegrationAPIContext } from "./integrationAPIContext";
import {
    IntegrationAPIOptionalParams,
    IntegrationAPIIntegrationUiIntegrationsGetResponse,
    Enum2,
    IntegrationAPIIntegrationUiIntegrationsByTargetByIdGetResponse,
    ReplaceUiIntegrationModel,
    Enum3,
    IntegrationAPIIntegrationUiIntegrationsByTargetByIdPutResponse,
    Enum5,
    IntegrationAPIIntegrationUiIntegrationsByTargetByIdDeleteResponse,
    Enum6,
    IntegrationAPIIntegrationUiIntegrationsByTargetGetResponse,
    CreateUiIntegrationModel,
    Enum7,
    IntegrationAPIIntegrationUiIntegrationsByTargetPostResponse,
    Enum9,
    IntegrationAPIIntegrationUiIntegrationsByTargetByIdTestGetResponse
} from "./models";

export class IntegrationAPI extends IntegrationAPIContext {
    /**
     * Initializes a new instance of the IntegrationAPI class.
     * @param credentials
     * @param $host server parameter
     * @param options The parameter options
     */
    constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, $host: string, options?: IntegrationAPIOptionalParams) {
        super(credentials, $host, options);
    }

    /**
     * <br>You must have this scope: 'integration:ui-integrations.manage'.
     * @param options The options parameters.
     */
    integrationUiIntegrationsGet(
        options?: coreHttp.OperationOptions
    ): Promise<IntegrationAPIIntegrationUiIntegrationsGetResponse> {
        const operationArguments: coreHttp.OperationArguments = {
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(
            operationArguments,
            integrationUiIntegrationsGetOperationSpec
        ) as Promise<IntegrationAPIIntegrationUiIntegrationsGetResponse>;
    }

    /**
     * <br>You must have this scope: 'integration:ui-integrations.manage'.
     * @param target
     * @param id
     * @param options The options parameters.
     */
    integrationUiIntegrationsByTargetByIdGet(
        target: Enum2,
        id: string,
        options?: coreHttp.OperationOptions
    ): Promise<IntegrationAPIIntegrationUiIntegrationsByTargetByIdGetResponse> {
        const operationArguments: coreHttp.OperationArguments = {
            target,
            id,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(
            operationArguments,
            integrationUiIntegrationsByTargetByIdGetOperationSpec
        ) as Promise<IntegrationAPIIntegrationUiIntegrationsByTargetByIdGetResponse>;
    }

    /**
     * <br>You must have this scope: 'integration:ui-integrations.manage'.
     * @param target
     * @param id
     * @param body
     * @param options The options parameters.
     */
    integrationUiIntegrationsByTargetByIdPut(
        target: Enum3,
        id: string,
        body: ReplaceUiIntegrationModel,
        options?: coreHttp.OperationOptions
    ): Promise<IntegrationAPIIntegrationUiIntegrationsByTargetByIdPutResponse> {
        const operationArguments: coreHttp.OperationArguments = {
            target,
            id,
            body,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(
            operationArguments,
            integrationUiIntegrationsByTargetByIdPutOperationSpec
        ) as Promise<IntegrationAPIIntegrationUiIntegrationsByTargetByIdPutResponse>;
    }

    /**
     * <br>You must have this scope: 'integration:ui-integrations.manage'.
     * @param target
     * @param id
     * @param options The options parameters.
     */
    integrationUiIntegrationsByTargetByIdDelete(
        target: Enum5,
        id: string,
        options?: coreHttp.OperationOptions
    ): Promise<IntegrationAPIIntegrationUiIntegrationsByTargetByIdDeleteResponse> {
        const operationArguments: coreHttp.OperationArguments = {
            target,
            id,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(
            operationArguments,
            integrationUiIntegrationsByTargetByIdDeleteOperationSpec
        ) as Promise<IntegrationAPIIntegrationUiIntegrationsByTargetByIdDeleteResponse>;
    }

    /**
     * <br>You must have this scope: 'integration:ui-integrations.manage'.
     * @param target
     * @param options The options parameters.
     */
    integrationUiIntegrationsByTargetGet(
        target: Enum6,
        options?: coreHttp.OperationOptions
    ): Promise<IntegrationAPIIntegrationUiIntegrationsByTargetGetResponse> {
        const operationArguments: coreHttp.OperationArguments = {
            target,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(
            operationArguments,
            integrationUiIntegrationsByTargetGetOperationSpec
        ) as Promise<IntegrationAPIIntegrationUiIntegrationsByTargetGetResponse>;
    }

    /**
     * <br>You must have this scope: 'integration:ui-integrations.manage'.
     * @param target
     * @param body
     * @param options The options parameters.
     */
    integrationUiIntegrationsByTargetPost(
        target: Enum7,
        body: CreateUiIntegrationModel,
        options?: coreHttp.OperationOptions
    ): Promise<IntegrationAPIIntegrationUiIntegrationsByTargetPostResponse> {
        const operationArguments: coreHttp.OperationArguments = {
            target,
            body,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(
            operationArguments,
            integrationUiIntegrationsByTargetPostOperationSpec
        ) as Promise<IntegrationAPIIntegrationUiIntegrationsByTargetPostResponse>;
    }

    /**
     * Tests that the process of getting the public url from the provided url is done correctly.
     * If there are any errors with the process, it will provide information on what might have gone wrong.
     * @param target Target for the integration
     * @param id Id of the integration to be tested
     * @param options The options parameters.
     */
    integrationUiIntegrationsByTargetByIdTestGet(
        target: Enum9,
        id: string,
        options?: coreHttp.OperationOptions
    ): Promise<IntegrationAPIIntegrationUiIntegrationsByTargetByIdTestGetResponse> {
        const operationArguments: coreHttp.OperationArguments = {
            target,
            id,
            options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
        };
        return this.sendOperationRequest(
            operationArguments,
            integrationUiIntegrationsByTargetByIdTestGetOperationSpec
        ) as Promise<IntegrationAPIIntegrationUiIntegrationsByTargetByIdTestGetResponse>;
    }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const integrationUiIntegrationsGetOperationSpec: coreHttp.OperationSpec = {
    path: "/integration/v1/ui-integrations",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.UiIntegrationListModel
        },
        204: {},
        400: {},
        401: {},
        403: {},
        422: {
            bodyMapper: Mappers.MessageItemCollection
        },
        500: {},
        503: {}
    },
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept],
    serializer
};
const integrationUiIntegrationsByTargetByIdGetOperationSpec: coreHttp.OperationSpec = {
    path: "/integration/v1/ui-integrations/{target}/{id}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.UiIntegrationItemModel
        },
        400: {},
        401: {},
        403: {},
        404: {},
        422: {
            bodyMapper: Mappers.MessageItemCollection
        },
        500: {},
        503: {}
    },
    urlParameters: [Parameters.$host, Parameters.target, Parameters.id],
    headerParameters: [Parameters.accept],
    serializer
};
const integrationUiIntegrationsByTargetByIdPutOperationSpec: coreHttp.OperationSpec = {
    path: "/integration/v1/ui-integrations/{target}/{id}",
    httpMethod: "PUT",
    responses: {
        200: {},
        400: {},
        401: {},
        403: {},
        404: {},
        415: {},
        422: {
            bodyMapper: Mappers.MessageItemCollection
        },
        500: {},
        503: {}
    },
    requestBody: Parameters.body,
    urlParameters: [Parameters.$host, Parameters.id, Parameters.target1],
    headerParameters: [Parameters.contentType, Parameters.accept1],
    mediaType: "json",
    serializer
};
const integrationUiIntegrationsByTargetByIdDeleteOperationSpec: coreHttp.OperationSpec = {
    path: "/integration/v1/ui-integrations/{target}/{id}",
    httpMethod: "DELETE",
    responses: {
        400: {},
        401: {},
        403: {},
        404: {},
        422: {
            bodyMapper: Mappers.MessageItemCollection
        },
        500: {},
        503: {}
    },
    urlParameters: [Parameters.$host, Parameters.id, Parameters.target2],
    headerParameters: [Parameters.accept1],
    serializer
};
const integrationUiIntegrationsByTargetGetOperationSpec: coreHttp.OperationSpec = {
    path: "/integration/v1/ui-integrations/{target}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.UiIntegrationListModel
        },
        400: {},
        401: {},
        403: {},
        422: {
            bodyMapper: Mappers.MessageItemCollection
        },
        500: {},
        503: {}
    },
    urlParameters: [Parameters.$host, Parameters.target3],
    headerParameters: [Parameters.accept],
    serializer
};
const integrationUiIntegrationsByTargetPostOperationSpec: coreHttp.OperationSpec = {
    path: "/integration/v1/ui-integrations/{target}",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Mappers.UiIntegrationCreatedModel
        },
        400: {},
        401: {},
        403: {},
        404: {},
        415: {},
        422: {
            bodyMapper: Mappers.MessageItemCollection
        },
        500: {},
        503: {}
    },
    requestBody: Parameters.body1,
    urlParameters: [Parameters.$host, Parameters.target4],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
const integrationUiIntegrationsByTargetByIdTestGetOperationSpec: coreHttp.OperationSpec = {
    path: "/integration/v1/ui-integrations/{target}/{id}/$test",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.UiIntegrationTestResultModel
        },
        400: {},
        401: {},
        403: {},
        404: {},
        422: {
            bodyMapper: Mappers.MessageItemCollection
        },
        500: {},
        503: {}
    },
    urlParameters: [Parameters.$host, Parameters.id, Parameters.target5],
    headerParameters: [Parameters.accept],
    serializer
};
