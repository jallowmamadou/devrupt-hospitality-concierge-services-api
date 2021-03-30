import * as coreHttp from "@azure/core-http";

export interface UiIntegrationListModel {
  uiIntegrations: UiIntegrationItemModel[];
  count: number;
}

export interface UiIntegrationItemModel {
  id: string;
  code: string;
  label: string;
  /** Dictionary of <string> */
  labelTranslations?: { [propertyName: string]: string };
  iconSource?: string;
  sourceUrl: string;
  propertyIds?: string[];
  roles?: string[];
  /**
   * Public source type means, that the browser can see the URL directly. This is true for instance, if you have Hybrid OAuth flow active.
   *
   * Private source type means, that the server will request from that source URL a public URL, which is pre-authenticated and forward that to the client.
   */
  sourceType: UiIntegrationItemModelSourceType;
  target: UiIntegrationItemModelTarget;
}

export interface MessageItemCollection {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly messages?: string[];
}

export interface ReplaceUiIntegrationModel {
  /**
   * Label to be displayed as the name of your integration.
   * For example, this is the text that is displayed on your user's apps list.
   */
  label: string;
  /**
   * Different translations for the integration label.
   * You can provide as many translations as you want.
   * You should only provide the iso code of the language for example 'en' for english and 'de' for German. No need for the country.
   * If there is not a translation for a specific language, we will display the value of the Label as default.
   */
  labelTranslations?: { [propertyName: string]: string };
  iconSource?: string;
  sourceUrl: string;
  /**
   * Public source type means, that the browser can see the URL directly. This is true for instance, if you have Hybrid OAuth flow active.
   *
   * Private source type means, that the server will request from that source URL a public URL, which is pre-authenticated and forward that to the client.
   */
  sourceType: ReplaceUiIntegrationModelSourceType;
  /**
   * List of Ids for the properties for which the integration is configured
   * If the list is empty then the integration is configured for all properties
   * Remark: Only applicable to non account level integrations
   */
  propertyIds?: string[];
  /**
   * List of Roles for which the integration is configured to be used
   * If the list is empty then the integration is configured for all roles
   */
  roles?: string[];
}

export interface CreateUiIntegrationModel {
  /**
   * Code to identify the current integration.
   *
   * The code can be any string of choosing.
   *
   * If no code is provided the integration target will be used as code.
   */
  code?: string;
  /**
   * Label to be displayed as the name of your integration.
   * For example, this is the text that is displayed on your user's apps list.
   */
  label: string;
  /**
   * Different translations for the integration label.
   * You can provide as many translations as you want.
   * You should only provide the iso code of the language for example 'en' for english and 'de' for German. No need for the country.
   * If there is not a translation for a specific language, we will display the value of the Label as default.
   */
  labelTranslations?: { [propertyName: string]: string };
  iconSource?: string;
  sourceUrl: string;
  sourceType: CreateUiIntegrationModelSourceType;
  /**
   * List of Ids for the properties for which the integration is configured
   * If the list is empty then the integration is configured for all properties
   * Remark: Only applicable to non account level integrations
   */
  propertyIds?: string[];
  /**
   * List of Roles for which the integration is configured to be used
   * If the list is empty then the integration is configured for all roles
   */
  roles?: string[];
}

export interface UiIntegrationCreatedModel {
  id: string;
}

export interface UiIntegrationTestResultModel {
  success?: boolean;
  errorType?: UiIntegrationTestResultModelErrorType;
  errorMessage?: string;
  errorContent?: string;
  receivedResponse?: string;
}

/** Known values of {@link UiIntegrationItemModelSourceType} that the service accepts. */
export const enum KnownUiIntegrationItemModelSourceType {
  Private = "Private",
  Public = "Public"
}

/**
 * Defines values for UiIntegrationItemModelSourceType. \
 * {@link KnownUiIntegrationItemModelSourceType} can be used interchangeably with UiIntegrationItemModelSourceType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **Private** \
 * **Public**
 */
export type UiIntegrationItemModelSourceType = string;

/** Known values of {@link UiIntegrationItemModelTarget} that the service accepts. */
export const enum KnownUiIntegrationItemModelTarget {
  DashboardPropertyContext = "DashboardPropertyContext",
  DashboardAccountContext = "DashboardAccountContext",
  ReservationDetailsTab = "ReservationDetailsTab",
  PropertyMenuReports = "PropertyMenuReports",
  PropertyMenuApps = "PropertyMenuApps",
  AccountMenuApps = "AccountMenuApps",
  CompanyDetailsTab = "CompanyDetailsTab"
}

