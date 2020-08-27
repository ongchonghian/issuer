import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface SGInvoice extends Document {
  Invoice: {
    UBLVersionID: number;
    CustomizationID: string;
    ProfileID: string;
    ID: string;
    IssueDate: string;
    DueDate: string;
    InvoiceTypeCode: number;
    DocumentCurrencyCode: string;
    BuyerReference: number;
    AccountingSupplierParty: {
      Party: {
        EndpointID: {
          "#text": number;
          "@_schemeID": string;
          [k: string]: unknown;
        };
        PartyIdentification: {
          ID: string;
          [k: string]: unknown;
        };
        PostalAddress: {
          StreetName: string;
          AdditionalStreetName: string;
          CityName: string;
          PostalZone: number;
          CountrySubentity: string;
          Country: {
            IdentificationCode: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        PartyTaxScheme: {
          CompanyID: string;
          TaxScheme: {
            ID: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        PartyLegalEntity: {
          RegistrationName: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    AccountingCustomerParty: {
      Party: {
        EndpointID: {
          "#text": number;
          "@_schemeID": string;
          [k: string]: unknown;
        };
        PartyIdentification: {
          ID: {
            "#text": string;
            "@_schemeID": string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        PostalAddress: {
          StreetName: string;
          AdditionalStreetName: string;
          CityName: string;
          PostalZone: number;
          CountrySubentity: string;
          Country: {
            IdentificationCode: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        PartyLegalEntity: {
          RegistrationName: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    PaymentMeans: {
      PaymentMeansCode: {
        "#text": number;
        "@_name": string;
        [k: string]: unknown;
      };
      PaymentID: string;
      PayeeFinancialAccount: {
        ID: number;
        Name: string;
        FinancialInstitutionBranch: {
          ID: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    PaymentTerms: {
      Note: string;
      [k: string]: unknown;
    };
    TaxTotal: {
      TaxAmount: {
        "#text": number;
        "@_currencyID": string;
        [k: string]: unknown;
      };
      TaxSubtotal:
        | []
        | [
            {
              TaxableAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              TaxAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              TaxCategory: {
                ID: string;
                Percent: number;
                TaxScheme: {
                  ID: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }
          ]
        | [
            {
              TaxableAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              TaxAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              TaxCategory: {
                ID: string;
                Percent: number;
                TaxScheme: {
                  ID: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            },
            {
              TaxableAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              TaxAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              TaxCategory: {
                ID: string;
                Percent: number;
                TaxScheme: {
                  ID: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }
          ];
      [k: string]: unknown;
    };
    LegalMonetaryTotal: {
      LineExtensionAmount: {
        "#text": number;
        "@_currencyID": string;
        [k: string]: unknown;
      };
      TaxExclusiveAmount: {
        "#text": number;
        "@_currencyID": string;
        [k: string]: unknown;
      };
      TaxInclusiveAmount: {
        "#text": number;
        "@_currencyID": string;
        [k: string]: unknown;
      };
      PayableAmount: {
        "#text": number;
        "@_currencyID": string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    InvoiceLine: 
      | []
      | [
          {
            ID: number;
            InvoicedQuantity: {
              "#text": number;
              "@_unitCode": string;
              [k: string]: unknown;
            };
            LineExtensionAmount: {
              "#text": number;
              "@_currencyID": string;
              [k: string]: unknown;
            };
            AllowanceCharge: {
              ChargeIndicator: boolean;
              AllowanceChargeReasonCode: number;
              AllowanceChargeReason: string;
              MultiplierFactorNumeric: number;
              Amount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Item: {
              Name: string;
              SellersItemIdentification: {
                ID: string;
                [k: string]: unknown;
              };
              ClassifiedTaxCategory: {
                ID: string;
                Percent: number;
                TaxScheme: {
                  ID: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Price: {
              PriceAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseQuantity: {
                "#text": number;
                "@_unitCode": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }
        ]
      | [
          {
            ID: number;
            InvoicedQuantity: {
              "#text": number;
              "@_unitCode": string;
              [k: string]: unknown;
            };
            LineExtensionAmount: {
              "#text": number;
              "@_currencyID": string;
              [k: string]: unknown;
            };
            AllowanceCharge: {
              ChargeIndicator: boolean;
              AllowanceChargeReasonCode: number;
              AllowanceChargeReason: string;
              MultiplierFactorNumeric: number;
              Amount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Item: {
              Name: string;
              SellersItemIdentification: {
                ID: string;
                [k: string]: unknown;
              };
              ClassifiedTaxCategory: {
                ID: string;
                Percent: number;
                TaxScheme: {
                  ID: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Price: {
              PriceAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseQuantity: {
                "#text": number;
                "@_unitCode": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          },
          {
            ID: number;
            InvoicedQuantity: {
              "#text": number;
              "@_unitCode": string;
              [k: string]: unknown;
            };
            LineExtensionAmount: {
              "#text": number;
              "@_currencyID": string;
              [k: string]: unknown;
            };
            AllowanceCharge: {
              ChargeIndicator: boolean;
              AllowanceChargeReasonCode: number;
              AllowanceChargeReason: string;
              MultiplierFactorNumeric: number;
              Amount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Item: {
              Name: string;
              SellersItemIdentification: {
                ID: string;
                [k: string]: unknown;
              };
              ClassifiedTaxCategory: {
                ID: string;
                Percent: number;
                TaxScheme: {
                  ID: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Price: {
              PriceAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseQuantity: {
                "#text": number;
                "@_unitCode": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }
        ]
      | [
          {
            ID: number;
            InvoicedQuantity: {
              "#text": number;
              "@_unitCode": string;
              [k: string]: unknown;
            };
            LineExtensionAmount: {
              "#text": number;
              "@_currencyID": string;
              [k: string]: unknown;
            };
            AllowanceCharge: {
              ChargeIndicator: boolean;
              AllowanceChargeReasonCode: number;
              AllowanceChargeReason: string;
              MultiplierFactorNumeric: number;
              Amount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Item: {
              Name: string;
              SellersItemIdentification: {
                ID: string;
                [k: string]: unknown;
              };
              ClassifiedTaxCategory: {
                ID: string;
                Percent: number;
                TaxScheme: {
                  ID: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Price: {
              PriceAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseQuantity: {
                "#text": number;
                "@_unitCode": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          },
          {
            ID: number;
            InvoicedQuantity: {
              "#text": number;
              "@_unitCode": string;
              [k: string]: unknown;
            };
            LineExtensionAmount: {
              "#text": number;
              "@_currencyID": string;
              [k: string]: unknown;
            };
            AllowanceCharge: {
              ChargeIndicator: boolean;
              AllowanceChargeReasonCode: number;
              AllowanceChargeReason: string;
              MultiplierFactorNumeric: number;
              Amount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Item: {
              Name: string;
              SellersItemIdentification: {
                ID: string;
                [k: string]: unknown;
              };
              ClassifiedTaxCategory: {
                ID: string;
                Percent: number;
                TaxScheme: {
                  ID: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Price: {
              PriceAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseQuantity: {
                "#text": number;
                "@_unitCode": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          },
          {
            ID: number;
            InvoicedQuantity: {
              "#text": number;
              "@_unitCode": string;
              [k: string]: unknown;
            };
            LineExtensionAmount: {
              "#text": number;
              "@_currencyID": string;
              [k: string]: unknown;
            };
            AllowanceCharge: {
              ChargeIndicator: boolean;
              AllowanceChargeReasonCode: number;
              AllowanceChargeReason: string;
              MultiplierFactorNumeric: number;
              Amount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Item: {
              Name: string;
              SellersItemIdentification: {
                ID: string;
                [k: string]: unknown;
              };
              ClassifiedTaxCategory: {
                ID: string;
                Percent: number;
                TaxScheme: {
                  ID: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Price: {
              PriceAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseQuantity: {
                "#text": number;
                "@_unitCode": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }
        ]
      | [
          {
            ID: number;
            InvoicedQuantity: {
              "#text": number;
              "@_unitCode": string;
              [k: string]: unknown;
            };
            LineExtensionAmount: {
              "#text": number;
              "@_currencyID": string;
              [k: string]: unknown;
            };
            AllowanceCharge: {
              ChargeIndicator: boolean;
              AllowanceChargeReasonCode: number;
              AllowanceChargeReason: string;
              MultiplierFactorNumeric: number;
              Amount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Item: {
              Name: string;
              SellersItemIdentification: {
                ID: string;
                [k: string]: unknown;
              };
              ClassifiedTaxCategory: {
                ID: string;
                Percent: number;
                TaxScheme: {
                  ID: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Price: {
              PriceAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseQuantity: {
                "#text": number;
                "@_unitCode": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          },
          {
            ID: number;
            InvoicedQuantity: {
              "#text": number;
              "@_unitCode": string;
              [k: string]: unknown;
            };
            LineExtensionAmount: {
              "#text": number;
              "@_currencyID": string;
              [k: string]: unknown;
            };
            AllowanceCharge: {
              ChargeIndicator: boolean;
              AllowanceChargeReasonCode: number;
              AllowanceChargeReason: string;
              MultiplierFactorNumeric: number;
              Amount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Item: {
              Name: string;
              SellersItemIdentification: {
                ID: string;
                [k: string]: unknown;
              };
              ClassifiedTaxCategory: {
                ID: string;
                Percent: number;
                TaxScheme: {
                  ID: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Price: {
              PriceAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseQuantity: {
                "#text": number;
                "@_unitCode": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          },
          {
            ID: number;
            InvoicedQuantity: {
              "#text": number;
              "@_unitCode": string;
              [k: string]: unknown;
            };
            LineExtensionAmount: {
              "#text": number;
              "@_currencyID": string;
              [k: string]: unknown;
            };
            AllowanceCharge: {
              ChargeIndicator: boolean;
              AllowanceChargeReasonCode: number;
              AllowanceChargeReason: string;
              MultiplierFactorNumeric: number;
              Amount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Item: {
              Name: string;
              SellersItemIdentification: {
                ID: string;
                [k: string]: unknown;
              };
              ClassifiedTaxCategory: {
                ID: string;
                Percent: number;
                TaxScheme: {
                  ID: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Price: {
              PriceAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseQuantity: {
                "#text": number;
                "@_unitCode": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          },
          {
            ID: number;
            InvoicedQuantity: {
              "#text": number;
              "@_unitCode": string;
              [k: string]: unknown;
            };
            LineExtensionAmount: {
              "#text": number;
              "@_currencyID": string;
              [k: string]: unknown;
            };
            AllowanceCharge: {
              ChargeIndicator: boolean;
              AllowanceChargeReasonCode: number;
              AllowanceChargeReason: string;
              MultiplierFactorNumeric: number;
              Amount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Item: {
              Name: string;
              SellersItemIdentification: {
                ID: string;
                [k: string]: unknown;
              };
              ClassifiedTaxCategory: {
                ID: string;
                Percent: number;
                TaxScheme: {
                  ID: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            Price: {
              PriceAmount: {
                "#text": number;
                "@_currencyID": string;
                [k: string]: unknown;
              };
              BaseQuantity: {
                "#text": number;
                "@_unitCode": string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }
        ];
    [k: string]: unknown;
  };
  [k: string]: unknown;
}


export const SGInvoice: SGInvoice = {
  "Invoice": {
    "UBLVersionID": 2.1,
    "CustomizationID": "urn:cen.eu:en16931:2017#conformant#urn:fdc:peppol.eu:2017:poacc:billing:international:sg:3.0",
    "ProfileID": "urn:fdc:peppol.eu:2017:poacc:billing:01:1.0",
    "ID": "F012345",
    "IssueDate": "2018-12-01",
    "DueDate": "2019-01-01",
    "InvoiceTypeCode": 380,
    "DocumentCurrencyCode": "USD",
    "BuyerReference": 123,
    "AccountingSupplierParty": {
      "Party": {
        "EndpointID": {
          "#text": 5790000436064,
          "@_schemeID": "0088"
        },
        "PartyIdentification": {
          "ID": "schemeID=\"0035\">5790000436071"
        },
        "PostalAddress": {
          "StreetName": "Mainstreet 112",
          "AdditionalStreetName": "Building 3",
          "CityName": "Singapore",
          "PostalZone": 1000,
          "CountrySubentity": "Singapore",
          "Country": {
            "IdentificationCode": "SG"
          }
        },
        "PartyTaxScheme": {
          "CompanyID": "M2-1234567-K",
          "TaxScheme": {
            "ID": "GST"
          }
        },
        "PartyLegalEntity": {
          "RegistrationName": "Gallery Photo Supplier"
        }
      }
    },
    "AccountingCustomerParty": {
      "Party": {
        "EndpointID": {
          "#text": 5790000436071,
          "@_schemeID": "0088"
        },
        "PartyIdentification": {
          "ID": {
            "#text": "345KS5324",
            "@_schemeID": "0035"
          }
        },
        "PostalAddress": {
          "StreetName": "Central road 56",
          "AdditionalStreetName": "Second floor",
          "CityName": "Singapore",
          "PostalZone": 101,
          "CountrySubentity": "Singapore",
          "Country": {
            "IdentificationCode": "SG"
          }
        },
        "PartyLegalEntity": {
          "RegistrationName": "IMDA"
        }
      }
    },
    "PaymentMeans": {
      "PaymentMeansCode": {
        "#text": 30,
        "@_name": "Bank transfer"
      },
      "PaymentID": "gr12345",
      "PayeeFinancialAccount": {
        "ID": 166000001,
        "Name": "Payee current account",
        "FinancialInstitutionBranch": {
          "ID": "ICDLOG"
        }
      }
    },
    "PaymentTerms": {
      "Note": "Late fees of 1% charged from due date"
    },
    "TaxTotal": {
      "TaxAmount": {
        "#text": 1975.05,
        "@_currencyID": "USD"
      },
      "TaxSubtotal": [
        {
          "TaxableAmount": {
            "#text": 28215,
            "@_currencyID": "USD"
          },
          "TaxAmount": {
            "#text": 1975.05,
            "@_currencyID": "USD"
          },
          "TaxCategory": {
            "ID": "SR",
            "Percent": 7,
            "TaxScheme": {
              "ID": "GST"
            }
          }
        },
        {
          "TaxableAmount": {
            "#text": 5700,
            "@_currencyID": "USD"
          },
          "TaxAmount": {
            "#text": 0,
            "@_currencyID": "USD"
          },
          "TaxCategory": {
            "ID": "ZR",
            "Percent": 0,
            "TaxScheme": {
              "ID": "GST"
            }
          }
        }
      ]
    },
    "LegalMonetaryTotal": {
      "LineExtensionAmount": {
        "#text": 33915,
        "@_currencyID": "USD"
      },
      "TaxExclusiveAmount": {
        "#text": 33915,
        "@_currencyID": "USD"
      },
      "TaxInclusiveAmount": {
        "#text": 35890.05,
        "@_currencyID": "USD"
      },
      "PayableAmount": {
        "#text": 35890.05,
        "@_currencyID": "USD"
      }
    },
    "InvoiceLine": [
      {
        "ID": 1,
        "InvoicedQuantity": {
          "#text": 10,
          "@_unitCode": "H87"
        },
        "LineExtensionAmount": {
          "#text": 855,
          "@_currencyID": "USD"
        },
        "AllowanceCharge": {
          "ChargeIndicator": false,
          "AllowanceChargeReasonCode": 100,
          "AllowanceChargeReason": "Line discount",
          "MultiplierFactorNumeric": 5,
          "Amount": {
            "#text": 45,
            "@_currencyID": "USD"
          },
          "BaseAmount": {
            "#text": 900,
            "@_currencyID": "USD"
          }
        },
        "Item": {
          "Name": "Yashica MG2",
          "SellersItemIdentification": {
            "ID": "Item1"
          },
          "ClassifiedTaxCategory": {
            "ID": "SR",
            "Percent": 7,
            "TaxScheme": {
              "ID": "GST"
            }
          }
        },
        "Price": {
          "PriceAmount": {
            "#text": 90,
            "@_currencyID": "USD"
          },
          "BaseQuantity": {
            "#text": 1,
            "@_unitCode": "H87"
          }
        }
      },
      {
        "ID": 2,
        "InvoicedQuantity": {
          "#text": 20,
          "@_unitCode": "H87"
        },
        "LineExtensionAmount": {
          "#text": 19000,
          "@_currencyID": "USD"
        },
        "AllowanceCharge": {
          "ChargeIndicator": false,
          "AllowanceChargeReasonCode": 100,
          "AllowanceChargeReason": "Line discount",
          "MultiplierFactorNumeric": 5,
          "Amount": {
            "#text": 1000,
            "@_currencyID": "USD"
          },
          "BaseAmount": {
            "#text": 20000,
            "@_currencyID": "USD"
          }
        },
        "Item": {
          "Name": "Pentax Z-1 Body",
          "SellersItemIdentification": {
            "ID": "Item2"
          },
          "ClassifiedTaxCategory": {
            "ID": "SR",
            "Percent": 7,
            "TaxScheme": {
              "ID": "GST"
            }
          }
        },
        "Price": {
          "PriceAmount": {
            "#text": 1000,
            "@_currencyID": "USD"
          },
          "BaseQuantity": {
            "#text": 1,
            "@_unitCode": "H87"
          }
        }
      },
      {
        "ID": 3,
        "InvoicedQuantity": {
          "#text": 30,
          "@_unitCode": "H87"
        },
        "LineExtensionAmount": {
          "#text": 5700,
          "@_currencyID": "USD"
        },
        "AllowanceCharge": {
          "ChargeIndicator": false,
          "AllowanceChargeReasonCode": 100,
          "AllowanceChargeReason": "Line discount",
          "MultiplierFactorNumeric": 5,
          "Amount": {
            "#text": 300,
            "@_currencyID": "USD"
          },
          "BaseAmount": {
            "#text": 6000,
            "@_currencyID": "USD"
          }
        },
        "Item": {
          "Name": "Camera W35",
          "SellersItemIdentification": {
            "ID": "Item3"
          },
          "ClassifiedTaxCategory": {
            "ID": "ZR",
            "Percent": 0,
            "TaxScheme": {
              "ID": "GST"
            }
          }
        },
        "Price": {
          "PriceAmount": {
            "#text": 200,
            "@_currencyID": "USD"
          },
          "BaseQuantity": {
            "#text": 1,
            "@_unitCode": "H87"
          }
        }
      },
      {
        "ID": 4,
        "InvoicedQuantity": {
          "#text": 40,
          "@_unitCode": "H87"
        },
        "LineExtensionAmount": {
          "#text": 8360,
          "@_currencyID": "USD"
        },
        "AllowanceCharge": {
          "ChargeIndicator": false,
          "AllowanceChargeReasonCode": 100,
          "AllowanceChargeReason": "Line discount",
          "MultiplierFactorNumeric": 5,
          "Amount": {
            "#text": 440,
            "@_currencyID": "USD"
          },
          "BaseAmount": {
            "#text": 8800,
            "@_currencyID": "USD"
          }
        },
        "Item": {
          "Name": "Camera Prima 5",
          "SellersItemIdentification": {
            "ID": "Item4"
          },
          "ClassifiedTaxCategory": {
            "ID": "SR",
            "Percent": 7,
            "TaxScheme": {
              "ID": "GST"
            }
          }
        },
        "Price": {
          "PriceAmount": {
            "#text": 220,
            "@_currencyID": "USD"
          },
          "BaseQuantity": {
            "#text": 1,
            "@_unitCode": "H87"
          }
        }
      }
    ]
  }
};