const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const UserInfo = sequelize.define('user_info', {
  id_userInfo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [7, 20] },
  },
  checkWord: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Faq = sequelize.define('faq', {
  id_faq: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  faqQuestion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  faqAnswer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const AvailablePartner = sequelize.define('available_partners', {
  id_availablePartner: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  availablePartnerName: { type: DataTypes.STRING, allowNull: false },
  availablePartnerImg: { type: DataTypes.STRING, allowNull: false },
  availablePartnerDescription: { type: DataTypes.STRING, allowNull: false },
});

const AvailableActivitie = sequelize.define('available_activities', {
  id_availableActivitie: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  possibelActivitieName: { type: DataTypes.STRING, allowNull: false },
  possibelActivitieImg: { type: DataTypes.STRING, allowNull: false },
  possibelActivitieDescription: { type: DataTypes.STRING, allowNull: false },
});

const AvailableBenefit = sequelize.define('available_benefits', {
  id_availableBenefit: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  availableBenefitName: { type: DataTypes.STRING, allowNull: false },
  availableBenefitImg: { type: DataTypes.STRING, allowNull: false },
  availableBenefitDescription: { type: DataTypes.STRING, allowNull: false },
});

const UserAccount = sequelize.define('user_accounts', {
  id_account: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  surName: { type: DataTypes.STRING, allowNull: false },
  thirdName: { type: DataTypes.STRING, defaultValue: 'none' },
  img: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const UserPerson = sequelize.define('user_persons', {
  id_person: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userSex: { type: DataTypes.STRING, defaultValue: 'none' },
  userAge: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 16 } },
  userHomeAdress: { type: DataTypes.STRING, allowNull: false },
  userPhoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { len: [11, 16] },
  },
  workPlace: { type: DataTypes.STRING },
  workIncome: { type: DataTypes.INTEGER, validate: { min: 1 } },
  creditHistory: { type: DataTypes.STRING, defaultValue: 'unknown' },
  creditCanConfirmed: { type: DataTypes.BOOLEAN, defaultValue: 'false' },
});

const Company = sequelize.define('companies', {
  id_company: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  companyName: { type: DataTypes.STRING, allowNull: false },
});
const CompanyInfo = sequelize.define('companies_info', {
  id_companyInfo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  companyPhoneNumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: { len: [11, 16] },
  },
  companyAdress: { type: DataTypes.STRING, allowNull: false },
  countOfBuildings: {
    type: DataTypes.STRING,
    defaultValue: 1,
    validate: { min: 1 },
  },
  companyPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1 },
  },
});

const AccountFilling = sequelize.define('fillings', {
  id_filling: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fillName: { type: DataTypes.STRING, allowNull: false },
  fillPercentage: {
    type: DataTypes.INTEGER,
    defaultValue: 3,
    validate: { min: 3, max: 23 },
  },
});
const Credit = sequelize.define('credits', {
  id_credit: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  creditName: { type: DataTypes.STRING, allowNull: false },
  creditLimit: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1000,
      max: 100000,
    },
  },
  creditSum: { type: DataTypes.INTEGER, validate: { min: 1 } },
});

const BankAccount = sequelize.define('bank_accounts', {
  id_bankAccount: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bankAccountName: { type: DataTypes.STRING, allowNull: false },
});
const BankAccountBalance = sequelize.define('bank_accounts_balance', {
  id_bankBalance: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  totalBalance: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: { min: 0 },
  },
});

const CreditCard = sequelize.define('credit_cards', {
  id_card: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cardName: { type: DataTypes.STRING, defaultValue: 'Standart' },
  cardImg: { type: DataTypes.STRING, allowNull: false },
});
const CreditCardInfo = sequelize.define('credit_cards_info', {
  id_cardInfo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  expiresDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isAfter: DataTypes.NOW,
    },
  },
  cvv: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 100, max: 999 },
  },
  pincode: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1000, max: 9999 },
  },
  nfc: { type: DataTypes.BOOLEAN, defaultValue: false },
});

const CreditCardType = sequelize.define('cards_types', {
  id_cardType: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cardTypeName: { type: DataTypes.STRING, allowNull: false },
  typeImg: { type: DataTypes.STRING, allowNull: false },
});

const Bill = sequelize.define('bills', {
  id_bill: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  billName: { type: DataTypes.STRING, allowNull: false },
  billImg: { type: DataTypes.STRING, allowNull: false },
});
const BillInfo = sequelize.define('bills_info', {
  id_billInfo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  billPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { notNull: { msg: 'enter correct sum!' }, min: 1 },
  },
  billAutopay: { type: DataTypes.BOOLEAN, defaultValue: false },
  billCheckNum: { type: DataTypes.INTEGER, allowNull: false },
  operationCardName: { type: DataTypes.STRING, allowNull: false },
});

