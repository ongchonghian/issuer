import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
//import "./style.css";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import Form from "@rjsf/core"; import Form from "@rjsf/core";
import { SGInvoice } from "../SGInvoiceSample";
import { blCertificate } from "../billOfLadingSample";

const borderStyle = {
  borderStyle: "solid",
  borderWidth: 0.5,
  borderColor: "#000",
  margin: 0,
  padding: 0
};

const smallText = (text: string): JSX.Element => <div style={{ fontSize: "0.8em" }}>{text}</div>;

const Section2 = (document: BLCertificate): JSX.Element => {
  const packages = document.packages || [];
  const renderedKindOfPackage = packages.map((pkg, index) => <div key={index}>{pkg.description}</div>);
  const renderedWeight = packages.map((pkg, index) => <div key={index}>{pkg.weight}</div>);
  const renderedMeasurement = packages.map((pkg, index) => <div key={index}>{pkg.measurement}</div>);

  return (
    <div className="row" style={borderStyle} >
      <div className="col-8 p-2" style={borderStyle}>
        <div style={{ fontSize: "0.8em" }}>
          Kind of Packages: Description of goods, Marks and Numbers: Container No./Serial No.
        </div>
        {renderedKindOfPackage}
        <div style={{ fontSize: "0.8em" }} className="mt-2">
          Above particulars as declared by Shipper, but without responsibility of our representation by Carrier (see
          clause 14)
        </div>
      </div>
      <div className="col-2 p-2" style={borderStyle}>
        <div style={{ fontSize: "0.8em" }}>Weight</div>
        {renderedWeight}
      </div>
      <div className="col-2 p-2" style={borderStyle}>
        <div style={{ fontSize: "0.8em" }}>Measurement</div>
        {renderedMeasurement}
      </div>
    </div>
  );
};

