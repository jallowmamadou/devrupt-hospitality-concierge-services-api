import * as coreHttp from "@azure/core-http";

export const UiIntegrationListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UiIntegrationListModel",
    modelProperties: {
      uiIntegrations: {
        serializedName: "uiIntegrations",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UiIntegrationItemModel"
            }
          }
        }
      },
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const UiIntegrationItemModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UiIntegrationItemModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String"
        }
      },
      labelTranslations: {
        serializedName: "labelTranslations",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      iconSource: {
        serializedName: "iconSource",
        type: {
          name: "String"
        }
      },
      sourceUrl: {
        serializedName: "sourceUrl",
        required: true,
        type: {
          name: "String"
        }
      },
      propertyIds: {
        serializedName: "propertyIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      roles: {
        serializedName: "roles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      sourceType: {
        serializedName: "sourceType",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MessageItemCollection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MessageItemCollection",
    modelProperties: {
      messages: {
        serializedName: "messages",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ReplaceUiIntegrationModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReplaceUiIntegrationModel",
    modelProperties: {
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String"
        }
      },
      labelTranslations: {
        serializedName: "labelTranslations",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      iconSource: {
        serializedName: "iconSource",
        type: {
          name: "String"
        }
      },
      sourceUrl: {
        serializedName: "sourceUrl",
        required: true,
        type: {
          name: "String"
        }
      },
      sourceType: {
        serializedName: "sourceType",
        required: true,
        type: {
          name: "String"
        }
      },
      propertyIds: {
        serializedName: "propertyIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      roles: {
        serializedName: "roles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CreateUiIntegrationModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateUiIntegrationModel",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        required: true,
        type: {
          name: "String"
        }
      },
      labelTranslations: {
        serializedName: "labelTranslations",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      iconSource: {
        serializedName: "iconSource",
        type: {
          name: "String"
        }
      },
      sourceUrl: {
        serializedName: "sourceUrl",
        required: true,
        type: {
          name: "String"
        }
      },
      sourceType: {
        serializedName: "sourceType",
        required: true,
        type: {
          name: "String"
        }
      },
      propertyIds: {
        serializedName: "propertyIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      roles: {
        serializedName: "roles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const UiIntegrationCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UiIntegrationCreatedModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UiIntegrationTestResultModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UiIntegrationTestResultModel",
    modelProperties: {
      success: {
        serializedName: "success",
        type: {
          name: "Boolean"
        }
      },
      errorType: {
        serializedName: "errorType",
        type: {
          name: "String"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "String"
        }
      },
      errorContent: {
        serializedName: "errorContent",
        type: {
          name: "String"
        }
      },
      receivedResponse: {
        serializedName: "receivedResponse",
        type: {
          name: "String"
        }
      }
    }
  }
};