const Tax = sequelize.define('tax', {
  id_tax: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  taxName: { type: DataTypes.STRING, allowNull: false },
  taxImg: { type: DataTypes.STRING, allowNull: false },
});
const TaxInfo = sequelize.define('tax_info', {
  id_taxInfo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  taxPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { notNull: { msg: 'enter correct sum!' }, min: 1 },
  },
  taxAutopay: { type: DataTypes.BOOLEAN, defaultValue: false },
  taxCheckNum: { type: DataTypes.INTEGER, allowNull: false },
  operationCardName: { type: DataTypes.STRING, allowNull: false },
});

const Fees = sequelize.define('fees', {
  id_fees: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  feesName: { type: DataTypes.STRING, allowNull: false },
  feesImg: { type: DataTypes.STRING, allowNull: false },
});
const FeesInfo = sequelize.define('fees_info', {
  id_feesInfo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  feesPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { notNull: { msg: 'enter correct sum!' }, min: 1 },
  },
  feesAutopay: { type: DataTypes.BOOLEAN, defaultValue: false },
  feesCheckNum: { type: DataTypes.INTEGER, allowNull: false },
  operationCardName: { type: DataTypes.STRING, allowNull: false },
});

const OnlinePayment = sequelize.define('online_payments', {
  id_payment: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  paymentName: { type: DataTypes.STRING, allowNull: false },
  paymentImg: { type: DataTypes.STRING, allowNull: false },
});
const OnlinePaymentInfo = sequelize.define('online_payments_info', {
  id_paymentInfo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  paymentPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { notNull: { msg: 'enter correct sum!' }, min: 1 },
  },
  paymentAutopay: { type: DataTypes.BOOLEAN, defaultValue: false },
  paymentCheckNum: { type: DataTypes.INTEGER, allowNull: false },
  operationCardName: { type: DataTypes.STRING, allowNull: false },
});

const UserMessage = sequelize.define('user_messages', {
  id_message: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message: { type: DataTypes.STRING, allowNull: false },
});

const Transaction = sequelize.define('transactions', {
  id_transaction: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  transactionType: { type: DataTypes.STRING, allowNull: false },
  transactionSUm: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1, notNull: { msg: 'enter correct sum!' } },
  },
});
const TransactionInfo = sequelize.define('transactions_info', {
  id_transactionInfo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  purpose: { type: DataTypes.STRING, allowNull: false },
  checkNum: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 100000000, max: 999999999 },
  },
  bankComission: {
    type: DataTypes.INTEGER,
    defaultValue: 2,
    validate: { min: 2, max: 13 },
  },
  transactionDescription: { type: DataTypes.STRING, defaultValue: 'none' },
});

const Activitie = sequelize.define('activities', {
  id_activitie: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  activitieName: { type: DataTypes.STRING, allowNull: false },
  activitieImg: { type: DataTypes.STRING, allowNull: false },
});
const Partner = sequelize.define('partners', {
  id_partner: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  partnerName: { type: DataTypes.STRING, allowNull: false },
  partnerImg: { type: DataTypes.STRING, allowNull: false },
});
const Benefit = sequelize.define('benefits', {
  id_benefit: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  benefitName: { type: DataTypes.STRING, allowNull: false },
  benefitImg: { type: DataTypes.STRING, allowNull: false },
});
const Offer = sequelize.define('offers', {
  id_offer: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  offerName: { type: DataTypes.STRING, allowNull: false },
  offerImg: { type: DataTypes.STRING, allowNull: false },
});
const OfferInfo = sequelize.define('offer_info', {
  id_offerInfo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  offerType: { type: DataTypes.STRING, allowNull: false },
  offerPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: { msg: 'incorrect offer price!' },
      min: 1,
    },
  },
  offerComission: {
    type: DataTypes.INTEGER,
    defaultValue: 2,
    validate: { min: 2, max: 13 },
  },
  longterm: { type: DataTypes.BOOLEAN, allowNull: false },
  offerConfirmed: { type: DataTypes.BOOLEAN, allowNull: false },
  offerDescription: { type: DataTypes.STRING, defaultValue: 'none' },
});

const PersonPartner = sequelize.define(
  'person_partner',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  { createdAt: false }
);
const PersonActivitie = sequelize.define(
  'person_activitie',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  { createdAt: false }
);
const PersonBenefit = sequelize.define(
  'person_benefit',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  { createdAt: false }
);

const CompanyPartner = sequelize.define(
  'company_partner',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  { createdAt: false }
);
const CompanyActivitie = sequelize.define(
  'company_activitie',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  { createdAt: false }
);
const CompanyBenefit = sequelize.define(
  'company_benefit',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  { createdAt: false }
);

UserAccount.hasOne(UserPerson, { foreignKey: 'accountId' });
UserPerson.belongsTo(UserAccount, { foreignKey: 'accountId' });

UserPerson.hasMany(AccountFilling), { foreignKey: 'personFillId' };
AccountFilling.belongsTo(UserPerson, { foreignKey: 'personFillId' });

UserPerson.hasMany(Credit, { foreignKey: 'personCreditId' });
Credit.belongsTo(UserPerson, { foreignKey: 'personCreditId' });

UserPerson.hasMany(OnlinePayment, { foreignKey: 'personPaymentId' });
OnlinePayment.belongsTo(UserPerson, { foreignKey: 'personPaymentId' });

