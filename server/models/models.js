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
      isAfter: new Date(),
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
const OfferInfo = sequelize.define('user_person', {
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

UserAccount.hasOne(UserPerson);
UserPerson.belongsTo(UserAccount);

UserPerson.hasMany(AccountFilling);
AccountFilling.belongsTo(UserPerson);

UserPerson.hasMany(Credit);
Credit.belongsTo(UserPerson);

UserPerson.hasMany(OnlinePayment);
OnlinePayment.belongsTo(UserPerson);

OnlinePayment.hasOne(OnlinePaymentInfo, { as: 'PaymentInfo' });
OnlinePaymentInfo.belongsTo(OnlinePayment);

UserPerson.hasMany(Bill);
Bill.belongsTo(UserPerson);

Bill.hasOne(BillInfo);
BillInfo.belongsTo(Bill);

UserPerson.hasMany(Tax);
Tax.belongsTo(UserPerson);

Tax.hasOne(TaxInfo);
TaxInfo.belongsTo(Tax);

UserPerson.hasMany(Fees);
Fees.belongsTo(UserPerson);

Fees.hasOne(FeesInfo);
FeesInfo.belongsTo(Fees);

UserPerson.hasMany(UserMessage);
UserMessage.belongsTo(UserPerson);

UserAccount.hasMany(BankAccount);
BankAccount.belongsTo(UserAccount);

BankAccount.hasOne(BankAccountBalance, { as: 'BanlBalance' });
BankAccountBalance.belongsTo(BankAccount);

BankAccount.hasMany(CreditCard);
CreditCard.belongsTo(BankAccount);

CreditCard.hasOne(CreditCardInfo, { as: 'CardInfo' });
CreditCardInfo.belongsTo(CreditCard);

CreditCardInfo.hasMany(CreditCardType, { as: 'CardType' });
CreditCardType.belongsTo(CreditCardInfo);

UserAccount.hasMany(Company);
Company.belongsTo(UserAccount);

Company.hasMany(CompanyInfo);
CompanyInfo.belongsTo(Company);

Company.hasMany(Partner);
Partner.belongsTo(Company);

Company.hasMany(Activitie);
Activitie.belongsTo(Company);

Company.hasMany(Benefit);
Benefit.belongsTo(Company);

Company.hasMany(Offer);
Offer.belongsTo(Company);

Offer.hasOne(OfferInfo);
OfferInfo.belongsTo(Offer);

Transaction.hasOne(TransactionInfo);
TransactionInfo.belongsTo(Transaction);

UserPerson.hasMany(Transaction);
Transaction.belongsTo(UserPerson);

Company.hasMany(Transaction);
Transaction.belongsTo(Company);

module.exports = {
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
};
