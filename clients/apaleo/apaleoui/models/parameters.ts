import { OperationParameter, OperationURLParameter } from "@azure/core-http";
import {
  ReplaceUiIntegrationModel as ReplaceUiIntegrationModelMapper,
  CreateUiIntegrationModel as CreateUiIntegrationModelMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json, text/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const target: OperationURLParameter = {
  parameterPath: "target",
  mapper: {
    serializedName: "target",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json-patch+json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: ReplaceUiIntegrationModelMapper
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const target1: OperationURLParameter = {
  parameterPath: "target",
  mapper: {
    serializedName: "target",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const target2: OperationURLParameter = {
  parameterPath: "target",
  mapper: {
    serializedName: "target",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const target3: OperationURLParameter = {
  parameterPath: "target",
  mapper: {
    serializedName: "target",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: CreateUiIntegrationModelMapper
};

export const target4: OperationURLParameter = {
  parameterPath: "target",
  mapper: {
    serializedName: "target",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const target5: OperationURLParameter = {
  parameterPath: "target",
  mapper: {
    serializedName: "target",
    required: true,
    type: {
      name: "String"
    }
  }
};