const Section0 = (document: SGInvoice): JSX.Element => {
  const invoice = document.Invoice || [];
  const invoiceLine = invoice.InvoiceLine || [];
  const renderedLineID = invoiceLine.map((line, index) => <div className="tableCell col-md-4">{index}</div>);
  const renderedInvoicedQuantity =
  const renderedInvoiceLine = invoiceLine.map((line, index) => <div key={index}>{pkg.description}</div>);
  
  
  const renderedKindOfPackage = packages.map((pkg, index) => <div key={index}>{pkg.description}</div>);
  const renderedWeight = packages.map((pkg, index) => <div key={index}>{pkg.weight}</div>);
  const renderedMeasurement = packages.map((pkg, index) => <div key={index}>{pkg.measurement}</div>);

return (
  <div id="container">
    <div className="row">
      <div className="tableHeadCell col-md-4">Invoice</div>
      <div className="tableCell col-md-4">
        <div id="container">
          <div className="row">
            <div className="tableHeadCell col-md-4">UBLVersionID</div>
            <div className="tableCell col-md-4">UBLVersionID</div>
          </div>
          <div className="row">
            <div className="tableHeadCell col-md-4">CustomizationID</div>
            <div className="tableCell col-md-4">
              urn:cen.eu:en16931:2017#conformant#urn:fdc:peppol.eu:2017:poacc:billing:international:sg:3.0
          </div>
          </div>
          <div className="row">
            <div className="tableHeadCell col-md-4">ProfileID</div>
            <div className="tableCell col-md-4">
              urn:fdc:peppol.eu:2017:poacc:billing:01:1.0
          </div>
          </div>
          <div className="row">
            <div className="tableHeadCell col-md-4">ID</div>
            <div className="tableCell col-md-4">F012345</div>
          </div>
          <div className="row">
            <div className="tableHeadCell col-md-4">IssueDate</div>
            <div className="tableCell col-md-4">{invoice.IssueDate}</div>
          </div>
          <div className="row">
            <div className="tableHeadCell col-md-4">DueDate</div>
            <div className="tableCell col-md-4">{invoice.DueDate}</div>
          </div>
          <div className="row">
            <div className="tableHeadCell col-md-4">InvoiceTypeCode</div>
            <div className="tableCell col-md-4">{invoice.InvoiceTypeCode}</div>
          </div>
          <div className="row">
            <div className="tableHeadCell col-md-4">DocumentCurrencyCode</div>
            <div className="tableCell col-md-4">{invoice.DocumentCurrencyCode}</div>
          </div>
          <div className="row">
            <div className="tableHeadCell col-md-4">BuyerReference</div>
            <div className="tableCell col-md-4">{invoice.BuyerReference}</div>
          </div>
          <div className="row">
            <div className="tableHeadCell col-md-4">AccountingSupplierParty</div>
            <div className="tableCell col-md-4">
              <div id="container">
                <div className="row">
                  <div className="tableHeadCell col-md-4">Party</div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">EndpointID</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">
                                {invoice.AccountingSupplierParty.Party.EndpointID["#text"]}
                              </div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_schemeID
                            </div>
                              <div className="tableCell col-md-4">{invoice.AccountingSupplierParty.Party.EndpointID["@_schemeID"]}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          PartyIdentification
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">ID</div>
                              <div className="tableCell col-md-4">
                                {invoice.AccountingSupplierParty.Party.PartyIdentification.ID}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          PostalAddress
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                StreetName
                            </div>
                              <div className="tableCell col-md-4">
                                {invoice.AccountingSupplierParty.Party.PostalAddress.StreetName}
                              </div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                AdditionalStreetName
                            </div>
                              <div className="tableCell col-md-4">{invoice.AccountingSupplierParty.Party.PostalAddress.AdditionalStreetName}</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                CityName
                            </div>
                              <div className="tableCell col-md-4">{invoice.AccountingSupplierParty.Party.PostalAddress.CityName}</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                PostalZone
                            </div>
                              <div className="tableCell col-md-4">{invoice.AccountingSupplierParty.Party.PostalAddress.PostalZone}</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                CountrySubentity
                            </div>
                              <div className="tableCell col-md-4">{invoice.AccountingSupplierParty.Party.PostalAddress.CountrySubentity}</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                Country
                            </div>
                              <div className="tableCell col-md-4">
                                <div id="container">
                                  <div className="row">
                                    <div className="tableHeadCell col-md-4">
                                      IdentificationCode
                                  </div>
                                    <div className="tableCell col-md-4">{invoice.AccountingSupplierParty.Party.PostalAddress.Country.IdentificationCode}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          PartyTaxScheme
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                CompanyID
                            </div>
                              <div className="tableCell col-md-4">
                                {invoice.AccountingSupplierParty.Party.PartyTaxScheme.CompanyID}
                              </div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                TaxScheme
                            </div>
                              <div className="tableCell col-md-4">
                                <div id="container">
                                  <div className="row">
                                    <div className="tableHeadCell col-md-4">
                                      ID
                                  </div>
                                    <div className="tableCell col-md-4">{invoice.AccountingSupplierParty.Party.PartyTaxScheme.TaxScheme.ID}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          PartyLegalEntity
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                RegistrationName
                            </div>
                              <div className="tableCell col-md-4">
                                {invoice.AccountingSupplierParty.Party.PartyLegalEntity.RegistrationName}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tableHeadCell col-md-4">AccountingCustomerParty</div>
            <div className="tableCell col-md-4">
              <div id="container">
                <div className="row">
                  <div className="tableHeadCell col-md-4">Party</div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">EndpointID</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">
                                {invoice.AccountingCustomerParty.Party.EndpointID["#text"]}
                              </div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_schemeID
                            </div>
                              <div className="tableCell col-md-4">{invoice.AccountingCustomerParty.Party.EndpointID["@_schemeID"]}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          PartyIdentification
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">ID</div>
                              <div className="tableCell col-md-4">
                                <div id="container">
                                  <div className="row">
                                    <div className="tableHeadCell col-md-4">
                                      #text
                                  </div>
                                    <div className="tableCell col-md-4">
                                      {invoice.AccountingCustomerParty.Party.PartyIdentification.ID["#text"]}
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="tableHeadCell col-md-4">
                                      @_schemeID
                                  </div>
                                    <div className="tableCell col-md-4">{invoice.AccountingCustomerParty.Party.PartyIdentification.ID["@_schemeID"]}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          PostalAddress
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                StreetName
                            </div>
                              <div className="tableCell col-md-4">
                                {invoice.AccountingCustomerParty.Party.PostalAddress.StreetName}
                              </div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                AdditionalStreetName
                            </div>
                              <div className="tableCell col-md-4">
                                {invoice.AccountingCustomerParty.Party.PostalAddress.AdditionalStreetName}
                              </div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                CityName
                            </div>
                              <div className="tableCell col-md-4">{invoice.AccountingCustomerParty.Party.PostalAddress.CityName}</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                PostalZone
                            </div>
                              <div className="tableCell col-md-4">{invoice.AccountingCustomerParty.Party.PostalAddress.PostalZone}</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                CountrySubentity
                            </div>
                              <div className="tableCell col-md-4">{invoice.AccountingCustomerParty.Party.PostalAddress.CountrySubentity}</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                Country
                            </div>
                              <div className="tableCell col-md-4">
                                <div id="container">
                                  <div className="row">
                                    <div className="tableHeadCell col-md-4">
                                      IdentificationCode
                                  </div>
                                    <div className="tableCell col-md-4">{invoice.AccountingCustomerParty.Party.PostalAddress.Country.IdentificationCode}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          PartyLegalEntity
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                RegistrationName
                            </div>
                              <div className="tableCell col-md-4">{invoice.AccountingCustomerParty.Party.PartyLegalEntity.RegistrationName}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tableHeadCell col-md-4">PaymentMeans</div>
            <div className="tableCell col-md-4">
              <div id="container">
                <div className="row">
                  <div className="tableHeadCell col-md-4">PaymentMeansCode</div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">#text</div>
                        <div className="tableCell col-md-4">{invoice.PaymentMeans.PaymentMeansCode["#text"]}</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">@_name</div>
                        <div className="tableCell col-md-4">{invoice.PaymentMeans.PaymentMeansCode["@_name"]}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="tableHeadCell col-md-4">PaymentID</div>
                  <div className="tableCell col-md-4">{invoice.PaymentMeans.PaymentID}</div>
                </div>
                <div className="row">
                  <div className="tableHeadCell col-md-4">
                    PayeeFinancialAccount
                </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">ID</div>
                        <div className="tableCell col-md-4">{invoice.PaymentMeans.PayeeFinancialAccount.ID}</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">Name</div>
                        <div className="tableCell col-md-4">
                          {invoice.PaymentMeans.PayeeFinancialAccount.Name}
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          FinancialInstitutionBranch
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">ID</div>
                              <div className="tableCell col-md-4">{invoice.PaymentMeans.PayeeFinancialAccount.FinancialInstitutionBranch}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tableHeadCell col-md-4">PaymentTerms</div>
            <div className="tableCell col-md-4">
              <div id="container">
                <div className="row">
                  <div className="tableHeadCell col-md-4">Note</div>
                  <div className="tableCell col-md-4">
                    {invoice.PaymentTerms.Note}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tableHeadCell col-md-4">TaxTotal</div>
            <div className="tableCell col-md-4">
              <div id="container">
                <div className="row">
                  <div className="tableHeadCell col-md-4">TaxAmount</div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">#text</div>
                        <div className="tableCell col-md-4">{invoice.TaxTotal.TaxAmount["#text"]}</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">@_currencyID</div>
                        <div className="tableCell col-md-4">{invoice.TaxTotal.TaxAmount["@_currencyID"]}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="tableHeadCell col-md-4">TaxSubtotal</div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div id="tableHead">
                        <div className="row">
                          <div className="tableHeadCell col-md-4">
                            {invoice.TaxTotal.TaxSubtotal}
                          </div>
                          <div className="tableHeadCell col-md-4">TaxAmount</div>
                          <div className="tableHeadCell col-md-4">
                            TaxCategory
                        </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">{invoice.TaxTotal.TaxAmount["#text"]}</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">{invoice.TaxTotal.TaxAmount["@_currencyID"]}</div>
                            </div>
                          </div>
                        </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">1975.05</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">USD</div>
                            </div>
                          </div>
                        </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">ID</div>
                              <div className="tableCell col-md-4">SR</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                Percent
                            </div>
                              <div className="tableCell col-md-4">7</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                TaxScheme
                            </div>
                              <div className="tableCell col-md-4">
                                <div id="container">
                                  <div className="row">
                                    <div className="tableHeadCell col-md-4">
                                      ID
                                  </div>
                                    <div className="tableCell col-md-4">GST</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">5700</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">USD</div>
                            </div>
                          </div>
                        </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">0</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">USD</div>
                            </div>
                          </div>
                        </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">ID</div>
                              <div className="tableCell col-md-4">ZR</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                Percent
                            </div>
                              <div className="tableCell col-md-4">0</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                TaxScheme
                            </div>
                              <div className="tableCell col-md-4">
                                <div id="container">
                                  <div className="row">
                                    <div className="tableHeadCell col-md-4">
                                      ID
                                  </div>
                                    <div className="tableCell col-md-4">GST</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tableHeadCell col-md-4">LegalMonetaryTotal</div>
            <div className="tableCell col-md-4">
              <div id="container">
                <div className="row">
                  <div className="tableHeadCell col-md-4">
                    LineExtensionAmount
                </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">#text</div>
                        <div className="tableCell col-md-4">{invoice.LegalMonetaryTotal.LineExtensionAmount["#text"]}</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">@_currencyID</div>
                        <div className="tableCell col-md-4">{invoice.LegalMonetaryTotal.LineExtensionAmount["@_currencyID"]}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="tableHeadCell col-md-4">TaxExclusiveAmount</div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">#text</div>
                        <div className="tableCell col-md-4">{invoice.LegalMonetaryTotal.TaxExclusiveAmount["#text"]}</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">@_currencyID</div>
                        <div className="tableCell col-md-4">{invoice.LegalMonetaryTotal.TaxExclusiveAmount["@_currencyID"]}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="tableHeadCell col-md-4">TaxInclusiveAmount</div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">#text</div>
                        <div className="tableCell col-md-4">{invoice.LegalMonetaryTotal.TaxInclusiveAmount["#text"]}</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">@_currencyID</div>
                        <div className="tableCell col-md-4">{invoice.LegalMonetaryTotal.TaxInclusiveAmount["@_currencyID"]}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="tableHeadCell col-md-4">PayableAmount</div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">#text</div>
                        <div className="tableCell col-md-4">{invoice.LegalMonetaryTotal.PayableAmount["#text"]}</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">@_currencyID</div>
                        <div className="tableCell col-md-4">{invoice.LegalMonetaryTotal.PayableAmount["@_currencyID"]}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tableHeadCell col-md-4">InvoiceLine</div>
            <div className="tableCell col-md-4">
              <div id="container">
                <div id="tableHead">
                  <div className="row">
                    <div className="tableHeadCell col-md-4">ID</div>
                    <div className="tableHeadCell col-md-4">InvoicedQuantity</div>
                    <div className="tableHeadCell col-md-4">LineExtensionAmount</div>
                    <div className="tableHeadCell col-md-4">AllowanceCharge</div>
                    <div className="tableHeadCell col-md-4">Item</div>
                    <div className="tableHeadCell col-md-4">Price</div>
                  </div>
                </div>
                <div className="row">
                  <div className="tableCell col-md-4">1</div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">#text</div>
                        <div className="tableCell col-md-4">10</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">@_unitCode</div>
                        <div className="tableCell col-md-4">H87</div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">#text</div>
                        <div className="tableCell col-md-4">855</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">@_currencyID</div>
                        <div className="tableCell col-md-4">USD</div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          ChargeIndicator
                      </div>
                        <div className="tableCell col-md-4">False</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          AllowanceChargeReasonCode
                      </div>
                        <div className="tableCell col-md-4">100</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          AllowanceChargeReason
                      </div>
                        <div className="tableCell col-md-4">Line discount</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          MultiplierFactorNumeric
                      </div>
                        <div className="tableCell col-md-4">5</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">Amount</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">45</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">USD</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">BaseAmount</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">900</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">USD</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">Name</div>
                        <div className="tableCell col-md-4">Yashica MG2</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          SellersItemIdentification
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">ID</div>
                              <div className="tableCell col-md-4">Item1</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          ClassifiedTaxCategory
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">ID</div>
                              <div className="tableCell col-md-4">SR</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                Percent
                            </div>
                              <div className="tableCell col-md-4">7</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                TaxScheme
                            </div>
                              <div className="tableCell col-md-4">
                                <div id="container">
                                  <div className="row">
                                    <div className="tableHeadCell col-md-4">
                                      ID
                                  </div>
                                    <div className="tableCell col-md-4">GST</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">PriceAmount</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">90</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">USD</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">BaseQuantity</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">1</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_unitCode
                            </div>
                              <div className="tableCell col-md-4">H87</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="tableCell col-md-4">2</div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">#text</div>
                        <div className="tableCell col-md-4">20</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">@_unitCode</div>
                        <div className="tableCell col-md-4">H87</div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">#text</div>
                        <div className="tableCell col-md-4">19000</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">@_currencyID</div>
                        <div className="tableCell col-md-4">USD</div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          ChargeIndicator
                      </div>
                        <div className="tableCell col-md-4">False</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          AllowanceChargeReasonCode
                      </div>
                        <div className="tableCell col-md-4">100</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          AllowanceChargeReason
                      </div>
                        <div className="tableCell col-md-4">Line discount</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          MultiplierFactorNumeric
                      </div>
                        <div className="tableCell col-md-4">5</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">Amount</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">1000</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">USD</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">BaseAmount</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">20000</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">USD</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">Name</div>
                        <div className="tableCell col-md-4">Pentax Z-1 Body</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          SellersItemIdentification
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">ID</div>
                              <div className="tableCell col-md-4">Item2</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          ClassifiedTaxCategory
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">ID</div>
                              <div className="tableCell col-md-4">SR</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                Percent
                            </div>
                              <div className="tableCell col-md-4">7</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                TaxScheme
                            </div>
                              <div className="tableCell col-md-4">
                                <div id="container">
                                  <div className="row">
                                    <div className="tableHeadCell col-md-4">
                                      ID
                                  </div>
                                    <div className="tableCell col-md-4">GST</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">PriceAmount</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">1000</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">USD</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">BaseQuantity</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">1</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_unitCode
                            </div>
                              <div className="tableCell col-md-4">H87</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="tableCell col-md-4">3</div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">#text</div>
                        <div className="tableCell col-md-4">30</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">@_unitCode</div>
                        <div className="tableCell col-md-4">H87</div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">#text</div>
                        <div className="tableCell col-md-4">5700</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">@_currencyID</div>
                        <div className="tableCell col-md-4">USD</div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          ChargeIndicator
                      </div>
                        <div className="tableCell col-md-4">False</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          AllowanceChargeReasonCode
                      </div>
                        <div className="tableCell col-md-4">100</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          AllowanceChargeReason
                      </div>
                        <div className="tableCell col-md-4">Line discount</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          MultiplierFactorNumeric
                      </div>
                        <div className="tableCell col-md-4">5</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">Amount</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">300</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">USD</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">BaseAmount</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">6000</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">USD</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">Name</div>
                        <div className="tableCell col-md-4">Camera W35</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          SellersItemIdentification
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">ID</div>
                              <div className="tableCell col-md-4">Item3</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          ClassifiedTaxCategory
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">ID</div>
                              <div className="tableCell col-md-4">ZR</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                Percent
                            </div>
                              <div className="tableCell col-md-4">0</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                TaxScheme
                            </div>
                              <div className="tableCell col-md-4">
                                <div id="container">
                                  <div className="row">
                                    <div className="tableHeadCell col-md-4">
                                      ID
                                  </div>
                                    <div className="tableCell col-md-4">GST</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">PriceAmount</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">200</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">USD</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">BaseQuantity</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">1</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_unitCode
                            </div>
                              <div className="tableCell col-md-4">H87</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="tableCell col-md-4">4</div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">#text</div>
                        <div className="tableCell col-md-4">40</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">@_unitCode</div>
                        <div className="tableCell col-md-4">H87</div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">#text</div>
                        <div className="tableCell col-md-4">8360</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">@_currencyID</div>
                        <div className="tableCell col-md-4">USD</div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          ChargeIndicator
                      </div>
                        <div className="tableCell col-md-4">False</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          AllowanceChargeReasonCode
                      </div>
                        <div className="tableCell col-md-4">100</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          AllowanceChargeReason
                      </div>
                        <div className="tableCell col-md-4">Line discount</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          MultiplierFactorNumeric
                      </div>
                        <div className="tableCell col-md-4">5</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">Amount</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">440</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">USD</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">BaseAmount</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">8800</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">USD</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">Name</div>
                        <div className="tableCell col-md-4">Camera Prima 5</div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          SellersItemIdentification
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">ID</div>
                              <div className="tableCell col-md-4">Item4</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">
                          ClassifiedTaxCategory
                      </div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">ID</div>
                              <div className="tableCell col-md-4">SR</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                Percent
                            </div>
                              <div className="tableCell col-md-4">7</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                TaxScheme
                            </div>
                              <div className="tableCell col-md-4">
                                <div id="container">
                                  <div className="row">
                                    <div className="tableHeadCell col-md-4">
                                      ID
                                  </div>
                                    <div className="tableCell col-md-4">GST</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tableCell col-md-4">
                    <div id="container">
                      <div className="row">
                        <div className="tableHeadCell col-md-4">PriceAmount</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">220</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_currencyID
                            </div>
                              <div className="tableCell col-md-4">USD</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="tableHeadCell col-md-4">BaseQuantity</div>
                        <div className="tableCell col-md-4">
                          <div id="container">
                            <div className="row">
                              <div className="tableHeadCell col-md-4">#text</div>
                              <div className="tableCell col-md-4">1</div>
                            </div>
                            <div className="row">
                              <div className="tableHeadCell col-md-4">
                                @_unitCode
                            </div>
                              <div className="tableCell col-md-4">H87</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
};

    



const Section1 = (document: SGInvoice): JSX.Element => {
  const { shipper = {}, blNumber, consignee = {}, notifyParty = {} } = document;
  return (
    <div className="d-flex flex-column" style={borderStyle}>
      {/* Row 1 */}
      <div className="d-flex">
        <div className="p-2 col-6" style={{ ...borderStyle }}>
          <div className="d-flex align-items-center justify-content-center h-100 text-center">
            <img style={{ width: "200px" }} src="/images/common/atlanticCarrier.svg"/>
          </div>
        </div>
        <div className="d-flex col-6" style={{ flex: 5, padding:0 }}>
          <div className="d-flex" style={{ flex: 5 }}>
            <div className="p-2" style={{ flex: 5, ...borderStyle }}>
              <strong>IMDA PEPPOL INVOICE</strong>
            </div>
            <div style={{ flex: 3 }} className="d-flex flex-column">
              <div className="p-2" style={{ flex: 1, ...borderStyle }}>
                SCAC <strong>MAEU</strong>
              </div>
              <div className="p-2" style={{ flex: 1, ...borderStyle }}>
                B/L No <strong>{blNumber}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="d-flex">
        <div className="p-2 col-6" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>Shipper</div>
          <div className="p-2 m-2">
            <div>{shipper.name || ""}</div>
            <div>{(shipper.address && shipper.address.street) || ""}</div>
            <div>{(shipper.address && shipper.address.country) || ""}</div>            
          </div>
        </div>
        <div className="col-6 d-flex flex-column justify-content-between" style={{ padding:0 }}>
          <div className="p-1" style={{ flex: 1, ...borderStyle }}>
            <div style={{ fontSize: "0.8em" }}>Booking No</div>
            <div>{blNumber}</div>
          </div>
          <div className="p-1" style={{ flex: 1, ...borderStyle }}>
            <div style={{ fontSize: "0.8em" }}>Export references</div>
          </div>
          <div className="p-1" style={{ flex: 1, ...borderStyle }}>
            <div style={{ fontSize: "0.8em" }}>
              Onward inland routing (Not part of Carriage as defined in clasuse 1. For account and risk of Merchant)
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="d-flex">
        <div className="p-2 col-6" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>
            Consignee (negotiable is consiged &quot;to order&quot;, &quot;to order of&quot; a named Person or &quot;to
            order of bearer&quot;)
          </div>
          <div className="p-2 m-2">
            <div>TO THE ORDER OF</div>
            <div>{consignee.name || ""}</div>
          </div>
        </div>
        <div className="p-2 col-6" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>Notify Party (see clause 22)</div>
          <div className="p-2 m-2">
            <div>{notifyParty.name || ""}</div>
          </div>{" "}
        </div>
      </div>

      {/* Row 4 */}
      <div className="d-flex">
        <div className="col-3 p-2" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>Vessel (see clause 1 + 19)</div>
          {document.vessel || ""}
        </div>
        <div className="col-3 p-2" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>Voyage No.</div>
          {document.voyageNo || ""}
        </div>
        <div className="col-6 p-2" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>
            Place of Receipt. Applicable only when document used as Multimodal Transport B/L (see clause 1)
          </div>
        </div>
      </div>

      {/* Row 5 */}
      <div className="d-flex">
        <div className="col-3 p-2" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>Port of Loading</div>
          {document.portOfLoading || ""}
        </div>
        <div className="col-3 p-2" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>Port of Discharge</div>
          {document.portOfDischarge || ""}
        </div>
        <div className="col-6 p-2" style={borderStyle}>
          <div style={{ fontSize: "0.8em" }}>
            Place of Delivery. Applicable only when document used as Multimodal Transport B/L (see clause 1)
          </div>
        </div>
      </div>
    </div>
  )
};

export const PEPPOLSGInvoiceTemplate: FunctionComponent<TemplateProps<SGInvoice>> = ({ document }) => (
  // Section 1
  <div className="container" >
    <div className="text-center">
      <strong>PEPPOL SG INVOICE</strong>
    </div>
    {Section0(document) }
  </div>
);