/**
 * Defines values for UiIntegrationItemModelTarget. \
 * {@link KnownUiIntegrationItemModelTarget} can be used interchangeably with UiIntegrationItemModelTarget,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **DashboardPropertyContext** \
 * **DashboardAccountContext** \
 * **ReservationDetailsTab** \
 * **PropertyMenuReports** \
 * **PropertyMenuApps** \
 * **AccountMenuApps** \
 * **CompanyDetailsTab**
 */
export type UiIntegrationItemModelTarget = string;

/** Known values of {@link Enum2} that the service accepts. */
export const enum KnownEnum2 {
  DashboardPropertyContext = "DashboardPropertyContext",
  DashboardAccountContext = "DashboardAccountContext",
  ReservationDetailsTab = "ReservationDetailsTab",
  PropertyMenuReports = "PropertyMenuReports",
  PropertyMenuApps = "PropertyMenuApps",
  AccountMenuApps = "AccountMenuApps",
  CompanyDetailsTab = "CompanyDetailsTab"
}

/**
 * Defines values for Enum2. \
 * {@link KnownEnum2} can be used interchangeably with Enum2,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **DashboardPropertyContext** \
 * **DashboardAccountContext** \
 * **ReservationDetailsTab** \
 * **PropertyMenuReports** \
 * **PropertyMenuApps** \
 * **AccountMenuApps** \
 * **CompanyDetailsTab**
 */
export type Enum2 = string;

/** Known values of {@link Enum3} that the service accepts. */
export const enum KnownEnum3 {
  DashboardPropertyContext = "DashboardPropertyContext",
  DashboardAccountContext = "DashboardAccountContext",
  ReservationDetailsTab = "ReservationDetailsTab",
  PropertyMenuReports = "PropertyMenuReports",
  PropertyMenuApps = "PropertyMenuApps",
  AccountMenuApps = "AccountMenuApps",
  CompanyDetailsTab = "CompanyDetailsTab"
}

/**
 * Defines values for Enum3. \
 * {@link KnownEnum3} can be used interchangeably with Enum3,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **DashboardPropertyContext** \
 * **DashboardAccountContext** \
 * **ReservationDetailsTab** \
 * **PropertyMenuReports** \
 * **PropertyMenuApps** \
 * **AccountMenuApps** \
 * **CompanyDetailsTab**
 */
export type Enum3 = string;

/** Known values of {@link ReplaceUiIntegrationModelSourceType} that the service accepts. */
export const enum KnownReplaceUiIntegrationModelSourceType {
  Private = "Private",
  Public = "Public"
}

/**
 * Defines values for ReplaceUiIntegrationModelSourceType. \
 * {@link KnownReplaceUiIntegrationModelSourceType} can be used interchangeably with ReplaceUiIntegrationModelSourceType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **Private** \
 * **Public**
 */
export type ReplaceUiIntegrationModelSourceType = string;

/** Known values of {@link Enum5} that the service accepts. */
export const enum KnownEnum5 {
  DashboardPropertyContext = "DashboardPropertyContext",
  DashboardAccountContext = "DashboardAccountContext",
  ReservationDetailsTab = "ReservationDetailsTab",
  PropertyMenuReports = "PropertyMenuReports",
  PropertyMenuApps = "PropertyMenuApps",
  AccountMenuApps = "AccountMenuApps",
  CompanyDetailsTab = "CompanyDetailsTab"
}

/**
 * Defines values for Enum5. \
 * {@link KnownEnum5} can be used interchangeably with Enum5,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **DashboardPropertyContext** \
 * **DashboardAccountContext** \
 * **ReservationDetailsTab** \
 * **PropertyMenuReports** \
 * **PropertyMenuApps** \
 * **AccountMenuApps** \
 * **CompanyDetailsTab**
 */
export type Enum5 = string;

/** Known values of {@link Enum6} that the service accepts. */
export const enum KnownEnum6 {
  DashboardPropertyContext = "DashboardPropertyContext",
  DashboardAccountContext = "DashboardAccountContext",
  ReservationDetailsTab = "ReservationDetailsTab",
  PropertyMenuReports = "PropertyMenuReports",
  PropertyMenuApps = "PropertyMenuApps",
  AccountMenuApps = "AccountMenuApps",
  CompanyDetailsTab = "CompanyDetailsTab"
}

/**
 * Defines values for Enum6. \
 * {@link KnownEnum6} can be used interchangeably with Enum6,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **DashboardPropertyContext** \
 * **DashboardAccountContext** \
 * **ReservationDetailsTab** \
 * **PropertyMenuReports** \
 * **PropertyMenuApps** \
 * **AccountMenuApps** \
 * **CompanyDetailsTab**
 */
export type Enum6 = string;