OnlinePayment.hasOne(OnlinePaymentInfo, { foreignKey: 'paymentId' });
OnlinePaymentInfo.belongsTo(OnlinePayment, { foreignKey: 'paymentId' });

UserPerson.hasMany(Bill, { foreignKey: 'personBillId' });
Bill.belongsTo(UserPerson, { foreignKey: 'personBillId' });

Bill.hasOne(BillInfo, { foreignKey: 'billId' });
BillInfo.belongsTo(Bill), { foreignKey: 'billId' };

UserPerson.hasMany(Tax, { foreignKey: 'personTaxId' });
Tax.belongsTo(UserPerson, { foreignKey: 'personTaxId' });

Tax.hasOne(TaxInfo, { foreignKey: 'taxId' });
TaxInfo.belongsTo(Tax, { foreignKey: 'taxId' });

UserPerson.hasMany(Fees, { foreignKey: 'personFeesId' });
Fees.belongsTo(UserPerson, { foreignKey: 'personFeesId' });

Fees.hasOne(FeesInfo, { foreignKey: 'feesId' });
FeesInfo.belongsTo(Fees, { foreignKey: 'feesId' });

UserPerson.hasMany(UserMessage, { foreignKey: 'personMessageId' });
UserMessage.belongsTo(UserPerson, { foreignKey: 'personMessageId' });

UserAccount.hasMany(BankAccount, { foreignKey: 'userBankId' });
BankAccount.belongsTo(UserAccount, { foreignKey: 'userBankId' });

BankAccount.hasOne(BankAccountBalance), { foreignKey: 'bankId' };
BankAccountBalance.belongsTo(BankAccount, { foreignKey: 'bankBId' });

BankAccount.hasMany(CreditCard, { foreignKey: 'bankCardId' });
CreditCard.belongsTo(BankAccount), { foreignKey: 'bankCardId' };

CreditCard.hasOne(CreditCardInfo, { foreignKey: 'cardId' });
CreditCardInfo.belongsTo(CreditCard, { foreignKey: 'cardId' });

CreditCardInfo.hasMany(CreditCardType, { foreignKey: 'cardInfoId' });
CreditCardType.belongsTo(CreditCardInfo, { foreignKey: 'cardInfoId' });

UserAccount.hasMany(Company, { foreignKey: 'userCompanyId' });
Company.belongsTo(UserAccount, { foreignKey: 'userCompanyId' });

Company.hasMany(CompanyInfo, { foreignKey: 'companyId' });
CompanyInfo.belongsTo(Company, { foreignKey: 'companyId' });

Company.hasMany(Offer, { foreignKey: 'companyOfferId' });
Offer.belongsTo(Company, { foreignKey: 'companyOfferId' });

UserPerson.hasMany(Offer, { foreignKey: 'personOfferId' });
Offer.belongsTo(UserPerson, { foreignKey: 'personOfferId' });

Offer.hasOne(OfferInfo, { foreignKey: 'offerId' });
OfferInfo.belongsTo(Offer, { foreignKey: 'offerId' });

Transaction.hasOne(TransactionInfo, { foreignKey: 'transactionId' });
TransactionInfo.belongsTo(Transaction, { foreignKey: 'transactionId' });

UserPerson.hasMany(Transaction, { foreignKey: 'personTransactionId' });
Transaction.belongsTo(UserPerson, { foreignKey: 'personTransactionId' });

Company.hasMany(Transaction, { foreignKey: 'companyTransactionId' });
Transaction.belongsTo(Company, { foreignKey: 'companyTransactionId' });

Partner.belongsToMany(UserPerson, { through: PersonPartner });
UserPerson.belongsToMany(Partner, { through: PersonPartner });

Activitie.belongsToMany(UserPerson, { through: PersonActivitie });
UserPerson.belongsToMany(Activitie, { through: PersonActivitie });

Benefit.belongsToMany(UserPerson, { through: PersonBenefit });
UserPerson.belongsToMany(Benefit, { through: PersonBenefit });

Partner.belongsToMany(Company, { through: CompanyPartner });
Company.belongsToMany(Partner, { through: CompanyPartner });

Activitie.belongsToMany(Company, { through: CompanyActivitie });
Company.belongsToMany(Activitie, { through: CompanyActivitie });

Benefit.belongsToMany(Company, { through: CompanyBenefit });
Company.belongsToMany(Benefit, { through: CompanyBenefit });

module.exports = {
  AvailableActivitie,
  AvailableBenefit,
  AvailablePartner,
  UserInfo,
  Faq,
  UserAccount,
  UserMessage,
  UserPerson,
  Company,
  CompanyInfo,
  Bill,
  BillInfo,
  Tax,
  TaxInfo,
  Fees,
  FeesInfo,
  OnlinePayment,
  OnlinePaymentInfo,
  Transaction,
  TransactionInfo,
  Partner,
  Benefit,
  Activitie,
  Offer,
  OfferInfo,
  BankAccount,
  BankAccountBalance,
  CreditCard,
  CreditCardInfo,
  CreditCardType,
  AccountFilling,
  Credit,
  PersonPartner,
};