/** Known values of {@link Enum7} that the service accepts. */
export const enum KnownEnum7 {
  DashboardPropertyContext = "DashboardPropertyContext",
  DashboardAccountContext = "DashboardAccountContext",
  ReservationDetailsTab = "ReservationDetailsTab",
  PropertyMenuReports = "PropertyMenuReports",
  PropertyMenuApps = "PropertyMenuApps",
  AccountMenuApps = "AccountMenuApps",
  CompanyDetailsTab = "CompanyDetailsTab"
}

/**
 * Defines values for Enum7. \
 * {@link KnownEnum7} can be used interchangeably with Enum7,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **DashboardPropertyContext** \
 * **DashboardAccountContext** \
 * **ReservationDetailsTab** \
 * **PropertyMenuReports** \
 * **PropertyMenuApps** \
 * **AccountMenuApps** \
 * **CompanyDetailsTab**
 */
export type Enum7 = string;

/** Known values of {@link CreateUiIntegrationModelSourceType} that the service accepts. */
export const enum KnownCreateUiIntegrationModelSourceType {
  Private = "Private",
  Public = "Public"
}

/**
 * Defines values for CreateUiIntegrationModelSourceType. \
 * {@link KnownCreateUiIntegrationModelSourceType} can be used interchangeably with CreateUiIntegrationModelSourceType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **Private** \
 * **Public**
 */
export type CreateUiIntegrationModelSourceType = string;

/** Known values of {@link Enum9} that the service accepts. */
export const enum KnownEnum9 {
  DashboardPropertyContext = "DashboardPropertyContext",
  DashboardAccountContext = "DashboardAccountContext",
  ReservationDetailsTab = "ReservationDetailsTab",
  PropertyMenuReports = "PropertyMenuReports",
  PropertyMenuApps = "PropertyMenuApps",
  AccountMenuApps = "AccountMenuApps",
  CompanyDetailsTab = "CompanyDetailsTab"
}

/**
 * Defines values for Enum9. \
 * {@link KnownEnum9} can be used interchangeably with Enum9,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **DashboardPropertyContext** \
 * **DashboardAccountContext** \
 * **ReservationDetailsTab** \
 * **PropertyMenuReports** \
 * **PropertyMenuApps** \
 * **AccountMenuApps** \
 * **CompanyDetailsTab**
 */
export type Enum9 = string;

/** Known values of {@link UiIntegrationTestResultModelErrorType} that the service accepts. */
export const enum KnownUiIntegrationTestResultModelErrorType {
  HttpRequestToPrivateUrlError = "HttpRequestToPrivateUrlError",
  ResponseDoesNotMeetJsonSchemaError = "ResponseDoesNotMeetJsonSchemaError",
  UrlIsNotValidError = "UrlIsNotValidError",
  ResponseContentFromPrivateUrlError = "ResponseContentFromPrivateUrlError"
}

/**
 * Defines values for UiIntegrationTestResultModelErrorType. \
 * {@link KnownUiIntegrationTestResultModelErrorType} can be used interchangeably with UiIntegrationTestResultModelErrorType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **HttpRequestToPrivateUrlError** \
 * **ResponseDoesNotMeetJsonSchemaError** \
 * **UrlIsNotValidError** \
 * **ResponseContentFromPrivateUrlError**
 */
export type UiIntegrationTestResultModelErrorType = string;

/** Contains response data for the integrationUiIntegrationsGet operation. */
export type IntegrationAPIIntegrationUiIntegrationsGetResponse = UiIntegrationListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: UiIntegrationListModel;
  };
};

/** Contains response data for the integrationUiIntegrationsByTargetByIdGet operation. */
export type IntegrationAPIIntegrationUiIntegrationsByTargetByIdGetResponse = UiIntegrationItemModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: UiIntegrationItemModel;
  };
};

/** Contains response data for the integrationUiIntegrationsByTargetByIdPut operation. */
export type IntegrationAPIIntegrationUiIntegrationsByTargetByIdPutResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Contains response data for the integrationUiIntegrationsByTargetByIdDelete operation. */
export type IntegrationAPIIntegrationUiIntegrationsByTargetByIdDeleteResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Contains response data for the integrationUiIntegrationsByTargetGet operation. */
export type IntegrationAPIIntegrationUiIntegrationsByTargetGetResponse = UiIntegrationListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: UiIntegrationListModel;
  };
};

/** Contains response data for the integrationUiIntegrationsByTargetPost operation. */
export type IntegrationAPIIntegrationUiIntegrationsByTargetPostResponse = UiIntegrationCreatedModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: UiIntegrationCreatedModel;
  };
};

/** Contains response data for the integrationUiIntegrationsByTargetByIdTestGet operation. */
export type IntegrationAPIIntegrationUiIntegrationsByTargetByIdTestGetResponse = UiIntegrationTestResultModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: UiIntegrationTestResultModel;
  };
};

/** Optional parameters. */
export interface IntegrationAPIOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
